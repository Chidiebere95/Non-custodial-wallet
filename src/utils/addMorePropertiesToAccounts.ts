import { ethers } from 'ethers';

export const addMorePropertiesToAccounts = async (
  accounts: any,
  activeNetwork: any
) => {
  try {
    const tempArray: {
      balance: string | number;
    }[] = [];
    // console.log('1');

    let provider: any = new ethers.providers.JsonRpcProvider(
      activeNetwork.providerURL
    );
    // console.log('2');

    await Promise.all(
      accounts.map(async (account: any) => {
        let balance = await provider.getBalance(account.publicKey);
        balance = ethers.utils.formatEther(balance);
        const accountTemp = { ...account, balance };
        console.log('accountstemp', accountTemp);

        tempArray.push(accountTemp);
      })
    );
    // console.log('3');

    console.log('accounts', accounts);
    console.log('tempArray#######################', tempArray);
    return tempArray;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function updateBalances(accounts: any, activeNetwork: any) {
  let provider: any = new ethers.providers.JsonRpcProvider(
    activeNetwork.providerURL
  );
  const updatedAccounts = await Promise.all(
    accounts.map(async (account: any) => {
      let balance = await provider.getBalance(account.publicKey);
      balance = ethers.utils.formatEther(balance);
      return { ...account, balance };
    })
  );

  return updatedAccounts;
}

