import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import { FaChevronLeft, FaPlus } from 'react-icons/fa';
import { BiImport } from 'react-icons/bi';
import { PiGitFork } from 'react-icons/pi';
import { ethers } from 'ethers';
interface Iprops {
  closeModal: () => void;
  onClickBackBtn: () => void;
  setShowImportAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  accounts: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  setAccounts: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        address: string;
        balance: string | number;
        symbol: string;
      }[]
    >
  >;
}
const AccountModal = ({
  closeModal,
  onClickBackBtn,
  setShowImportAccountModal,
  accounts,
  setAccounts,
}: Iprops) => {
  const handleAddANewAccount = () => {
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    const newAccount = { name: `Account ${accounts.length + 1}`, address };
    setAccounts([...(accounts as any), newAccount]);
    closeModal();
  };
  return (
    <div className='modal-content-wrapper account-modal'>
      <div className='header'>
        <div className='back center' onClick={onClickBackBtn}>
          <FaChevronLeft className='icon' />
        </div>
        <h5>Add acount</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='btns'>
          <button onClick={handleAddANewAccount}>
            <FaPlus />
            <span>Add a new account</span>
          </button>
          <button
            onClick={() => {
              setShowImportAccountModal(true);
              closeModal();
            }}
          >
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

export default AccountModal;
