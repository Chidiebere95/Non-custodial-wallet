import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import Button from '../molecules/Button';

interface Iprops {
  closeModal: () => void;
  onClickBtn: () => void;
}
const PreSwapModal = ({ closeModal, onClickBtn }: Iprops) => {
  return (
    <div className='modal-content-wrapper pre-swap-modal'>
      <div className='header'>
        <h5>Smart swaps are here!</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='accounts-wrapper'>hello</div>
        <div className='btn'>
          <Button
            text='Add Account or hardware wallet'
            width='100%'
            onClick={onClickBtn}
            variant='secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default PreSwapModal;
