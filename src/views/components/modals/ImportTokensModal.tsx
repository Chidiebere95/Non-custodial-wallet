import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import tokenImg from '../../../assets/images/account-default2.png';
import accountDefault from '../../../assets/images/account-default.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { RiMore2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
import { FaExclamation } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetTokenDetails } from '../../../features/general/general_slice';
import { RootState } from '../../../store/store';
interface Iprops {
  closeModal: () => void;
  setShowImportTokensModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowConfirmImportTokenModal: React.Dispatch<React.SetStateAction<boolean>>;
  tokens: any;
  setTokens: any;
  accounts?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  setAccounts?: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        address: string;
        balance: string | number;
        symbol: string;
      }[]
    >
  >;
  providerMain?: any;
  network?: string;
  accountsUpdated?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  activeAccount?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  };
  setActiveAccount?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      address: string;
      balance: string | number;
      symbol: string;
    }>
  >;
}
const ImportTokensModal = ({
  closeModal,
  setShowImportTokensModal,
  tokens,
  setTokens,
  setShowConfirmImportTokenModal,
  accounts,
  setAccounts,
  providerMain,
  network,
  accountsUpdated,
  setActiveAccount,
  activeAccount,
}: Iprops) => {
  const dispatch = useDispatch<any>();
  const [showConfirmSection, setShowConfirmSection] = useState(false);
  const [contractAddress, setContractAddress] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimal, setDecimal] = useState('');
  const [balance, setBalance] = useState('');
  const { getTokenDetails } = useSelector((state: RootState) => state.general);

  const handleImportToken = () => {
    setShowImportTokensModal(false);
    setTokens([...tokens, { symbol, img: tokenImg }]);
  };
  useEffect(() => {
    if (contractAddress.length > 1) {
      const param: any = {
        nodeProviderUrl:
          'https://g.w.lavanet.xyz:443/gateway/sep1/rpc-http/d6e22eaf787c7c5a40a09248e91cd999',
        contractAddress: '0x8e18b4890ACa78dcA6b4067b0fE9b0c69c121D9c',
        publicKey: '0x27e5F13019bEfe14398029dD65952fAb4e14B46A',
      };
      setTimeout(() => {
        dispatch(triggerGetTokenDetails(param));
      }, 1000);
    }
  }, [contractAddress]);
  useEffect(() => {
    if (getTokenDetails.status === 'successful') {
      setSymbol(getTokenDetails.data.symbol);
      setDecimal(getTokenDetails.data.decimals);
      setBalance(getTokenDetails.data.usersTokenBalance);
    }
  }, [getTokenDetails]);

  console.log('getTokenDetails', getTokenDetails);

  return (
    <div className='modal-content-wrapper import-tokens-modal confirm-import-token-modal'>
      <div className='header'>
        <h5>Import tokens</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        {!showConfirmSection && (
          <div className=''>
            <div className='tabs-wrapper'>
              <p>Custom token</p>
            </div>
            <div className='warning'>
              <div className='left'></div>
              <div className='info'>
                <div className='icon'>
                  <FaExclamation />
                </div>
                <p className='unable'>
                  Token detection is not available on this network yet. Please
                  import token manually and make sure you trust it. Learn about{' '}
                  <span>scams and security risks</span>
                </p>
              </div>
            </div>
            <div className='form'>
              <div className='form-group'>
                <label htmlFor='contract-address'>Token contract address</label>
                <input
                  type='text'
                  id='contract-address'
                  value={contractAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setContractAddress(e.target.value)
                  }
                />
              </div>
              <div className='form-group'>
                <label htmlFor='token-symbol'>Token symbol</label>
                <input
                  type='text'
                  id='token-symbol'
                  value={symbol}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSymbol(e.target.value)
                  }
                />
              </div>
              <div className='form-group'>
                <label htmlFor='token-decimal'>Token decimal</label>
                <input
                  type='text'
                  id='token-decimal'
                  value={decimal}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDecimal(e.target.value)
                  }
                />
              </div>
            </div>
            <div className='btn'>
              <Button
                text='Next'
                width='100%'
                onClick={() => {
                  setShowConfirmSection(true);
                }}
                variant='primary'
              />
            </div>
          </div>
        )}
        {showConfirmSection && (
          <div className=''>
            <div className='tabs-wrapper'>
              <p>Would you like to import these tokens?</p>
            </div>
            <div className='details'>
              <div className='token'>
                <p>Token</p>
                <div className=''>
                  <img src={tokenImg} alt='' className='' />
                  <p className='token-name'>{symbol}</p>
                </div>
              </div>
              <div className='balance'>
                <p>Balance</p>
                <div className=''>
                  <p className='token-name'>{balance} CHIDI</p>
                </div>
              </div>
            </div>
            <div className='btn'>
              <Button
                text='Back'
                width='100%'
                onClick={() => {
                  setShowConfirmSection(false);
                }}
                variant='secondary'
              />
              <Button
                text='Import'
                width='100%'
                onClick={handleImportToken}
                variant='primary'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportTokensModal;
