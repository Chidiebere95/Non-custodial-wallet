import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';

export const useGetBalance = () => {
  console.log('hook 1');

  let { activeNetwork } = useSelector((state: RootState) => state.network);
  let { activeAccount } = useSelector((state: RootState) => state.accounts);

  const [data, setData] = useState<{ amount: string; symbol: string }>({
    amount: '',
    symbol: '',
  });

  useEffect(() => {
    console.log('hook 2');

    const getBalance = async () => {
      let provider: any = new ethers.providers.JsonRpcProvider(
        activeNetwork.providerURL
      );
      try {
        let amount = await provider.getBalance(activeAccount.publicKey);
        amount = ethers.utils.formatEther(amount);

        setData({ amount, symbol: activeNetwork.symbol });
      } catch (error) {
        // console.log(error);
      }
    };
    getBalance();
  }, [activeNetwork, activeAccount]);

  return data;
};

