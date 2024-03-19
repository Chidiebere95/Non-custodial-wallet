import React from 'react';
import './InputGroup2.scss';
import { BsQrCodeScan, BsUpcScan } from 'react-icons/bs';
import { PiScanDuotone } from 'react-icons/pi';
import { TbGridScan, TbRouteScan } from 'react-icons/tb';
import { FaTimes } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';
interface IProps {
  onToggleHideShow?: () => void;
  showPassword?: boolean;
  password?: string;
  onChange?: (e: any) => void;
  passwordSubText?: string;
  confirmPassword?: string;
  onChangeConfirmPassword?: (e: any) => void;
  placeHolder: string;
  showQRScanner: boolean;
  setShowQRScanner: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  publicAddressInputValue: string;
  setPublicAddressInputValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputGroup2 = ({
  onToggleHideShow,
  showPassword,
  password,
  onChange,
  passwordSubText,
  confirmPassword,
  onChangeConfirmPassword,
  placeHolder,
  showQRScanner,
  setShowQRScanner,
  name,
  publicAddressInputValue,
  setPublicAddressInputValue,
}: IProps): JSX.Element => {
  return (
    <div className='input-group-component-2'>
      <div className='label-con'></div>
      <div className='input-wrapper'>
        <input
          id={name}
          name={name}
          type='text'
          value={publicAddressInputValue}
          placeholder={placeHolder}
          onChange={(e) => {
            setPublicAddressInputValue(e.target.value);
          }}
        />
        <div className='btns'>
          {publicAddressInputValue.length > 0 ? (
            <div
              className='cancel'
              onClick={() => setPublicAddressInputValue('')}
            >
              <LiaTimesSolid />
            </div>
          ) : (
            <div className='scan' onClick={() => setShowQRScanner(true)}>
              <TbGridScan />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputGroup2;
