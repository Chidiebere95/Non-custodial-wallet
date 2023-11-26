import React from 'react';
import '../../../assets/scss/molecules.scss';
interface IProps {
  onClick?: () => void;
  text: string;
  variant?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}
const Button = ({
  onClick,
  text,
  variant,
  width,
  height,
  disabled,
}: IProps): JSX.Element => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`button-component ${
        variant === 'secondary' ? 'secondary' : variant === 'link' ? 'link' : ''
      } ${disabled && 'disabled'}`}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};

export default Button;
