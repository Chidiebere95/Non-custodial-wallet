import React from 'react';
import '../../../assets/scss/molecules.scss';
interface IProps {
  onClick?: () => void;
  text: string;
  variant?: string;
  width?: string;
  disabled?: boolean;
}
const Button = ({
  onClick,
  text,
  variant,
  width,
  disabled,
}: IProps): JSX.Element => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`button-component ${variant === 'secondary' && 'secondary'} ${
        disabled && 'disabled'
      }`}
      style={{ width }}
    >
      {text}
    </button>
  );
};

export default Button;
