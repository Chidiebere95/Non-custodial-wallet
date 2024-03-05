import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import NetworkService from './network_service';
import * as states from '../../utils/strings';
import { providerEthereumMainnetUrl } from '../../utils/providerUrls';
interface IinitialState {
  network: {
    name: string;
    title: string;
    providerURL: any;
    tokenContractAddresses: string[];
  };
}
const initialState: IinitialState = {
  network: {
    name: 'ethereum-mainnet',
    title: 'Ethereum Mainnet',
    providerURL: providerEthereumMainnetUrl,
    tokenContractAddresses: [],
  },
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetwork: (state, action) => {
      state.network = action.payload;
    },
  },
});

export default networkSlice.reducer;
export const { setNetwork } = networkSlice.actions;
