import { useEffect, useState } from 'react';

import './Send.scss';
import Modal from '../../molecules/Modal';
import PreSwapModal from '../../modals/PreSwapModal';
import SwapModal from '../../modals/SwapModal';

import InputGroup2 from '../../molecules/input-group/InputGroup';
import QRScanner from '../../molecules/qr-scanner/QRScanner';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function Send({ setActionMain }: Iprops) {
  const [showPreSwapModal, setShowPreSwapModal] = useState(false);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState('');
  console.log('showQRScanner', showQRScanner);

  return (
    <div className='send-wrapper'>
      <div className='dashboard-box-swap'>
        <div className='box-header-swap'>
          <div className='hide'></div>
          <p className='title'>Send to</p>
          <div className='cancel'>
            <p>Cancel</p>
          </div>
        </div>
        <div className='box-content-swap'>
          <div className='main-con'>
            <InputGroup2
              showQRScanner={showQRScanner}
              setShowQRScanner={setShowQRScanner}
              placeHolder='Enter public address (0x) or ENS name'
            />
            {scannedResult && <p className='scanned result'>{scannedResult}</p>}
            <div className='accounts'></div>
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
