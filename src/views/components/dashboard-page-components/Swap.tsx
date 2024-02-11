import { useState } from 'react';

import '../../../assets/scss/dashboard-page-components.scss';
import Modal from '../molecules/Modal';
import PreSwapModal from '../modals/PreSwapModal';
import { FaArrowAltCircleLeft, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import {
  FaArrowDownLong,
  FaArrowLeftLong,
  FaChevronDown,
} from 'react-icons/fa6';
import { HiOutlineArrowDown, HiOutlineArrowLeft } from 'react-icons/hi';
import img from '../../../assets/images/eth_logo.png';
import img2 from '../../../assets/images/linea-logo-mainnet.png';
import Button, { Button2 } from '../molecules/Button';
import SwapModal from '../modals/SwapModal';

function Swap() {
  const [showPreSwapModal, setShowPreSwapModal] = useState(false);
  const [showSwapModal, setShowSwapModal] = useState(true);
  const [swapDirection, setSwapDirection] = useState('');
  const [changeSwapDirection, setChangeSwapDirection] = useState(false);

  return (
    <div className='swap-wrapper'>
      <div className='dashboard-box-swap'>
        <div className='box-header-swap'>
          <HiOutlineArrowLeft className='swap-icon' />
          <p>Swap</p>
          <IoSettingsSharp className='swap-icon' />
        </div>
        <div className='box-content-swap'>
          <div className='box'>
            <div className='box-con box-con-1'>
              <div className='token-wrapper'>
                <div
                  className='token-con'
                  onClick={() => setShowSwapModal(true)}
                >
                  <img src={img} alt='' className='' />
                  <p>ETH</p>
                  <FaChevronDown />
                </div>
                <div className='amount'>
                  <input type='number' placeholder='0' />
                </div>
              </div>
              <p className='balance-wrapper'>
                Balance: <span>0</span>
              </p>
            </div>
            <div className='box-con '>
              <div className='token-wrapper'>
                <div className='token-con'>
                  <img src={img2} alt='' className='' />
                  <p>DAI</p>
                  <FaChevronDown />
                </div>
                <div className='amount'>
                  <input type='number' placeholder='0' />
                </div>
              </div>
              <p className='balance-wrapper'>
                Balance: <span>0</span>
              </p>
            </div>
            <div
              className='swap-direction-btn'
              onClick={() => setChangeSwapDirection(!changeSwapDirection)}
            >
              <HiOutlineArrowDown
                className={`swap-icon ${changeSwapDirection && 'rotate'}`}
              />
            </div>
          </div>
          <div className='btn'>
            <Button
              text='Enable Smart Swaps'
              width='100%'
              onClick={() => {
                console.log('click');
              }}
              variant='primary'
            />
            <Button2
              text='Manage in settings'
              onClick={() => {
                console.log('click');
              }}
            />
          </div>
        </div>
      </div>

      {showPreSwapModal && (
        <Modal closeModal={() => setShowPreSwapModal(false)}>
          <PreSwapModal closeModal={() => setShowPreSwapModal(false)} />
        </Modal>
      )}
      {showSwapModal && (
        <Modal closeModal={() => setShowSwapModal(false)}>
          <SwapModal closeModal={() => setShowSwapModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default Swap;
