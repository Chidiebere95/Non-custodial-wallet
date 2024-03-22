import React, { useEffect, useRef, useState } from 'react';
import './InputGroup2.scss';
import { BsQrCodeScan, BsUpcScan } from 'react-icons/bs';
import { PiScanDuotone } from 'react-icons/pi';
import { TbGridScan, TbRouteScan } from 'react-icons/tb';
import { FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import { RootState } from '../../../../store/store';
// const Web3 = require('web3');
interface IProps {
  placeHolder: string;
  setShowQRScanner: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  // publicAddressInputValue: string;
  // setPublicAddressInputValue: React.Dispatch<React.SetStateAction<string>>;

  setSelectedAccount: React.Dispatch<
    React.SetStateAction<{
      name: string;
      publicKey: string;
    }>
  >;
  setPublicAddressInputValueResult: React.Dispatch<
    React.SetStateAction<string>
  >;
  setCheckingPublicAddressInputValue: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setCheckingAddressType: React.Dispatch<React.SetStateAction<boolean>>;
}
const InputGroup2 = ({
  placeHolder,
  setShowQRScanner,
  name,
  setSelectedAccount,
  setPublicAddressInputValueResult,
  setCheckingPublicAddressInputValue,
  setCheckingAddressType,
}: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const { activeNetwork } = useSelector((state: RootState) => state.network);
  const [publicAddressInputValue, setPublicAddressInputValue] = useState('');

  const timeoutRef = useRef<any>(null);
  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout if there's an input value
    if (publicAddressInputValue) {
      timeoutRef.current = setTimeout(() => {
        console.log('dispatch');
        const providerUrl = activeNetwork.providerURL;
        // dispatch(); // Dispatch your action here
        const { ethers } = require('ethers');
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const web3 = new Web3(providerUrl);
        async function checkAddressType(publicAddressInputValue: string) {
          // Check if it is not an EVM address
          setCheckingAddressType(true);
          if (!ethers.utils.isAddress(publicAddressInputValue)) {
            return 'not evm or syntax not complete';
          }

          // Check if it is a contract
          const code = await provider.getCode(publicAddressInputValue);
          if (code !== '0x') {
            return 'smart contract';
          }

          // If it is not a contract, it must be a regular address
          return 'address';
        }

        checkAddressType(publicAddressInputValue)
          .then((result) => {
            setPublicAddressInputValueResult(result);
            setCheckingAddressType(false);
          })
          .catch((error) => console.error(error));
      }, 100);
    } else {
      setPublicAddressInputValueResult('');
      setCheckingAddressType(false);
    }

    // Cleanup function to clear the timeout when the component unmounts or the dependency changes
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [publicAddressInputValue]);

  // console.log('result', publicAddressInputValueResult);

  return (
    <div className='input-group-component-2'>
      <div className='label-con'></div>
      <div className='input-wrapper'>
        <input
          id={name}
          name={name}
          type='text'
          value={publicAddressInputValue}
          placeholder={placeHolder}
          onChange={(e) => {
            setPublicAddressInputValue(e.target.value);
            const selectedAccount = {
              name: e.target.value,
              publicKey: e.target.value,
            };
            setSelectedAccount(selectedAccount);
          }}
        />
        <div className='btns'>
          {publicAddressInputValue.length > 0 ? (
            <div
              className='cancel'
              onClick={() => {
                setPublicAddressInputValue('');
                setCheckingAddressType(false);
              }}
            >
              <LiaTimesSolid />
            </div>
          ) : (
            <div className='scan' onClick={() => setShowQRScanner(true)}>
              <TbGridScan />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputGroup2;
