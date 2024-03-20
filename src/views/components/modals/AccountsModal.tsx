import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import accountDefault from '../../../assets/images/account-default.png';
import Button from '../molecules/Button';
import { IoMdMore } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  addMorePropertiesToAccounts,
  updateBalances,
} from '../../../utils/addMorePropertiesToAccounts';
import { setActiveAccount } from '../../../features/accounts/accounts_slice';
interface Iprops {
  closeModal: () => void;
  setShowAccountsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AccountsModal = ({
  closeModal,
  setShowAccountsModal,
  setShowAccountModal,
}: Iprops) => {
  const dispatch = useDispatch();
  const { accounts, activeAccount } = useSelector(
    (state: RootState) => state.accounts
  );
  const { activeNetwork } = useSelector((state: RootState) => state.network);

  const [accountsUpdated, setAccountsUpdated] = useState<any>([]);
  useEffect(() => {
    // const addMorePropertiesToAccountsFunc = async (): Promise<any> => {
    //   const addMorePropertiesToAccount = await addMorePropertiesToAccounts(
    //     accounts,
    //     activeNetwork
    //   );
    //   setAccountsUpdated(addMorePropertiesToAccount);
    // };
    // addMorePropertiesToAccountsFunc();

    updateBalances(accounts, activeNetwork)
      .then((updatedAccounts) => {
        console.log(updatedAccounts);
        setAccountsUpdated(updatedAccounts);
        // Here you have the updated array with balances
      })
      .catch((error) => {
        console.error('Error updating balances:', error);
      });
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
          {accountsUpdated.map((account: any, index: number) => (
            <div
              key={index}
              className={`account ${
                activeAccount.publicKey === account.publicKey && 'active'
              }`}
              onClick={() => {
                dispatch(setActiveAccount(account));
                closeModal();
              }}
            >
              <div className='line'></div>
              <div className='wrapper'>
                <div className='details'>
                  <img src={account.image} alt='network logo' className='' />
                  <div className='info'>
                    <p>{account.name}</p>
                    {/* <p>{account.address}</p> */}
                    <p>
                      {`${account.publicKey.substring(
                        0,
                        6
                      )}...${account.publicKey.substring(36)}`}
                    </p>
                  </div>
                </div>
                <div className='details details-2'>
                  <div className='info'>
                    <p>{`${account.balance.toString().substring(0, 7)} ${
                      activeNetwork.symbol
                    }`}</p>
                    <p>{`${account.balance.toString().substring(0, 7)} ${
                      activeNetwork.symbol
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
            onClick={() => {
              setShowAccountsModal(false);
              setShowAccountModal(true);
            }}
            variant='secondary'
          />
        </div>
      </div>
    </div>
  );
};

export default AccountsModal;
