import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import './QRScanner.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Web3 from 'web3';

interface Iprops {
  closeModal: () => void;
  // scannedResult: string;
  // setScannedResult: React.Dispatch<React.SetStateAction<string>>;
  setSelectedAccount: React.Dispatch<
    React.SetStateAction<{
      name: string;
      publicKey: string;
    }>
  >;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  setPublicAddressInputValueResult: React.Dispatch<
    React.SetStateAction<string>
  >;
  setScanningQRCode: React.Dispatch<React.SetStateAction<boolean>>;
}
const QRScanner = ({
  closeModal,
  // scannedResult,
  // setScannedResult,
  setSelectedAccount,
  setAction,
  setPublicAddressInputValueResult,
  setScanningQRCode,
}: Iprops) => {
  const { activeNetwork } = useSelector((state: RootState) => state.network);
  const webcamRef = useRef<any>(null);
  const [scannedResult, setScannedResult] = useState('');

  // console.log('scanned result', scannedResult);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();

      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        if (context) {
          context.drawImage(img, 0, 0, img.width, img.height);

          const imageData = context.getImageData(0, 0, img.width, img.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height, {
            inversionAttempts: 'dontInvert',
          });

          if (code) {
            setScannedResult(code.data);
          }
        }
      };

      img.src = imageSrc;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 100); // Adjust the interval as needed for performance

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (scannedResult) {
      const selectedAccount = { name: scannedResult, publicKey: scannedResult };
      setSelectedAccount(selectedAccount);
      closeModal();
      setAction('send');

      const test = async () => {
        // format later
        const providerUrl = activeNetwork.providerURL;
        // dispatch(); // Dispatch your action here
        const { ethers } = require('ethers');
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const web3 = new Web3(providerUrl);
        async function checkAddressType(publicAddressInputValue: string) {
          // Check if it is not an EVM address
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

        checkAddressType(scannedResult)
          .then((result) => {
            setPublicAddressInputValueResult(result);
            setScanningQRCode(true);
          })
          .catch((error) => console.error(error));
      };
      test();
    }
  }, [scannedResult]);

  return (
    <div className='qr-scanner-wrapper'>
      <div className='webcam-wrapper'>
        <Webcam
          audio={false}
          height={'100%'}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={'100%'}
        />
      </div>
      <div className='capture-result'>
        {/* <button onClick={capture}>Capture</button> */}
        {scannedResult && <p>Scanned Result: {scannedResult}</p>}
      </div>
    </div>
  );
};

export default QRScanner;
