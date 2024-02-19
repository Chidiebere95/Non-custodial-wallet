import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import tokenImg from '../../../assets/images/account-default2.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { RiMore2Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
import { FaChevronLeft, FaExclamation } from 'react-icons/fa';
interface Iprops {
  closeModal: () => void;
  setShowConfirmImportTokenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowImportTokensModal: React.Dispatch<React.SetStateAction<boolean>>;
  accounts?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  setAccounts?: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        address: string;
        balance: string | number;
        symbol: string;
      }[]
    >
  >;
  providerMain?: any;
  network?: string;
  accountsUpdated?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  activeAccount?: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  };
  setActiveAccount?: React.Dispatch<
    React.SetStateAction<{
      name: string;
      address: string;
      balance: string | number;
      symbol: string;
    }>
  >;
}
const ConfirmImportTokenModal = ({
  closeModal,
  setShowConfirmImportTokenModal,
  setShowImportTokensModal,
  accounts,
  setAccounts,
  providerMain,
  network,
  accountsUpdated,
  setActiveAccount,
  activeAccount,
}: Iprops) => {
  const [contractAddress, setContractAddress] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimal, setDecimal] = useState('');
  return (
    <div className='modal-content-wrapper confirm-import-token-modal'>
      <div className='header'>
        <div
          className='back center'
          onClick={() => {
            setShowImportTokensModal(true);
            setShowConfirmImportTokenModal(false);
          }}
        >
          <FaChevronLeft />
        </div>
        <h5>Import tokens</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='tabs-wrapper'>
          <p>Would you like to import these tokens?</p>
        </div>
        <div className='details'>
          <div className='token'>
            <p>Token</p>
            <div className=''>
              <img src={tokenImg} alt='' className='' />
              <p className='token-name'>CHIDI</p>
            </div>
          </div>
          <div className='balance'>
            <p>Balance</p>
            <div className=''>
              <p className='token-name'>0 CHIDI</p>
            </div>
          </div>
        </div>
        <div className='btn'>
          <Button
            text='Back'
            width='100%'
            onClick={() => {
              setShowImportTokensModal(true);
              setShowConfirmImportTokenModal(false);
            }}
            variant='secondary'
          />
          <Button
            text='Import'
            width='100%'
            onClick={() => {
              setShowConfirmImportTokenModal(false);
            }}
            variant='primary'
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmImportTokenModal;
