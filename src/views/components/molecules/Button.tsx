import React from 'react';
import '../../../assets/scss/molecules.scss';
interface IProps {
  onClick?: () => void;
  text: string;
  variant?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  underline?: boolean;
  autoFalse?: boolean;
}
const Button = ({
  onClick,
  text,
  variant,
  width,
  height,
  disabled,
  underline,
  autoFalse,
}: IProps): JSX.Element => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`button-component ${
        variant === 'secondary'
          ? 'secondary'
          : variant === 'link'
          ? underline
            ? 'link link-underline'
            : 'link'
          : ''
      } ${disabled && 'disabled'} ${autoFalse && 'auto-false'}`}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};
interface IProps2 {
  onClick?: () => void;
  text: string;
  width?: string;
  height?: string;
}
export const Button2 = ({
  onClick,
  text,
  width,
  height,
}: IProps2): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className='button-component-2'
      style={{ width, height }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
