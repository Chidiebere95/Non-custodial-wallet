import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { RiMore2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
import { FaChevronLeft, FaPlus } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { BiImport, BiSolidMessageDots } from 'react-icons/bi';
import { PiGitFork } from 'react-icons/pi';
interface Iprops {
  closeModal: () => void;
  onClickBackBtn: () => void;
}
const ImportAccountModal = ({ closeModal, onClickBackBtn }: Iprops) => {
  return (
    <div className='modal-content-wrapper import-account-modal'>
      <div className='header'>
        <div className='back center' onClick={onClickBackBtn}>
          <FaChevronLeft className='icon' />
        </div>
        <h5>Import acount</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <p>
          Imported accounts won’t be associated with your MetaMask Secret
          Recovery Phrase. Learn more about imported accounts <span>here</span>
        </p>
        <div className='select-type'>
          <label htmlFor='type'>Select Type</label>
          <select name='type' id='type' className='custom-select'>
            <option value='private-key'> Private Key </option>
            <option value='json-file'> JSON File </option>
          </select>
        </div>
        <div className='private-key'>
          <label htmlFor='private-key'>
            Enter your private key string here
          </label>
          <input type='text' id='private-key' />
        </div>
        <div className='btns'>
          <Button
            text='Cancel'
            width='100%'
            // onClick={onClickBtn}
            variant='secondary'
            height='5.4rem'
          />
          <Button
            text='Import'
            width='100%'
            onClick={closeModal}
            variant='primary'
            height='5.4rem'
          />
        </div>
      </div>
    </div>
  );
};

export default ImportAccountModal;
