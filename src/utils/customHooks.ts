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
      try {
        let provider: any = new ethers.providers.JsonRpcProvider(
          activeNetwork.providerURL
        );
        let amount = await provider.getBalance(activeAccount.publicKey);
        amount = ethers.utils.formatEther(amount);

        setData({ amount, symbol: activeNetwork.symbol });
      } catch (error) {
        console.log('error');
      }
    };
    getBalance();
  }, [activeNetwork, activeAccount]);

  return data;
};

// export const useTest = async () => {
//   const { activeNetwork } = useSelector((state: RootState) => state.network);

//   useEffect(() => {
//     const test = async () => {
//       // format later
//       const providerUrl = activeNetwork.providerURL;
//       // dispatch(); // Dispatch your action here

//       const provider = new ethers.providers.JsonRpcProvider(providerUrl);
//       async function checkAddressType(publicAddressInputValue: string) {
//         // Check if it is not an EVM address
//         if (!ethers.utils.isAddress(publicAddressInputValue)) {
//           return 'not evm or syntax not complete';
//         }

//         // Check if it is a contract
//         const code = await provider.getCode(publicAddressInputValue);
//         if (code !== '0x') {
//           return 'contract';
//         }

//         // If it is not a contract, it must be a regular address
//         return 'address';
//       }

//       checkAddressType(scannedResult)
//         .then((result) => {
//           setPublicAddressInputValueResult(result);
//           setScanningQRCode(true);
//         })
//         .catch((error) => console.error(error));
//     };
//     test();
//   }, []);
// };
