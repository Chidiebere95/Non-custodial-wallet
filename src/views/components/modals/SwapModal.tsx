import React, { useEffect, useState } from 'react';

import '../../../assets/scss/modals.scss';
import Button, { Button2 } from '../molecules/Button';
import img from '../../../assets/images/eth_logo.png';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBaby, FaTimes } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';
import { triggerGetAllTokens } from '../../../features/general/general_slice';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../../store/store';
import NotificationsLoader from '../atoms/skeleton-loaders/swap-page/SwapModalLoader';

interface Iprops {
  closeModal: () => void;
}
const SwapModal = ({ closeModal }: Iprops) => {
  const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
  const { getAllTokens } = useSelector((state: RootState) => state.general);
  const [inputValue, setInputValue] = useState('');
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
          <input
            type='text'
            id='search-swap-token'
            className=''
            placeholder='Enter token name or paste address'
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <div
            className={`icon clear ${inputValue.length > 0 && 'show'}`}
            onClick={() => setInputValue('')}
          >
            <LiaTimesSolid />
          </div>
        </label>
        <div className='tokens'>
          {getAllTokens.status === 'base' ||
          getAllTokens.status === 'loading' ||
          true ? (
            <NotificationsLoader />
          ) : getAllTokens.status === 'successful' ? (
            <>
              {getAllTokens.data.length === 0 ? (
                <></>
              ) : (
                <>
                  {getAllTokens.data.map((token, index: number) => (
                    <div key={index} className='token'>
                      <img
                        src={`https://roqqu.com/static/media/tokens/${token.symbol}.png`}
                        alt=''
                      />
                      <div className='details'>
                        <p className='symbol'>{token.symbol.toUpperCase()}</p>
                        <p className='name'>{token.name}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
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
