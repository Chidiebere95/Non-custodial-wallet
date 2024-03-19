import { useEffect, useState } from 'react';
import accountDefault from '../../../../assets/images/account-default.png';
import './Send.scss';
import Modal from '../../molecules/Modal';
import PreSwapModal from '../../modals/PreSwapModal';
import SwapModal from '../../modals/SwapModal';

import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import QRScanner from '../../molecules/qr-scanner/QRScanner';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function Send({ setActionMain }: Iprops) {
  const [showPreSwapModal, setShowPreSwapModal] = useState(false);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState('');
  const [publicAddressInputValue, setPublicAddressInputValue] = useState('');
  console.log('showQRScanner', showQRScanner);

  return (
    <div className='send-wrapper'>
      <div className='dashboard-box-send'>
        <div className='box-header-send'>
          <div className='hide'></div>
          <p className='title'>Send to</p>
          <div className='cancel'>
            <p>Cancel</p>
          </div>
        </div>
        <div className='box-content-send'>
          <InputGroup2
            showQRScanner={showQRScanner}
            setShowQRScanner={setShowQRScanner}
            placeHolder='Enter public address (0x) or ENS name'
            name='public address'
            publicAddressInputValue={publicAddressInputValue}
            setPublicAddressInputValue={setPublicAddressInputValue}
          />
          <div className='wrapper'>
            {scannedResult && <p className='scanned result'>{scannedResult}</p>}
            <div className='accounts-wrapper'>
              <p className='title'>Your accounts</p>
              <div className='accounts'>
                <div className='account'>
                  <img src={accountDefault} alt='' />
                  <div className='details'>
                    <p className='account-name'>Account 1</p>
                    <p className='public-key'>0xc474...a3d1</p>
                  </div>
                </div>
                <div className='account'>
                  <img src={accountDefault} alt='' />
                  <div className='details'>
                    <p className='account-name'>Account 2</p>
                    <p className='public-key'>0xc474...a3d1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='contacts-wrapper'>
              <p className='title'>Contacts</p>
            </div>
          </div>
        </div>
      </div>

      {showQRScanner && (
        <Modal closeModal={() => setShowQRScanner(false)}>
          <QRScanner
            closeModal={() => setShowQRScanner(false)}
            scannedResult={scannedResult}
            setScannedResult={setScannedResult}
          />
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

export default Send;
