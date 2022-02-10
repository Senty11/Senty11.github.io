let web3;
if (window.ethereum && window.ethereum.isMetaMask) {
  web3 = new Web3(window.ethereum);
} 
