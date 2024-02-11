import React, { useEffect } from 'react';

import '../../../assets/scss/modals.scss';
import Button, { Button2 } from '../molecules/Button';
import img from '../../../assets/images/pre-swap-img.png';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBaby, FaTimes } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { triggerGetAllTokens } from '../../../features/general/general_slice';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../../store/store';

interface Iprops {
  closeModal: () => void;
}
const SwapModal = ({ closeModal }: Iprops) => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();

  const { getAllTokens } = useSelector((state: RootState) => state.general);
  useEffect(() => {
    dispatch(triggerGetAllTokens());
  }, []);
  console.log('getall tokens', getAllTokens);

  return (
    <div className='modal-content-wrapper swap-modal'>
      <div className='header'>
        <h5>Swap to</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <label htmlFor='search-swap-token' className='input-con'>
          <div className='icon'>
            <RiSearchLine />
          </div>
          <input type='text' id='search-swap-token' className='' />
          <div className='icon clear'>
            <LiaTimesSolid />
          </div>
        </label>
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

export default SwapModal;
