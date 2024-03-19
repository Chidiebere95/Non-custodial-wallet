import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import Button from '../molecules/Button';
import { IoMdMore } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
interface Iprops {
  closeModal: () => void;
  onClickBtn: () => void;
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
  providerMain: any;
  network: string;
  accountsUpdated: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  }[];
  activeAccount: {
    name: string;
    address: string;
    balance: string | number;
    symbol: string;
  };
  setActiveAccount: React.Dispatch<
    React.SetStateAction<{
      name: string;
      address: string;
      balance: string | number;
      symbol: string;
    }>
  >;
}
const AccountsModal = ({
  closeModal,
  onClickBtn,
  accounts,
  setAccounts,
  providerMain,
  network,
  accountsUpdated,
  setActiveAccount,
  activeAccount,
}: Iprops) => {
  const { accountsRedux } = useSelector((state: RootState) => state.accounts);
  useEffect(() => {
    
  }, []);
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
          {accountsUpdated.map((account, index) => (
            <div
              key={index}
              className={`account ${
                account.address === activeAccount.address && 'active'
              }`}
              onClick={() => {
                setActiveAccount(account);
                closeModal();
              }}
            >
              <div className='line'></div>
              <div className='wrapper'>
                <div className='details'>
                  <img src={accountDefault} alt='network logo' className='' />
                  <div className='info'>
                    <p>{account.name}</p>
                    {/* <p>{account.address}</p> */}
                    <p>
                      {`${account.address.substring(
                        0,
                        6
                      )}...${account.address.substring(36)}`}
                    </p>
                  </div>
                </div>
                <div className='details details-2'>
                  <div className='info'>
                    <p>{`${account.balance.toString().substring(0, 7)} ${
                      account.symbol
                    }`}</p>
                    <p>{`${account.balance.toString().substring(0, 7)} ${
                      account.symbol
                    }`}</p>
                  </div>
                  <IoMdMore className='icon' />
                </div>
              </div>
            </div>
          ))}
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
