/* eslint-disable no-restricted-globals */
import { useNavigate, useParams } from 'react-router-dom';

import { Wallet } from 'ethers';
// import Wallet from 'ethereumjs-wallet';
import EthUtil from 'ethereumjs-util';

import Logo from '../components/atoms/Logo';
import eth from '../../assets/images/eth_logo.png';
import accountDefault from '../../assets/images/account-default.png';
import { FaChevronDown, FaCopy, FaPlus } from 'react-icons/fa';
import { MdMoreVert, MdOutlineArrowOutward } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../components/molecules/Button';
import { BiSolidCopy, BiSolidMessageDots } from 'react-icons/bi';
import { PiPlusMinusBold } from 'react-icons/pi';
import { GoArrowSwitch } from 'react-icons/go';
import { AiOutlineLineChart } from 'react-icons/ai';
import { SiDovecot } from 'react-icons/si';
import { FiRefreshCw } from 'react-icons/fi';
import '../../assets/scss/dashboard.scss';
import Modal from '../components/molecules/Modal';
import NetworksModal from '../components/modals/NetworksModal';
import AccountsModal from '../components/modals/AccountsModal';
import AccountModal from '../components/modals/AccountModal';
import ImportAccountModal from '../components/modals/ImportAccountModal';
import Swap from '../components/main/dashboard/swap/Swap';
import ImportTokensModal from '../components/modals/ImportTokensModal';
import ConfirmImportTokenModal from '../components/modals/ConfirmImportTokenModal';
import { useDispatch, useSelector } from 'react-redux';
import { resetGetTokenDetails } from '../../features/general/general_slice';
import { RootState } from '../../store/store';
import Send from '../components/main/dashboard/send/Send';
import {
  setAccounts,
  setAccountsRedux,
  setActiveAccount,
  setUpdatedAccounts,
} from '../../features/accounts/accounts_slice';
import { useGetBalance } from '../../utils/customHooks';
import { updateBalances } from '../../utils/helpers';
function Dashboard() {
  const { ethers } = require('ethers');
  const { networkDetails: networkRedux, activeNetwork } = useSelector(
    (state: RootState) => state.network
  );
  const { activeAccount, accounts } = useSelector(
    (state: RootState) => state.accounts
  );
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [mnemonic, setMnemonic] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [network, setNetwork] = useState('base-goerli');

  //
  const [showNetworksModal, setShowNetworksModal] = useState(false);
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showImportAccountModal, setShowImportAccountModal] = useState(false);
  const [showImportTokensModal, setShowImportTokensModal] = useState(false);
  const [showConfirmImportTokenModal, setShowConfirmImportTokenModal] =
    useState(false);
  const [activeTab, setActiveTab] = useState('tokens');
  const [actionMain, setActionMain] = useState('');

  useEffect(() => {
    const walletTemp = localStorage.getItem('wallet');
    if (walletTemp) {
      const walletDetails = JSON.parse(walletTemp);
      const { data } = walletDetails;
      const wallet = ethers.Wallet.fromMnemonic(data);
      const privateKey = wallet.privateKey;
      const publickKey = wallet.address;
      setActiveAccount({
        name: 'Account 1',
        publickKey,
        privateKey,
        iamge: accountDefault,
      });
      dispatch(
        setAccounts([
          { name: 'Account 1', publickKey, privateKey, iamge: accountDefault },
        ])
      );
      setMnemonic(data);
    } else {
      dispatch(
        setActiveAccount({
          name: 'Account 1',
          publicKey: '0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A',
          privatekey: '',
          image: accountDefault,
        })
      );
      dispatch(
        setAccounts([
          {
            name: 'Account 1',
            publicKey: '0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A',
            privatekey: '',
            image: accountDefault,
          },
        ])
      );
    }
  }, []);

  useEffect(() => {
    console.log('useeffect');
    var hashText = window.location.hash;
    hashText = hashText.substring(1);
    if (hashText.includes('swap')) {
      hashText = hashText.split('/')[0];
    }
    setActionMain(hashText);

    const handlePopstate = (event: PopStateEvent) => {
      var hashText = window.location.hash;
      hashText = hashText.substring(1);
      if (hashText.includes('swap')) {
        hashText = hashText.split('/')[0];
      }
      setActionMain(hashText);
    };

    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);
  useEffect(() => {
    try {
      const getUpdatedBalances = async () => {
        const updatedAccounts = await updateBalances(accounts, activeNetwork);
        dispatch(setUpdatedAccounts(updatedAccounts));
      };
      getUpdatedBalances();
    } catch (error) {
      console.error('Error updating balances:', error);
    }
  }, [accounts, activeNetwork]);

  const balanceReactHook = useGetBalance();

  const [tokens, setTokens] = useState([
    {
      img: eth,
      network: 'Ethereum',
      symbol: 'ETH',
      balance: '0',
    },
    {
      img: eth,
      network: 'Ethereum',
      symbol: 'ETH',
      balance: '0',
    },
    {
      img: eth,
      network: 'Ethereum',
      symbol: 'ETH',
      balance: '0',
    },
  ]);
  // hooks

  return (
    <div className='dashboard-wrapper'>
      <div className='container'>
        <div className='dashboard-header'>
          <Logo />
        </div>
        <div className='dashboard-box'>
          <div className='box-header'>
            <div className='networks'>
              <button
                onClick={() =>
                  // actionMain !== 'swaps' && setShowNetworksModal(true)
                  setShowNetworksModal(true)
                }
                className={`${actionMain === 'swaps' && 'cursor-not-allowed'}`}
              >
                <img src={activeNetwork.image} alt='network logo' />
                <p>{activeNetwork.name}</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button>
            </div>
            <div
              className='accounts'
              onClick={() => setShowAccountsModal(true)}
            >
              <button>
                <img src={activeAccount.image} alt='network logo' />
                <p>{activeAccount.name}</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button>
            </div>
            <div className='more'>
              <button>
                <MdMoreVert />
              </button>
            </div>
          </div>
          {actionMain === '' && (
            <div className='box-content'>
              <div className='wallet-address'>
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      activeAccount.publicKey
                    );
                  }}
                >
                  {`${activeAccount.publicKey.substring(
                    0,
                    6
                  )}...${activeAccount.publicKey.substring(35)}`}
                  <div className='icon-con center'>
                    <BiSolidCopy />
                  </div>
                </button>
              </div>
              <div className='account-balance'>
                <h2>{balanceReactHook.amount.substring(0, 6) || '0.0'}</h2>
                <h2>{balanceReactHook.symbol || ''}</h2>
              </div>

              <div className='action-btns center'>
                <div className='btn'>
                  <div className='icon-con center'>
                    <PiPlusMinusBold />
                  </div>
                  <p>Buy & Sell</p>
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    var new_url = '/dashboard#send';
                    window.history.pushState({}, '', new_url);
                    // window.location.hash = 'swaps/prepare-swap-page';
                    setActionMain('send');
                  }}
                >
                  <div className='icon-con center'>
                    <MdOutlineArrowOutward />
                  </div>
                  <p>Send</p>
                </div>
                <div
                  className='btn'
                  onClick={() => {
                    var new_url = '/dashboard#swaps/prepare-swap-page';
                    window.history.pushState({}, '', new_url);
                    // window.location.hash = 'swaps/prepare-swap-page';
                    setActionMain('swaps');
                  }}
                >
                  <div className='icon-con center'>
                    <GoArrowSwitch />
                  </div>
                  <p>Swap</p>
                </div>
                <div className='btn'>
                  <div className='icon-con center'>
                    <SiDovecot />
                  </div>
                  <p>Bridge</p>
                </div>
                <div className='btn'>
                  <div className='icon-con center'>
                    <AiOutlineLineChart />
                  </div>
                  <p>Portfolio</p>
                </div>
              </div>
              <div className='tab-btns'>
                <button
                  className={`${activeTab === 'tokens' && 'active'}`}
                  onClick={() => setActiveTab('tokens')}
                >
                  Tokens
                </button>
                <button
                  className={`${activeTab === 'nfts' && 'active'}`}
                  onClick={() => setActiveTab('nfts')}
                >
                  NFTs
                </button>
                <button
                  className={`${activeTab === 'activity' && 'active'}`}
                  onClick={() => setActiveTab('activity')}
                >
                  Activity
                </button>
              </div>
              <div className='tabs'>
                {activeTab === 'tokens' && (
                  <div className='tab-1'>
                    <div className='tokens'>
                      {tokens.map((token: any, index: number) => (
                        <div className='token'>
                          <div className='img-con'>
                            <img src={token.img} alt='' />
                          </div>
                          <div className='details'>
                            <div className='balance-con'>
                              <h5>{token.network}</h5>
                              <div className='balance'>
                                <p>{token.balance}</p>
                                <p>{token.symbol}</p>
                              </div>
                            </div>
                            <div className='equivalent'>
                              <h5>
                                $<span>0.00</span>
                              </h5>
                              <h5>USD</h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='btns'>
                      <button onClick={() => setShowImportTokensModal(true)}>
                        <FaPlus />
                        <span>Import tokens</span>
                      </button>
                      <button>
                        <FiRefreshCw />
                        <span>Refresh list</span>
                      </button>
                      <button>
                        <BiSolidMessageDots />
                        <span>Metamask Support</span>
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === 'nfts' && (
                  <div className='tab-2 center'>
                    <h5>Nfts</h5>
                  </div>
                )}
                {activeTab === 'activity' && (
                  <div className='tab-3 center'>
                    <div className='activities'>
                      <h5>Activities</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {actionMain === 'swaps' && <Swap setActionMain={setActionMain} />}
          {actionMain === 'send' && <Send setActionMain={setActionMain} />}
        </div>
      </div>
      {showNetworksModal && (
        <Modal closeModal={() => setShowNetworksModal(false)}>
          <NetworksModal
            closeModal={() => setShowNetworksModal(false)}
            // network={network}
            setNetwork={setNetwork}
          />
        </Modal>
      )}
      {showAccountsModal && (
        <Modal closeModal={() => setShowAccountsModal(false)}>
          <AccountsModal
            closeModal={() => setShowAccountsModal(false)}
            setShowAccountsModal={setShowAccountsModal}
            setShowAccountModal={setShowAccountModal}
          />
        </Modal>
      )}
      {showAccountModal && (
        <Modal closeModal={() => setShowAccountModal(false)}>
          <AccountModal
            closeModal={() => setShowAccountModal(false)}
            setShowAccountsModal={setShowAccountsModal}
            setShowAccountModal={setShowAccountModal}
            setShowImportAccountModal={setShowImportAccountModal}
          />
        </Modal>
      )}
      {showImportAccountModal && (
        <Modal closeModal={() => setShowImportAccountModal(false)}>
          <ImportAccountModal
            closeModal={() => setShowImportAccountModal(false)}
            setShowAccountModal={setShowAccountModal}
            setShowImportAccountModal={setShowImportAccountModal}
          />
        </Modal>
      )}
      {showImportTokensModal && (
        <Modal
          closeModal={() => {
            setShowImportTokensModal(false);
            dispatch(resetGetTokenDetails());
          }}
        >
          <ImportTokensModal
            closeModal={() => {
              setShowImportTokensModal(false);
              dispatch(resetGetTokenDetails());
            }}
            setShowConfirmImportTokenModal={setShowConfirmImportTokenModal}
            setShowImportTokensModal={setShowImportTokensModal}
            tokens={tokens}
            setTokens={setTokens}
          />
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
