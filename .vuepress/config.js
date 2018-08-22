module.exports = {
  title: 'Shaka Collectible',
  description: 'Shaka Collectibles Tokens represent a Digital Collectible issued by FriendsFingers, the Smart Contracts based Crowdfunding platform.',
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
