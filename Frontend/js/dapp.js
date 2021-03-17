// Change this address to match your deployed contract!
const contract_address_1 = "0x59a611eCfE1A83fdC33C4ce4fdB18622fb05AcE1";

import detectEthereumProvider from '@metamask/detect-provider';


const dApp = {
  ethEnabled: function() {
    // If the browser has MetaMask installed
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  },
  
  main: async function() {
    // Initialize web3
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }
  
    this.accounts = await window.web3.eth.getAccounts();
  
    this.cryptoRightABI = await (await fetch("./CryptoRight.json")).json();
  
    this.contract = new window.web3.eth.Contract(
      this.cryptoRightABI,
      contract_address,
      { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.contract);
  
    this.updateUI();
  }


};

dApp.main();