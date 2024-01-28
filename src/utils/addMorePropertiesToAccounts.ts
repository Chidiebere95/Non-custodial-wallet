import { ethers } from 'ethers';

export const addMorePropertiesToAccounts = async (
  accounts: { name: string; address: string }[],
  network: string,
  providerMain: any
) => {
  let symbol: string;

  if (network === 'ethereum-mainnet') {
    symbol = 'ETH';
  } else if (network === 'ethereum-goerli') {
    symbol = 'Goerli ETH';
  } else if (network === 'base-goerli') {
    symbol = 'Goerli BASE';
  } else if (network === 'optimism-goerli') {
    symbol = 'Goerli OPT';
  } else if (network === 'polygon-mumbai') {
    symbol = 'mumbai MATIC';
  } else {
    symbol = '';
  }

  try {
    const tempArray: {
      name: string;
      address: string;
      balance: string | number;
      symbol: string;
    }[] = [];

    await Promise.all(
      accounts.map(async (account) => {
        let balance = await providerMain.getBalance(account.address);
        balance = ethers.utils.formatEther(balance);
        const accountTemp = { ...account, balance, symbol };
        tempArray.push(accountTemp);
      })
    );

    // console.log('tempArray#######################', tempArray);
    return tempArray;
  } catch (error) {
    console.log(error);
    return [];
  }
};
