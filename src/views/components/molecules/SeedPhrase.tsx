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
interface IProps2 {
  phrase: string;
  number: number;
  onChange?: (e: any) => void;
}
export const SeedPhrase2 = ({
  phrase,
  number,
  onChange,
}: IProps2): JSX.Element => {
  return (
    <div className='seed-phrase-component'>
      <p>{number}.</p>
      <div className='phrase phrase-2'>
        <input type='text' value={phrase} onChange={onChange} />
      </div>
    </div>
  );
};

export default SeedPhrase;
