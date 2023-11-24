import React from 'react';
import '../../../assets/scss/molecules.scss';
interface IProps {
  phrase: string;
  number: number;
}
const SeedPhrase = ({ phrase, number }: IProps): JSX.Element => {
  return (
    <div className='seed-phrase-component'>
      <p>{number}.</p>
      <div className='phrase'>
        <p>{phrase}</p>
      </div>
    </div>
  );
};

export default SeedPhrase;
