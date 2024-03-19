import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as states from '../../utils/strings';
import { providerEthereumMainnetUrl } from '../../utils/providerUrls';
import accountDefault from '../../assets/images/account-default.png';
interface IinitialState {
  accountsRedux: {
    name: string;
    publicKey: string;
    privateKey: string;
    image: string;
  }[];
  activeAccount: {
    name: string;
    publicKey: string;
    privateKey: string;
    image: string;
  };
}
const initialState: IinitialState = {
  accountsRedux: [
    {
      name: 'Account 1',
      publicKey: '0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A',
      privateKey: '',
      image: accountDefault,
    },
    { name: 'Account 2', publicKey: 'sksk', privateKey: 'jdjs', image: 's' },
  ],
  activeAccount: {
    name: 'Account 1',
    publicKey: '0x88c6C46EBf353A52Bdbab708c23D0c81dAA8134A',
    privateKey: '',
    image: accountDefault,
  },
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setAccountsRedux: (state, action) => {
      state.accountsRedux = action.payload;
    },
    setActiveAccount: (state, action) => {
      state.activeAccount = action.payload;
    },
  },
});

export default accountsSlice.reducer;
export const { setAccountsRedux, setActiveAccount } = accountsSlice.actions;
