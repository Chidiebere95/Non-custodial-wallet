import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';

export async function updateBalances(accounts: any, activeNetwork: any) {
  try {
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
  } catch (error) {
    console.log('error');
  }
}
