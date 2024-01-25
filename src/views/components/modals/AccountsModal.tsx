import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { RiMore2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
interface Iprops {
  closeModal: () => void;
  onClickBtn: () => void;
}
const AccountsModal = ({ closeModal, onClickBtn }: Iprops) => {
  return (
    <div className='modal-content-wrapper accounts-modal'>
      <div className='header'>
        <h5>Select an account</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='accounts-wrapper'>
          <div
            className={`account ${
              'ethereum-mainnet' === 'ethereum-mainnet' && 'active'
            }`}
            onClick={() => {
              closeModal();
            }}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <div className='details'>
                <img src={accountDefault} alt='network logo' className='' />
                <div className='info'>
                  <p>Account 1</p>
                  <p>0x27e5F...4B46A</p>
                </div>
              </div>
              <div className='details details-2'>
                <div className='info'>
                  <p>0 Goerli ETH</p>
                  <p>0 Goerli ETH</p>
                </div>
                <IoMdMore className='icon' />
              </div>
            </div>
          </div>
        </div>
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

export default AccountsModal;
