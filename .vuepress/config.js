module.exports = {
  title: 'ShakaCollectible',
  description: 'The DApp that represents a Collectible Shaka.',
  blockchain: {
    tokenAddress: "0x4cA68712dA8DDc293E159AB2f0E6eA1D878b5949",
    web3Provider: "https://rinkeby.infura.io",
    etherscanLink: "https://rinkeby.etherscan.io",
    networkId: "4",
    networkName: "Rinkeby Test Network",
  },
  head: [
    ['script', { src: 'assets/js/web3.min.js' }]
  ],
  themeConfig: {
    navbar: false,
    search: false,
    editLinks: false,
  }
};
