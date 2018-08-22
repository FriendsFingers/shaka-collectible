<template>
    <b-row>
        <b-col md="2" sm="4" v-for="item in tokenList" :key="item.id" class="p-2">
            <b-link :to="{ path: 'view.html', query: { id: item.id } }">
                <shaka-collectible v-bind:main-color="item.mainColor"
                                   v-bind:background-color="item.backgroundColor"
                                   v-bind:border-color="item.borderColor"
                                   v-bind:message="item.message"
                                   v-bind:show-message="false">
                </shaka-collectible>
            </b-link>
        </b-col>
    </b-row>
</template>

<script>
  import dapp from '../../mixins/dapp';
  import ShakaCollectible from "./ShakaCollectible";

  export default {
    components: { ShakaCollectible },
    mixins: [
      dapp
    ],
    data() {
      return {
        progressiveId: 0,
        tokenList: [],
      };
    },
    methods: {
      web3Ready() {
        this.instances.token.progressiveId((err, progressiveId) => {
          this.progressiveId = progressiveId.valueOf();
          if (this.progressiveId > 0) {
            this.getToken(1);
          }
        });
      },
      getToken(tokenId) {
        this.instances.token.getToken(tokenId, (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          this.formatStructure(tokenId, result);
        });
      },
      formatStructure(tokenId, structure) {
        let token = {};

        token.id = tokenId;
        token.beneficiary = structure[0];

        if (token.beneficiary.toString() === '0x0000000000000000000000000000000000000000') {
          console.log(`Token ${tokenId} not found!`);
        } else {
          token.mainColor = '#' + this.web3.toAscii(structure[1]);
          token.backgroundColor = '#' + this.web3.toAscii(structure[2]);
          token.borderColor = '#' + this.web3.toAscii(structure[3]);
        }

        this.tokenList.push(token);

        if (this.tokenList.length < this.progressiveId) {
          this.getToken(++tokenId);
        }
      },
    },
  }
</script>
