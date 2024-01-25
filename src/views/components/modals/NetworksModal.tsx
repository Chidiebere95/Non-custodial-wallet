import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import '../../../assets/scss/modals.scss';
import eth from '../../../assets/images/eth_logo.png';
import lineaGoerli from '../../../assets/images/linea-logo-testnet.png';
import ModalWrapper from '../molecules/Modal';
import Button from '../molecules/Button';
interface Iprops {
  network: string;
  setNetwork: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}
const NetworksModal = ({ network, setNetwork, closeModal }: Iprops) => {
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
            onClick={() => {
              setNetwork('ethereum-mainnet');
              closeModal();
            }}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Mainnet</p>
            </div>
          </div>
          <div
            className={`network ${network === 'ethereum-goerli' && 'active'}`}
            onClick={() => {
              setNetwork('ethereum-goerli');
              closeModal();
            }}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={eth} alt='network logo' className='' />
              <p>Ethereum Goerli</p>
            </div>
          </div>
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
            onClick={() => {
              setNetwork('optimism-goerli');
              closeModal();
            }}
          >
            <div className='line'></div>
            <div className='wrapper'>
              <img src={lineaGoerli} alt='network logo' className='' />
              <p>Optimism Goerli</p>
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
