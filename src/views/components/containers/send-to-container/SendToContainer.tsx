import { useEffect, useState } from 'react';
import accountDefault from '../../../../assets/images/account-default.png';
import './SendToContainer.scss';
import InputGroup2 from '../../molecules/input-group-2/InputGroup2';
import Modal from '../../molecules/Modal';
import QRScanner from '../../molecules/qr-scanner/QRScanner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

interface Iprops {
  setActionMain: React.Dispatch<React.SetStateAction<string>>;
  setSelectedAccount: React.Dispatch<
    React.SetStateAction<{
      name: string;
      publicKey: string;
    }>
  >;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  publicAddressInputValueResult: string;
  setPublicAddressInputValueResult: React.Dispatch<
    React.SetStateAction<string>
  >;
  setScanningQRCode: React.Dispatch<React.SetStateAction<boolean>>;
}

function SendToContainer({
  setActionMain,
  setSelectedAccount,
  setAction,
  publicAddressInputValueResult,
  setPublicAddressInputValueResult,
  setScanningQRCode,
}: Iprops) {
  const { accounts } = useSelector((state: RootState) => state.accounts);
  const [showQRScanner, setShowQRScanner] = useState(false);

  const [checkingPublicAddressInputValue, setCheckingPublicAddressInputValue] =
    useState(false);

  useEffect(() => {
    if (
      publicAddressInputValueResult &&
      publicAddressInputValueResult !== 'not evm or syntax not complete'
    ) {
      setAction('send');
    }
  }, [publicAddressInputValueResult]);

  return (
    <div className='send-to-container'>
      <div className='header'>
        <div className='hide'></div>
        <p className='title'>Send to</p>
        <div className='cancel' onClick={() => setActionMain('')}>
          <p>Cancel</p>
        </div>
      </div>
      <div className='content'>
        <InputGroup2
          showQRScanner={showQRScanner}
          setShowQRScanner={setShowQRScanner}
          placeHolder='Enter public address (0x) or ENS name'
          name='public address'
          // publicAddressInputValue={publicAddressInputValue}
          // setPublicAddressInputValue={setPublicAddressInputValue}
          setSelectedAccount={setSelectedAccount}
          setAction={setAction}
          setPublicAddressInputValueResult={setPublicAddressInputValueResult}
          setCheckingPublicAddressInputValue={
            setCheckingPublicAddressInputValue
          }
        />
        <div className='wrapper'>
          {/* {scannedResult && <p className='scanned result'>{scannedResult}</p>} */}
          {publicAddressInputValueResult !== '' && (
            <div className='result-wrapper'>
              {publicAddressInputValueResult ===
                'not evm or syntax not complete' && (
                <div className='not-evm'>
                  <p>Not evm or syntax not complete</p>
                </div>
              )}
            </div>
          )}
          {publicAddressInputValueResult !==
            'not evm or syntax not complete' && (
            <>
              <div className='accounts-wrapper'>
                <p className='title'>Your accounts</p>
                <div className='accounts'>
                  {accounts.map((account, index) => (
                    <div
                      key={index}
                      className='account'
                      onClick={() => {
                        setSelectedAccount(account);
                        setAction('send');
                      }}
                    >
                      <img src={account.image} alt='account logo' />
                      <div className='details'>
                        <p className='account-name'>{account.name}</p>
                        <p className='public-key'>
                          {`${account.publicKey.substring(
                            0,
                            6
                          )}...${account.publicKey.substring(35)}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='contacts-wrapper'>
                <p className='title'>Contacts</p>
              </div>
            </>
          )}
        </div>
      </div>

      {showQRScanner && (
        <Modal closeModal={() => setShowQRScanner(false)}>
          <QRScanner
            closeModal={() => setShowQRScanner(false)}
            // scannedResult={scannedResult}
            // setScannedResult={setScannedResult}
            setSelectedAccount={setSelectedAccount}
            setAction={setAction}
            setPublicAddressInputValueResult={setPublicAddressInputValueResult}
            setScanningQRCode={setScanningQRCode}
          />
        </Modal>
      )}
    </div>
  );
}

export default SendToContainer;
