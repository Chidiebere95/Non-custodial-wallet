import React, { useEffect } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import eth from '../../../assets/images/eth_logo.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
import { useDispatch } from 'react-redux';
import { setNetworkRedux } from '../../../features/network/network_slice';
interface Iprops {
  network: string;
  setNetwork: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}
const NetworksModal = ({ network, setNetwork, closeModal }: Iprops) => {
  const dispatch = useDispatch<any>();
  useEffect(() => {}, [network]);

  const handleSetNetwork = (network: string) => {
    if (network === 'ethereum-mainnet') {
      dispatch(setNetworkRedux({ name: network, tokenContractAddresses: [] }));
    } else if (network === 'base-goerli') {
      dispatch(setNetworkRedux({ name: network, tokenContractAddresses: [] }));
    } else if (network === 'optimism-goerli') {
      dispatch(setNetworkRedux({ name: network, tokenContractAddresses: [] }));
    } else if (network === 'ethereum-sepolia') {
      dispatch(setNetworkRedux({ name: network, tokenContractAddresses: [] }));
    }
    setNetwork(network);
    closeModal();
  };
  return (
    <div className='modal-content-wrapper networks-modal'>
      <div className='header'>
        <h5>Select a network</h5>
        <div className='close-modal center'>
          <LiaTimesSolid />
        </div>
      </div>
      <div className='body'>
        <div className='networks-wrapper'>
          <div
            className={`network ${network === 'ethereum-mainnet' && 'active'}`}
            onClick={() => handleSetNetwork('ethereum-mainnet')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Mainnet</p>
            </div>
          </div>
          {/* <div
            className={`network ${network === 'ethereum-goerli' && 'active'}`}
            onClick={() => handleSetNetwork('ethereum-goerli')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Goerli</p>
            </div>
          </div> */}
          <div
            className={`network ${network === 'base-goerli' && 'active'}`}
            onClick={() => {
              setNetwork('base-goerli');
              closeModal();
            }}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Base Goerli</p>
            </div>
          </div>
          <div
            className={`network ${network === 'optimism-goerli' && 'active'}`}
            onClick={() => handleSetNetwork('optimism-goerli')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Optimism Goerli</p>
            </div>
          </div>
          <div
            className={`network ${network === 'ethereum-sepolia' && 'active'}`}
            onClick={() => handleSetNetwork('ethereum-sepolia')}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Ethereum Sepolia</p>
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
  );
};

export default NetworksModal;
