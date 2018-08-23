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
    ['meta', { property: 'og:image', content: 'https://collectibles.friendsfingers.com/assets/images/ogimage.png' }],
    ['script', { src: 'assets/js/web3.min.js' }],
    ['script', { async: 'async', src: 'https://www.googletagmanager.com/gtag/js?id=UA-111269229-3'}],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}" +
      "gtag('js', new Date());" +
      "gtag('config', 'UA-111269229-3');"
    ],
  ],
  themeConfig: {
    navbar: false,
    search: false,
    editLinks: false,
  }
};
