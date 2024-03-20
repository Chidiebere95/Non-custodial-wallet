import { useEffect, useState } from 'react';
import accountDefault from '../../../../../assets/images/account-default.png';
import './Send.scss';
import Modal from '../../../molecules/Modal';
import PreSwapModal from '../../../modals/PreSwapModal';
import SwapModal from '../../../modals/SwapModal';

import InputGroup2 from '../../../molecules/input-group-2/InputGroup2';
import QRScanner from '../../../molecules/qr-scanner/QRScanner';
import Container from '../../../containers/container/Container';
import SendToContainer from '../../../containers/send-to-container/SendToContainer';
import SendContainer from '../../../containers/send-container/SendContainer';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function Send({ setActionMain }: Iprops) {
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannedResult, setScannedResult] = useState('');
  const [publicAddressInputValue, setPublicAddressInputValue] = useState('');
  const [action, setAction] = useState('send');

  return (
    <div className='send-wrapper'>
      {action === 'send-to' && (
        <Container>
          <SendToContainer setActionMain={setActionMain} />
        </Container>
      )}
      {action === 'send' && (
        <Container>
          <SendContainer setActionMain={setActionMain} />
        </Container>
      )}

    </div>
  );
}

export default Send;
