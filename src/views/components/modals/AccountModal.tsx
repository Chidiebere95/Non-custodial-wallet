import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import accountDefault from '../../../assets/images/account-default.png';
import '../../../assets/scss/modals.scss';
import { FaChevronLeft, FaPlus } from 'react-icons/fa';
import { BiImport } from 'react-icons/bi';
import { PiGitFork } from 'react-icons/pi';
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  setAccounts,
  setAccountsRedux,
  setActiveAccount,
} from '../../../features/accounts/accounts_slice';
interface Iprops {
  closeModal: () => void;
  setShowAccountsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowImportAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AccountModal = ({
  closeModal,
  setShowAccountsModal,
  setShowAccountModal,
  setShowImportAccountModal,
}: Iprops) => {
  const dispatch = useDispatch();
  const { accounts, activeAccount } = useSelector(
    (state: RootState) => state.accounts
  );
  const handleAddANewAccount = () => {
    const wallet = ethers.Wallet.createRandom();
    const publicKey = wallet.address;
    const privateKey = wallet.privateKey;
    const newAccount = {
      name: `Account ${(accounts.length + 1).toString()}`,
      publicKey,
      privateKey,
      image: accountDefault,
    };
    const updatedAccounts = [...accounts, newAccount];
    console.log('updated accounts', updatedAccounts);

    dispatch(setAccounts(updatedAccounts));
    dispatch(setActiveAccount(newAccount));
    closeModal();
  };
  return (
    <div className='modal-content-wrapper account-modal'>
      <div className='header'>
        <div
          className='back center'
          onClick={() => {
            setShowAccountsModal(true);
            setShowAccountModal(false);
          }}
        >
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
