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
import ConfirmContainer from '../../../containers/confirm-container/ConfirmContainer';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
}

function Send({ setActionMain }: Iprops) {
  const [publicAddressInputValueResult, setPublicAddressInputValueResult] =
    useState('');
  const [scanningQRCode, setScanningQRCode] = useState(false);
  const [checkingAddressType, setCheckingAddressType] = useState(false);
  const [action, setAction] = useState('send-to');
  const [selectedAccount, setSelectedAccount] = useState<{
    name: string;
    publicKey: string;
  }>({ name: '', publicKey: '' });

  console.log('checkingAddressType', checkingAddressType);

  return (
    <div className='send-wrapper'>
      {action === 'send-to' && (
        <Container>
          <SendToContainer
            setActionMain={setActionMain}
            // selectedAccount={selectedAccount}
            setSelectedAccount={setSelectedAccount}
            setAction={setAction}
            publicAddressInputValueResult={publicAddressInputValueResult}
            setPublicAddressInputValueResult={setPublicAddressInputValueResult}
            setScanningQRCode={setScanningQRCode}
            setCheckingAddressType={setCheckingAddressType}
          />
        </Container>
      )}
      {action === 'send' && (
        <Container>
          <SendContainer
            selectedAccount={selectedAccount}
            setAction={setAction}
            publicAddressInputValueResult={publicAddressInputValueResult}
            setPublicAddressInputValueResult={setPublicAddressInputValueResult}
            scanningQRCode={scanningQRCode}
            checkingAddressType={checkingAddressType}
          />
        </Container>
      )}
      {action === 'confirm' && (
        <Container>
          <ConfirmContainer setActionMain={setActionMain} />
        </Container>
      )}
    </div>
  );
}

export default Send;
