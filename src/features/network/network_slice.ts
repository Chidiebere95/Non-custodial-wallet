import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import NetworkService from './network_service';
import * as states from '../../utils/strings';
import { providerEthereumMainnetUrl } from '../../utils/providerUrls';
interface IinitialState {
  networkDetails: {
    name: string;
    title: string;
    symbol: string;
    providerURL: any;
    usdValue: number;
    tokenContractAddresses: string[];
  };
}
const initialState: IinitialState = {
  networkDetails: {
    name: 'ethereum-mainnet',
    title: 'Ethereum Mainnet',
    symbol: 'Eth',
    providerURL: providerEthereumMainnetUrl,
    usdValue: 4000,
    tokenContractAddresses: [],
  },
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetwork: (state, action) => {
      state.networkDetails = action.payload;
    },
  },
});

export default networkSlice.reducer;
export const { setNetwork } = networkSlice.actions;
