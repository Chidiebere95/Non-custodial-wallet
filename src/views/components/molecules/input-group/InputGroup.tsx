import React from 'react';
import './InputGroup.scss';
import { BsQrCodeScan, BsUpcScan } from 'react-icons/bs';
import { PiScanDuotone } from 'react-icons/pi';
import { TbGridScan, TbRouteScan } from 'react-icons/tb';
interface IProps {
  onToggleHideShow?: () => void;
  showPassword?: boolean;
  label?: string;
  password?: string;
  onChange?: (e: any) => void;
  passwordSubText?: string;
  confirmPassword?: string;
  onChangeConfirmPassword?: (e: any) => void;
  placeHolder: string;
  showQRScanner: boolean;
  setShowQRScanner: React.Dispatch<React.SetStateAction<boolean>>;
}
const InputGroup2 = ({
  onToggleHideShow,
  showPassword,
  label,
  password,
  onChange,
  passwordSubText,
  confirmPassword,
  onChangeConfirmPassword,
  placeHolder,
  showQRScanner,
  setShowQRScanner,
}: IProps): JSX.Element => {
  return (
    <div className='input-group-component-2'>
      <div className='label-con'>
        <label htmlFor='password'>{label}</label>
        {onToggleHideShow && (
          <button onClick={onToggleHideShow}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      <div className='input-wrapper'>
        <input
          id='password'
          type='text'
          value={onChange ? password : confirmPassword}
          placeholder={placeHolder}
          // className={`${
          //   onChangeConfirmPassword && password !== confirmPassword && 'error'
          // }`}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            } else if (onChangeConfirmPassword) {
              onChangeConfirmPassword(e);
            }
          }}
          name={onChange ? 'password' : 'confirm-password'}
        />
        <div className='scan-btn' onClick={() => setShowQRScanner(true)}>
          <TbGridScan />
        </div>
      </div>
      {passwordSubText && (
        <p>
          Password Strength: <span>{passwordSubText}</span>
        </p>
      )}
      {onChangeConfirmPassword &&
        confirmPassword &&
        password !== confirmPassword && (
          <p className='passwords-not-match'>Passwords do not match</p>
        )}
    </div>
  );
};

export default InputGroup2;
