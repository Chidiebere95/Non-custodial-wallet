import '../../assets/scss/dashboard.scss';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/atoms/Logo';
import eth from '../../assets/images/eth_logo.png';
import lineaGoerli from '../../assets/images/linea-logo-testnet.png';
import accountDefault from '../../assets/images/account-default.png';
import linea from '../../assets/images/linea-logo-mainnet.png';
import { FaChevronDown, FaCopy, FaPlus } from 'react-icons/fa';
import { MdMoreVert, MdOutlineArrowOutward } from 'react-icons/md';
import { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../components/molecules/Button';
import { BiSolidCopy } from 'react-icons/bi';
import { PiPlusMinusBold } from 'react-icons/pi';
import { GoArrowSwitch } from 'react-icons/go';
import { AiOutlineLineChart } from 'react-icons/ai';
import { SiDovecot } from 'react-icons/si';

function Dashboard() {
  const navigate = useNavigate();
  const [showNetworksModal, setShowNetworksModal] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');
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
                <p>Ethereum Mainnet</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button>
              {showNetworksModal && (
                <div
                  className='modal'
                  onClick={(e: any) => {
                    if (!e.target.closest('.modal-content')) {
                      setShowNetworksModal(false);
                    } else if (e.target.closest('.close-modal')) {
                      setShowNetworksModal(false);
                    } else {
                      console.log('modal-content');
                    }
                  }}
                >
                  <div className='modal-content'>
                    <div className='header'>
                      <h5>Select a network</h5>
                      <div className='close-modal center'>
                        <LiaTimesSolid />
                      </div>
                    </div>
                    <div className='body'>
                      <div className='networks-wrapper'>
                        <div className='network active'>
                          <div className='line'></div>
                          <div className='wrapper'>
                            <img src={eth} alt='network logo' className='' />
                            <p>Ethereum Mainnet</p>
                          </div>
                        </div>
                        <div className='network'>
                          <div className='line'></div>
                          <div className='wrapper'>
                            <img src={eth} alt='network logo' className='' />
                            <p>Goerli</p>
                          </div>
                        </div>
                        <div className='network'>
                          <div className='line'></div>
                          <div className='wrapper'>
                            <img src={eth} alt='network logo' className='' />
                            <p>Sepolia</p>
                          </div>
                        </div>
                        <div className='network'>
                          <div className='line'></div>
                          <div className='wrapper'>
                            <img
                              src={lineaGoerli}
                              alt='network logo'
                              className=''
                            />
                            <p>Linea Goerli</p>
                          </div>
                        </div>
                      </div>
                      <div className='btn'>
                        <Button
                          text='Add network'
                          width='100%'
                          // onClick={() => setStep('2')}
                          variant='secondary'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='accounts'>
              <button>
                <img src={accountDefault} alt='network logo' />
                <p>Account 1</p>
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
          <div className='box-content'>
            <div className='wallet-address'>
              <button
                onClick={() => {
                  // setShowNetworksModal(true);
                }}
              >
                {'ejejje...wowowi'}
                <div className='icon-con center'>
                  <BiSolidCopy />
                </div>
              </button>
            </div>
            <div className='account-balance'>
              <h2>0</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
