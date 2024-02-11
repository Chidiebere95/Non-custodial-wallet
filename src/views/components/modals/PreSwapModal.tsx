import React from 'react';

import '../../../assets/scss/modals.scss';
import Button, { Button2 } from '../molecules/Button';
import img from '../../../assets/images/pre-swap-img.png';

interface Iprops {
  closeModal: () => void;
}
const PreSwapModal = ({ closeModal }: Iprops) => {
  return (
    <div className='modal-content-wrapper pre-swap-modal'>
      <div className='header'>
        <h5>Smart swaps are here!</h5>
      </div>
      <div className='body'>
        <div className='img-con'>
          <img src={img} alt='' className='' />
        </div>
        <p>
          MetaMask Swaps just got a whole lot smarter! Enabling Smart Swaps will
          allow MetaMask to programmatically optimize your Swap to help:
        </p>
        <ul className='get-started-desc'>
          <li>Minimize transaction costs</li>
          <li>Reduce transaction failures</li>
          <li>Eliminate stuck transactions</li>
          <li>Prevent front-running *</li>
        </ul>
        <p className='info'>
          *Smart Swaps will submit your transaction privately. You can opt-out
          in advanced settings at any time. To learn more about Smart Swaps,
          read our <span>FAQ and risk disclosure</span>
        </p>
        <div className='btn'>
          <Button
            text='Enable Smart Swaps'
            width='100%'
            onClick={() => {
              closeModal();
            }}
            variant='primary'
          />
          <Button2
            text='Manage in settings'
            onClick={() => {
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreSwapModal;
