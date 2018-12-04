module.exports = {
  title: 'Shaka Collectible',
  description: 'Shaka Collectibles Tokens represent a Digital Collectible issued by FriendsFingers, the Smart Contracts based Crowdfunding platform.',
  ga: 'UA-111269229-3',
  blockchain: {
    tokenAddress: "0x4cA68712dA8DDc293E159AB2f0E6eA1D878b5949",
    web3Provider: "https://rinkeby.infura.io/v3/6a3d80dafe7a466ca65220245c7527b8",
    etherscanLink: "https://rinkeby.etherscan.io",
    networkId: "4",
    networkName: "Rinkeby Test Network",
  },
  head: [
    ['meta', { property: 'og:image', content: 'https://collectibles.friendsfingers.com/assets/images/ogimage.png' }],
    ['script', { src: 'assets/js/web3.min.js' }],
  ],
  themeConfig: {
    navbar: false,
    search: false,
    editLinks: false,
  }
};
