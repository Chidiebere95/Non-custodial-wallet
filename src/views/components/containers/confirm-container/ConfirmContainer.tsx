import { useEffect, useState } from 'react';
import accountDefault from '../../../../assets/images/account-default.png';
import './ConfirmContainer.scss';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import Modal from '../../molecules/Modal';
import QRScanner from '../../molecules/qr-scanner/QRScanner';
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaChevronLeft,
  FaTimes,
} from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../../molecules/Button';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function ConfirmContainer({ setActionMain }: Iprops) {
  const [inputWidth, setInputWidth] = useState(20);

  // Function to handle input change
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    // Calculate new width based on text length
    const newWidth = Math.max(inputValue.length * 10, 20); // Adjust minimum width as needed
    setInputWidth(newWidth);
  };

  return (
    <div className='confirm-container'>
      <div className='header'>
        <div className='back' onClick={() => setActionMain('')}>
          <div className='btn'>
            <FaChevronLeft className='icon' />
            <p>Edit</p>
          </div>
        </div>
        <p className='title'>Confirm</p>
      </div>

      <div className='content'>
        <div className='main'>
          <div className='send-direction'>
            <div className='account'>
              <img src={accountDefault} alt='' />
              <p>Account 1</p>
            </div>
            <div className='icon'>
              <FaArrowRight />
            </div>
            <div className='account'>
              <img src={accountDefault} alt='' />
              <p>Account 1</p>
            </div>
          </div>
          <div className='send-info-wrapper'>
            <div className='send-info'>
              <div className='token'>
                <p>
                  Sending <span>BNB</span>
                </p>
              </div>
              <div className='value'>
                <img src={accountDefault} alt='send token logo' />
                <p>0.00362188</p>
              </div>
            </div>
          </div>
          <div className='con'>
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
        <div className='btns'>
          <Button
            text='Reject'
            width='50rem'
            onClick={() => {
              // setShowImportTokensModal(true);
              // setShowConfirmImportTokenModal(false);
            }}
            variant='secondary'
          />
          <Button
            text='Confirm'
            width='50rem'
            onClick={() => {
              // setShowImportTokensModal(true);
              // setShowConfirmImportTokenModal(false);
            }}
            variant='primary'
          />
        </div>
      </div>
    </div>
  );
}

export default ConfirmContainer;
