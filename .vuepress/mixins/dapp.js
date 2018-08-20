import config from '../config';

import TokenArtifact from '../abi/ShakaCollectible.json';

export default {
  data() {
    return {
      web3: null,
      web3Provider: null,
      etherscanLink: config.blockchain.etherscanLink,
      instances: {
        token: null,
      },
    };
  },
  mounted() {
    this.initWeb3();
  },
  methods: {
    initWeb3() {
      console.log('provided web3');
      // set the provider you want from Web3.providers
      this.web3Provider = new window.Web3.providers.HttpProvider(config.blockchain.web3Provider);
      this.web3 = new window.Web3(this.web3Provider);
      this.instances.token = this.web3.eth.contract(TokenArtifact.abi).at(config.blockchain.tokenAddress);

      this.web3Ready();
    },
    web3Ready() {
      // Placeholder function.
      // Create one like this on your component if you want to do fun stuff with web3!
    },
  },
};
