import React, { useEffect, useState } from 'react';
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
  seedPhrase?: string;
  setSeedPhraseFinal?: any;
}
export const SeedPhrase2 = ({
  phrase,
  number,
  onChange,
  seedPhrase,
  setSeedPhraseFinal,
}: IProps2): JSX.Element => {
  const [splitted, setSplitted] = useState<Array<string>>([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (seedPhrase) {
      const split = seedPhrase?.split(' ');
      setSplitted(split);

      // setValue(split[number - 1]);
    }
  }, []);
  // console.log('splitted', splitted);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    const temp = [...splitted];
    temp[number - 1] = e.target.value;
    const final = temp.join(' ');

    setSeedPhraseFinal(final);
  };

  return (
    <div className='seed-phrase-component'>
      <p>{number}.</p>
      <div className='phrase phrase-2'>
        <input
          type='text'
          value={value}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default SeedPhrase;
