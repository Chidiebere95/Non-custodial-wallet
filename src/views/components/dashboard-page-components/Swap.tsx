import { useEffect, useState } from 'react';

import '../../../assets/scss/dashboard-page-components.scss';
import Modal from '../molecules/Modal';
import PreSwapModal from '../modals/PreSwapModal';
import { FaExclamation } from 'react-icons/fa';
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';
import { HiOutlineArrowDown, HiOutlineArrowLeft } from 'react-icons/hi';
import img from '../../../assets/images/eth_logo.png';
import img2 from '../../../assets/images/linea-logo-mainnet.png';
import Button, { Button2 } from '../molecules/Button';
import SwapModal from '../modals/SwapModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Web3 } from 'web3';
import { ethers } from 'ethers';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function Swap({ setActionMain }: Iprops) {
  const [showPreSwapModal, setShowPreSwapModal] = useState(false);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [swapDirection, setSwapDirection] = useState('');
  const [changeSwapDirection, setChangeSwapDirection] = useState(false);
  const { network } = useSelector((state: RootState) => state.network);

  const [currentGasPrice, setCurrentGasPrice] = useState('34');

  useEffect(() => {
    const getCurrentGasPrice = async () => {
      try {
        // const web3 = new Web3(
        //   new Web3.providers.HttpProvider(network.providerURL)
        // );
        // const gasPrice = await web3.eth.getGasPrice();
        // const gasPriceGwei = web3.utils.fromWei(gasPrice, 'gwei');
        // const currentUSDEquivalent = 377;
        // const rate = Number(gasPriceGwei) / Number(currentUSDEquivalent);
        // // Gas price (USD) = BNB price (USD) * Gas price (gwei) * 0.000000001
        // console.log('gasprice', gasPrice);
        // console.log('gasprice in gwei', gasPriceGwei);
        // setCurrentGasPrice(rate.toString());

        const provider = new ethers.providers.JsonRpcProvider(
          'https://rpc.ankr.com/eth'
        ); // Replace with your BSC node URL

        const gasPrice = await provider.getGasPrice();
        const gasPriceGwei = ethers.utils.formatUnits(gasPrice, 'gwei');
        const gasPriceEth = Number(gasPriceGwei) * 1e-9;

        console.log(`Current Gas Price gwei: ${gasPriceGwei} Gwei`);
        console.log(`Current Gas Price eth: ${gasPriceEth} eth`);

        const gweiToBnbExchangeRate = 0.000000001; // Replace with the actual exchange rate

        const gasPriceBnb = Number(gasPriceGwei) / 10000000000000000000;

        console.log(`Gas Price in BNB: ${gasPriceBnb.toFixed(9)}`);
        setCurrentGasPrice(gasPriceBnb.toString());

        // const web3 = new Web3(network.providerURL);

        // // Get current gas price in Wei
        // web3.eth
        //   .getGasPrice()
        //   .then((gasPrice) => {
        //     // Convert gas price from Wei to Gwei
        //     const gasPriceGwei = web3.utils.fromWei(gasPrice, 'gwei');

        //     console.log(`Current Gas Price: ${gasPriceGwei} Gwei`);
        //     console.log('gasprice in gwei', gasPriceGwei);

        //     setCurrentGasPrice(gasPriceGwei);
        //   })
        //   .catch((error) => {
        //     console.error('Error getting gas price:', error);
        //   });
        return;
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentGasPrice();
  }, [network]);
  const [inputFromValue, setInputFromValue] = useState('0');
  return (
    <div className='swap-wrapper'>
      <div className='dashboard-box-swap'>
        <div className='box-header-swap'>
          <HiOutlineArrowLeft
            className='swap-icon'
            onClick={() => setActionMain('')}
          />
          <p>Swap</p>
          <IoSettingsSharp className='swap-icon' />
        </div>
        <div className='box-content-swap'>
          <div className='main-con'>
            <div className='box'>
              <div className='box-con box-con-1'>
                <div className='token-wrapper'>
                  <div
                    className='token-con'
                    onClick={() => setShowSwapModal(true)}
                  >
                    <img src={img} alt='' className='' />
                    <p>ETH</p>
                    <FaChevronDown />
                  </div>
                  <div className='amount'>
                    <input
                      type='number'
                      placeholder='0'
                      value={inputFromValue}
                      onChange={(e) => setInputFromValue(e.target.value)}
                    />
                  </div>
                </div>
                <p className='balance-wrapper'>
                  Balance: <span>0</span>
                </p>
              </div>
              <div className='box-con '>
                <div className='token-wrapper'>
                  <div className='token-con'>
                    <img src={img2} alt='' className='' />
                    <p>DAI</p>
                    <FaChevronDown />
                  </div>
                  <div className='amount'>
                    <input type='number' placeholder='0' />
                  </div>
                </div>
                <p className='balance-wrapper'>
                  Balance: <span>0</span>
                </p>
              </div>
              <div
                className='swap-direction-btn'
                onClick={() => setChangeSwapDirection(!changeSwapDirection)}
              >
                <HiOutlineArrowDown
                  className={`swap-icon ${changeSwapDirection && 'rotate'}`}
                />
              </div>
            </div>
            <div className='details'>
              {/* <div className='insufficient-bal'>
                <div className='left'></div>
                <div className='info'>
                  <div className='icon'>
                    <FaExclamation />
                  </div>
                  <div className='other-contents'>
                    <p className='insufficient'>Insufficient balance</p>
                    <p className='unable'>
                      We were unable to retrieve your DAI balance
                    </p>
                    <div className='btn-con'>
                      <Button
                        text='Buy more ETH'
                        variant='link'
                        autoFalse
                        // height='auto'
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className='new-quotes'>
                <p>
                  New quotes in: <span>0.11</span> s
                </p>
              </div>
              <div className='quote-rate'>
                <p className='title'>Quote rate</p>
                <div className='deets'>
                  <p>I DAI = 0.000122828 WETH</p>
                </div>
              </div>
              <div className='quote-rate'>
                <p className='title'>
                  Estimated gas fee{' '}
                  <span>
                    <FaExclamation />
                  </span>
                </p>
                <div className='deets'>
                  <p>{(Number(currentGasPrice) / 377).toFixed(10)} ETH</p>
                  <p className='usd-equivalent'>
                    ${Number(currentGasPrice).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className='max-fee'>
                <div className='deets'>
                  <p>Max fee:</p>
                  <p className='max-fee-value'>
                    $
                    {(Number(inputFromValue) + Number(currentGasPrice)).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
              <div className='bottom'>
                <p>
                  Includes a 0.875% MetaMask fee: <span>view all quotes</span>
                </p>
              </div>
              {/* <div className='quote-rate'>
                <p>Quote rate</p>
                <div className='deets'>
                  <p>I DAI = 0.000122828 WETH</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className='btn'>
            <Button
              text='Swap'
              width='100%'
              onClick={() => {
                console.log('click');
              }}
              variant='primary'
            />
            <div className='terms'>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
      </div>

      {showPreSwapModal && (
        <Modal closeModal={() => setShowPreSwapModal(false)}>
          <PreSwapModal closeModal={() => setShowPreSwapModal(false)} />
        </Modal>
      )}
      {showSwapModal && (
        <Modal closeModal={() => setShowSwapModal(false)}>
          <SwapModal closeModal={() => setShowSwapModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default Swap;
