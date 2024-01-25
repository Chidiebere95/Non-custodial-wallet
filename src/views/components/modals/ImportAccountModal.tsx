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
        <div className='btns'>
          <button>
            <FaPlus />
            <span>Add a new account</span>
          </button>
          <button>
            <BiImport />
            <span>Import account</span>
          </button>
          <button>
            <PiGitFork />
            <span>Add hardware wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportAccountModal;
