import { ethers } from 'ethers';
export const providerBaseGoerli = new ethers.providers.JsonRpcProvider(
  'https://quick-ultra-spring.base-goerli.discover.quiknode.pro/4aa8545e854b5a9e8722015e9ace2a9855282395/'
);
export const providerOptimismGoerli = new ethers.providers.JsonRpcProvider(
  'https://old-special-star.optimism-goerli.discover.quiknode.pro/844ca5af827239572b018eccd62bba16a07c34c1/'
);
export const providerEthereumMainnet = new ethers.providers.JsonRpcProvider(
  'https://practical-necessary-mountain.discover.quiknode.pro/b7b754637febb9825b7a78a42f400edcc4909393/'
);
export const providerPolygonMumbai = new ethers.providers.JsonRpcProvider(
  'https://wild-capable-star.matic-testnet.discover.quiknode.pro/2c6b5d10c7c08f7afc6ed0814e7ba78de8d64652/'
);
