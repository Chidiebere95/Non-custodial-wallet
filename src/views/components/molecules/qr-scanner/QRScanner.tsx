import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import './QRScanner.scss';

interface Iprops {
  closeModal: () => void;
  scannedResult: string;
  setScannedResult: React.Dispatch<React.SetStateAction<string>>;
}
const QRScanner = ({ closeModal, scannedResult, setScannedResult }: Iprops) => {
  const webcamRef = useRef<any>(null);

  console.log('scanned result', scannedResult);

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
      closeModal();
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
