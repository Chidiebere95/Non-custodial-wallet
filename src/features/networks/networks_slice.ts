import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as states from '../../utils/strings';
import eth from '../../assets/images/eth_logo.png';
import lineaGoerli from '../../assets/images/linea-logo-testnet.png';
import {
  providerBaseGoerliUrl,
  providerBscMainnetUrl,
  providerBscTestnetUrl,
  providerEthereumMainnetUrl,
  providerEthereumSepoliaUrl,
  providerOptimismGoerliUrl,
  providerPolygonMainnetUrl,
  providerPolygonMumbaiUrl,
} from '../../utils/providerUrls';
interface IinitialState {
  networkDetails: {
    name: string;
    title: string;
    symbol: string;
    providerURL: any;
    usdValue: number;
    tokenContractAddresses: string[];
  };
  networks: Array<any>;
  activeNetwork: Record<any, any>;
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
  networks: [
    {
      id: 'ethereum-mainnet',
      name: 'Ethereum Mainnet',
      symbol: 'Eth',
      image: eth,
      providerURL: providerEthereumMainnetUrl,
      usdValue: 4000,
      tokenContractAddresses: [],
    },
    {
      id: 'ethereum-sepolia',
      name: 'Ethereum Sepolia',
      symbol: 'Ethereum Sepolia Eth',
      image: lineaGoerli,
      providerURL: providerEthereumSepoliaUrl,
      usdValue: 4000,
      tokenContractAddresses: [],
    },
    {
      id: 'bsc-mainnet',
      name: 'Binance Smart Chain',
      symbol: 'Bnb',
      image: eth,
      providerURL: providerBscMainnetUrl,
      usdValue: 541,
      tokenContractAddresses: [],
    },
    {
      id: 'bsc-testnet',
      name: 'Binance testnet',
      symbol: 'Bnb',
      image: eth,
      providerURL: providerBscTestnetUrl,
      usdValue: 541,
      tokenContractAddresses: [],
    },
    {
      id: 'polygon-mainnet',
      name: 'Polygon',
      symbol: 'Matic',
      image: eth,
      providerURL: providerPolygonMainnetUrl,
      usdValue: 1.2,
      tokenContractAddresses: [],
    },
    {
      id: 'polygon-mumbai',
      name: 'Polygon Mumbai',
      symbol: 'Matic',
      image: eth,
      providerURL: providerPolygonMumbaiUrl,
      usdValue: 1.2,
      tokenContractAddresses: [],
    },
    {
      id: 'base-goerli',
      name: 'Base Goerli',
      symbol: 'Base Goerli Eth',
      image: eth,
      providerURL: providerBaseGoerliUrl,
      usdValue: 0.0000001833,
      tokenContractAddresses: [],
    },
    {
      id: 'optimism-goerli',
      name: 'Optimism Goerli',
      symbol: 'Optimism Goerli Eth',
      image: eth,
      providerURL: providerOptimismGoerliUrl,
      usdValue: 4.34,
      tokenContractAddresses: [],
    },
  ],
  activeNetwork: {
    id: 'ethereum-mainnet',
    name: 'Ethereum Mainnet',
    symbol: 'Eth',
    image: eth,
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
    setActiveNetwork: (state, action) => {
      state.activeNetwork = action.payload;
    },
  },
});

export default networkSlice.reducer;
export const { setNetwork, setActiveNetwork } = networkSlice.actions;
