import { useEffect, useState } from 'react';
import accountDefault from '../../../../assets/images/account-default.png';
import './SendContainer.scss';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import Modal from '../../molecules/Modal';
import QRScanner from '../../molecules/qr-scanner/QRScanner';
import { FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function SendContainer({ setActionMain }: Iprops) {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState('');
  const [publicAddressInputValue, setPublicAddressInputValue] = useState('');

  const [inputWidth, setInputWidth] = useState(20);

  // Function to handle input change
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    // Calculate new width based on text length
    const newWidth = Math.max(inputValue.length * 10, 20); // Adjust minimum width as needed
    setInputWidth(newWidth);
  };

  return (
    <div className='send-container'>
      <div className='header'>
        <div className='hide'></div>
        <p className='title'>Send</p>
        <div className='cancel' onClick={() => setActionMain('')}>
          <p>Cancel</p>
        </div>
      </div>
      <div className='content'>
        <div className='account'>
          <div className='details'>
            <p className='account-name'>Account 1</p>
            <p className='account-address'>
              0xc474084761257a54a251e4bf577712110b2ea3d1
            </p>
          </div>
          <div className='cancel'>
            <LiaTimesSolid />
          </div>
        </div>
        <div className='con'>
          <div className='sec'>
            <p className='title'>Asset:</p>
            <div className='wrapper'>
              <div className='box'>
                <div className='asset'>
                  <img src={accountDefault} alt='' className='' />
                  <div className='details'>
                    <p className='symbol'>BNB</p>
                    <p className='balance-wrapper'>
                      <span className='balance'>Balance:</span>
                      <span className='amount'>0.0038 BNB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sec amount-wrapper'>
            <p className='title'>Amount:</p>
            <div className='box'>
              <div className='amount'>
                <div className='details'>
                  <div className='input-wrapper'>
                    <input
                      type='number'
                      style={{ width: inputWidth + 'px' }}
                      onChange={handleInputChange}
                      placeholder='0'
                    />
                    <p className='symbol'>BNB</p>
                  </div>
                  <p className='balance-wrapper'>0.0038 BNB</p>
                </div>
              </div>
            </div>
          </div>
          <div className='estimated-fee-wrapper'>
            <div className='estimated-fee'>
              <p className='title'>Estimated fee</p>
              <p className='amount'>0.00494 BNB</p>
            </div>
            <div className='max-fee-wrapper'>
              <div className='market'>
                <p className='title'>Market</p>
                <p className='time'>-15s</p>
              </div>
              <div className='max-fee'>
                <p className='title'>Max fee:</p>
                <p className='amount'>2992.22 BNB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendContainer;
