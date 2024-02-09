import { useNavigate } from 'react-router-dom';

import { Wallet } from 'ethers';

import eth from '../../../assets/images/eth_logo.png';

import accountDefault from '../../../assets/images/account-default.png';
import { FaChevronDown, FaCopy, FaPlus } from 'react-icons/fa';
import { MdMoreVert, MdOutlineArrowOutward } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../molecules/Button';
import { BiSolidCopy, BiSolidMessageDots } from 'react-icons/bi';
import { PiPlusMinusBold } from 'react-icons/pi';
import { GoArrowSwitch } from 'react-icons/go';
import { AiOutlineLineChart } from 'react-icons/ai';
import { SiDovecot } from 'react-icons/si';
import { FiRefreshCw } from 'react-icons/fi';
import '../../../assets/scss/dashboard-page-components.scss';
import Modal from '../molecules/Modal';

import PreSwapModal from '../modals/PreSwapModal';
function Swap() {
  const [showPreSwapModal, setShowPreSwapModal] = useState(true);

  // console.log('activeAccount', activeAccount);
  // console.log('network', network);
  return (
    <div className='swap-wrapper'>
      <div className='container'>
        <div className='dashboard-box'>
          <div className='box-header'>
            <div className='networks'>
              <button>
                <img src={eth} alt='network logo' />
                <p>swap</p>
                <div className='icon-con center'>
                  <FaChevronDown />
                </div>
              </button>
            </div>
            <div className='accounts'>
              <button>
                <img src={accountDefault} alt='network logo' />
                <p>nsns</p>
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
          {/* <div className='box-content'>
            <div className='wallet-address'>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(activeAccount.address);
                }}
              >
                {`${activeAccount.address.substring(
                  0,
                  6
                )}...${activeAccount.address.substring(35)}`}
                <div className='icon-con center'>
                  <BiSolidCopy />
                </div>
              </button>
            </div>
            <div className='account-balance'>
              <h2>{balance.toString().substring(0, 6)}</h2>
              <h2>{activeAccount?.symbol || 'ETH'}</h2>
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
          </div> */}
        </div>
      </div>
      {showPreSwapModal && (
        <Modal closeModal={() => setShowPreSwapModal(false)}>
          <PreSwapModal
            closeModal={() => setShowPreSwapModal(false)}
            onClickBtn={() => {
              console.log('confirm');
            }}
          />
        </Modal>
      )}
    </div>
  );
}

export default Swap;
