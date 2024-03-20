import React, { useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import Button from '../molecules/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  setAccounts,
  setActiveAccount,
} from '../../../features/accounts/accounts_slice';
import { FaChevronLeft } from 'react-icons/fa';
interface Iprops {
  closeModal: () => void;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowImportAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ImportAccountModal = ({
  closeModal,
  setShowAccountModal,
  setShowImportAccountModal,
}: Iprops) => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state: RootState) => state.accounts);
  const [privateKeyInputValue, setPrivateKeyInputValue] = useState('');
  const handleImport = () => {
    const { Wallet } = require('ethers');
    const wallet = new Wallet(privateKeyInputValue);
    const publicKey = wallet.address;
    const privateKey = wallet.privateKey;

    const newAccount = {
      name: `Account ${(accounts.length + 1).toString()}`,
      publicKey,
      privateKey,
      image: accountDefault,
    };
    const updatedAccounts = [...accounts, newAccount];

    dispatch(setAccounts(updatedAccounts));
    dispatch(setActiveAccount(newAccount));
    closeModal();
  };
  return (
    <div className='modal-content-wrapper import-account-modal'>
      <div className='header'>
        <div
          className='back center'
          onClick={() => {
            setShowAccountModal(true);
            setShowImportAccountModal(false);
          }}
        >
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
          <input
            type='text'
            id='private-key'
            value={privateKeyInputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrivateKeyInputValue(e.target.value)
            }
          />
        </div>
        <div className='btns'>
          <Button
            text='Cancel'
            width='100%'
            onClick={closeModal}
            variant='secondary'
            height='5.4rem'
          />
          <Button
            text='Import'
            width='100%'
            onClick={handleImport}
            variant='primary'
            height='5.4rem'
          />
        </div>
      </div>
    </div>
  );
};

export default ImportAccountModal;
