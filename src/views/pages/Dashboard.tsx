import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import Wallet from 'ethereumjs-wallet';
import EthUtil from 'ethereumjs-util';

import Logo from '../components/atoms/Logo';
import eth from '../../assets/images/eth_logo.png';
import lineaGoerli from '../../assets/images/linea-logo-testnet.png';
import accountDefault from '../../assets/images/account-default.png';
import linea from '../../assets/images/linea-logo-mainnet.png';
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

function Dashboard() {
  const [mnemonic, setMnemonic] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [network, setNetwork] = useState('base-goerli');
  const [balance, setBalance] = useState(0);

  const { ethers } = require('ethers');
  const providerBaseGoerli = new ethers.providers.JsonRpcProvider(
    'https://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/'
  );
  const providerOptimismGoerli = new ethers.providers.JsonRpcProvider(
    'https://old-special-star.optimism-goerli.discover.quiknode.pro/844ca5af827239572b018eccd62bba16a07c34c1/'
  );
  const providerEthereumMainnet = new ethers.providers.JsonRpcProvider(
    'https://practical-necessary-mountain.discover.quiknode.pro/b7b754637febb9825b7a78a42f400edcc4909393/'
  );
  const providerPolygonMumbai = new ethers.providers.JsonRpcProvider(
    'https://wild-capable-star.matic-testnet.discover.quiknode.pro/2c6b5d10c7c08f7afc6ed0814e7ba78de8d64652/'
  );

  useEffect(() => {
    const walletTemp = localStorage.getItem('wallet');
    if (walletTemp) {
      const walletDetails = JSON.parse(walletTemp);
      console.log('walletdetails', walletDetails);

      const { data } = walletDetails;
      setMnemonic(data);
      // Create a wallet from the mnemonic
      const wallet = ethers.Wallet.fromMnemonic(data);
      // Retrieve the private key
      const privateKey = wallet.privateKey;
      // Retrieve the public key
      const publicKey = wallet.address;
      setWalletAddress(publicKey);
    }
  }, []);
  useEffect(() => {
    let providerMain: any;
    if (network === 'ethereum-mainnet') {
      providerMain = providerEthereumMainnet;
    } else if (network === 'base-goerli') {
      providerMain = providerBaseGoerli;
    } else if (network === 'polygon-mumbai') {
      providerMain = providerPolygonMumbai;
    } else if (network === 'optimism-goerli') {
      providerMain = providerOptimismGoerli;
    }

    if (walletAddress) {
      console.log('true', walletAddress);
      const usersWalletAddress = walletAddress;
      const getBalance = async () => {
        try {
          let balance = await providerMain.getBalance(usersWalletAddress);
          balance = ethers.utils.formatEther(balance);
          console.log('balance', balance);
          setBalance(balance);
        } catch (error) {
          console.log(error);
        }
      };
      getBalance();
    }
  }, [walletAddress, network]);

  console.log('walletaddress', walletAddress);
  console.log('network', network);

  const navigate = useNavigate();
  const [showNetworksModal, setShowNetworksModal] = useState(false);
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showImportAccountModal, setShowImportAccountModal] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');

  const [accounts, setAccounts] = useState([]);
  const [activeAccount, setActiveAccount] = useState({
    name: 'account 2',
    publicKey: '',
    balance: '',
  });
  // const getPublicKey = () => {
  //   const privateKeyString =
  //     '0xdb27f3a86e3aabf7367790b17ddc8b535f8734020ea866f455c31aad099b1b71'; // ensure '0x' prefix

  //   const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);

  //   // Ensure the private key is 32 bytes long
  //   if (privateKeyBuffer.length !== 32) {
  //     console.error('Invalid private key length');
  //     process.exit(1);
  //   }

  //   const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
  //   const publicKey = wallet.getPublicKeyString();
  //   const address = wallet.getAddressString();

  //   console.log('Public Key:', publicKey);
  //   console.log('Address:', address);
  // };
  useEffect(() => {}, []);
  return (
    <div className='dashboard-wrapper'>
      <div className='container'>
        <div className='dashboard-header'>
          <Logo />
        </div>
        <div className='dashboard-box'>
          <div className='box-header'>
            <div className='networks'>
              <button onClick={() => setShowNetworksModal(true)}>
                <img src={eth} alt='network logo' />
                <p>
                  {network === 'ethereum-mainnet'
                    ? 'Ethereum Mainnet'
                    : network === 'base-goerli'
                    ? 'Base Goerli'
                    : network === 'ethereum-goerli'
                    ? 'Ethereum Goerli'
                    : network === 'optimism-goerli'
                    ? 'Optimism Goerli'
                    : network === 'polygon-mumbai'
                    ? 'Polygon Mumbai'
                    : ''}
                </p>
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
                <img src={accountDefault} alt='network logo' />
                <p>Account 1</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button>
              {/* <button>
                <img src={accountDefault} alt='network logo' />
                <p>Account 1</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button> */}
            </div>
            <div className='more'>
              <button>
                <MdMoreVert />
              </button>
            </div>
          </div>
          <div className='box-content'>
            <div className='wallet-address'>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(walletAddress);
                }}
              >
                {/* {`${walletAddress.substring(0, 6)}...${walletAddress.substring(
                  35
                )}`} */}
                {`0x4838B...5f97`}
                <div className='icon-con center'>
                  <BiSolidCopy />
                </div>
              </button>
            </div>
            <div className='account-balance'>
              <h2>{balance}</h2>
              <h2>ETH</h2>
            </div>
            <div className='action-btns center'>
              <div className='btn'>
                <div className='icon-con center'>
                  <PiPlusMinusBold />
                </div>
                <p>Buy & Sell</p>
              </div>
              <div className='btn'>
                <div className='icon-con center'>
                  <MdOutlineArrowOutward />
                </div>
                <p>Send</p>
              </div>
              <div className='btn'>
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
                    <div className='token'>
                      <div className='img-con'>
                        <img src={eth} alt='' />
                      </div>
                      <div className='details'>
                        <div className='balance-con'>
                          <h5>Ethereum</h5>
                          <div className='balance'>
                            <p>0</p>
                            <p>ETH</p>
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
                  </div>
                  <div className='btns'>
                    <button>
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
        </div>
      </div>
      {showNetworksModal && (
        <Modal closeModal={() => setShowNetworksModal(false)}>
          <NetworksModal
            closeModal={() => setShowNetworksModal(false)}
            network={network}
            setNetwork={setNetwork}
          />
        </Modal>
      )}
      {showAccountsModal && (
        <Modal closeModal={() => setShowAccountsModal(false)}>
          <AccountsModal
            closeModal={() => setShowAccountsModal(false)}
            onClickBtn={() => {
              setShowAccountsModal(false);
              setShowAccountModal(true);
            }}
          />
        </Modal>
      )}
      {showAccountModal && (
        <Modal closeModal={() => setShowAccountModal(false)}>
          <AccountModal
            closeModal={() => setShowAccountModal(false)}
            onClickBackBtn={() => {
              setShowAccountsModal(true);
              setShowAccountModal(false);
            }}
            setShowImportAccountModal={setShowImportAccountModal}
          />
        </Modal>
      )}
      {showImportAccountModal && (
        <Modal closeModal={() => setShowImportAccountModal(false)}>
          <ImportAccountModal
            closeModal={() => setShowImportAccountModal(false)}
            onClickBackBtn={() => {
              setShowAccountModal(true);
              setShowImportAccountModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
