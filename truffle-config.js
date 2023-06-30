const ContractKit = require('@celo/contractkit');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Use the URL of your Celo node

// Update the following network configurations according to your Celo network settings
const network = {
  development: {
    url: 'http://localhost:8545',
    chainId: 44787,
    gas: 6000000,
    gasPrice: '1000000000', // 1 gwei
    from: '<YOUR_ADDRESS>',
  },
  celoTestnet: {
    url: 'https://alfajores-forno.celo-testnet.org',
    chainId: 44787,
    gas: 6000000,
    gasPrice: '1000000000', // 1 gwei
    from: '<YOUR_ADDRESS>',
  },
  celoMainnet: {
    url: 'https://forno.celo.org',
    chainId: 42220,
    gas: 6000000,
    gasPrice: '1000000000', // 1 gwei
    from: '<YOUR_ADDRESS>',
  },
};

const kit = ContractKit.newKitFromWeb3(web3);
kit.addAccount('<YOUR_PRIVATE_KEY>');

module.exports = {
  networks: {
    development: {
      url: network.development.url,
      chainId: network.development.chainId,
      gas: network.development.gas,
      gasPrice: network.development.gasPrice,
      from: network.development.from,
    },
    celoTestnet: {
      url: network.celoTestnet.url,
      chainId: network.celoTestnet.chainId,
      gas: network.celoTestnet.gas,
      gasPrice: network.celoTestnet.gasPrice,
      from: network.celoTestnet.from,
    },
    celoMainnet: {
      url: network.celoMainnet.url,
      chainId: network.celoMainnet.chainId,
      gas: network.celoMainnet.gas,
      gasPrice: network.celoMainnet.gasPrice,
      from: network.celoMainnet.from,
    },
  },
  compilers: {
    solc: {
      version: '0.8.0', // Update the Solidity compiler version according to your needs
    },
  },
  plugins: [
    'truffle-plugin-verify', // Uncomment this line if you want to use Truffle plugin for contract verification
  ],
};
