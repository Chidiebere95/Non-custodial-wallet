import React from 'react';
import '../../../assets/scss/atoms.scss';
import logo from '../../../assets/images/logo.svg';
const Logo = (): JSX.Element => {
  return (
    <div className='logo-con'>
      <img src={logo} />
      <p>Metamask</p>
    </div>
  );
};

export default Logo;
