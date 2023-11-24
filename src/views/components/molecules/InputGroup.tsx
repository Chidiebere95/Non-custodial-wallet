import React from 'react';
import '../../../assets/scss/molecules.scss';
interface IProps {
  onToggleHideShow?: () => void;
  showPassword: boolean;
  label?: string;
  password: string;
  onChange?: (e: any) => void;
  passwordSubText?: string;
  confirmPassword?: string;
  onChangeConfirmPassword?: (e: any) => void;
}
const InputGroup = ({
  onToggleHideShow,
  showPassword,
  label,
  password,
  onChange,
  passwordSubText,
  confirmPassword,
  onChangeConfirmPassword,
}: IProps): JSX.Element => {
  return (
    <div className='input-group-component'>
      <div className='label-con'>
        <label htmlFor='password'>{label}</label>
        {onToggleHideShow && (
          <button onClick={onToggleHideShow}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      <input
        id='password'
        type={showPassword ? 'text' : 'password'}
        value={onChange ? password : confirmPassword}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          } else if (onChangeConfirmPassword) {
            onChangeConfirmPassword(e);
          }
        }}
        name={onChange ? 'password' : 'confirm-password'}
      />
      {passwordSubText && (
        <p>
          Password Strength: <span>{passwordSubText}</span>
        </p>
      )}
      {onChangeConfirmPassword &&
        confirmPassword &&
        password !== confirmPassword && <p>Passwords do not match</p>}
    </div>
  );
};

export default InputGroup;
