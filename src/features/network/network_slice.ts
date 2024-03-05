import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GeneralService from './network_service';
import * as states from '../../utils/strings';
interface IinitialState {
  network: {
    name: string;
    tokenContractAddresses: string[];
  };
}
const initialState: IinitialState = {
  network: {
    name: 'ethereum-mainnet',
    tokenContractAddresses: [],
  },
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetworkRedux: (state, action) => {
      state.network = action.payload;
    },
  },
});

export default networkSlice.reducer;
export const { setNetworkRedux } = networkSlice.actions;
