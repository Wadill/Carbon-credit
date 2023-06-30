import { ContractKit } from '@celo/contractkit';
import CarbonCreditContract from '../../../build/contracts/CarbonCredit.json';

const provider = window.celo;

let contractKit = null;
let carbonCredit = null;

export const initialize = async () => {
  if (provider) {
    contractKit = new ContractKit(provider);

    const networkId = await contractKit.web3.eth.net.getId();
    const deployedNetwork = CarbonCreditContract.networks[networkId];
    carbonCredit = new contractKit.web3.eth.Contract(
      CarbonCreditContract.abi,
      deployedNetwork && deployedNetwork.address,
    );
  }
};

export const getContractKit = () => contractKit;
