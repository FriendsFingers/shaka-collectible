<template>
    <b-container>
        <b-row class="p-2">
            <b-col md="6" offset-md="3" class="mt-4">
                <shaka-collectible v-if="!loading"
                                   v-bind:main-color="token.mainColor"
                                   v-bind:background-color="token.backgroundColor"
                                   v-bind:border-color="token.borderColor"
                                   v-bind:message="token.message"
                                   v-bind:show-message="true">
                </shaka-collectible>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import dapp from '../mixins/dapp';
  import ShakaCollectible from "./elements/ShakaCollectible";

  export default {
    components: { ShakaCollectible },
    mixins: [
      dapp
    ],
    data() {
      return {
        loading: true,
        token: {
          id: 0,
          beneficiary: '',
          mainColor: '',
          backgroundColor: '',
          borderColor: '',
          message: '',
        },
      };
    },
    methods: {
      web3Ready() {
        this.token.id = this.getParam('id');

        this.getToken();
      },
      getToken() {
        this.instances.token.getToken(this.token.id, (err, result) => {
          if (err) {
            alert('Some error occurs');
            console.log(err);
            return;
          }
          this.formatStructure(result);
        });
      },
      formatStructure(structure) {
        this.token.beneficiary = structure[0];

        if (this.token.beneficiary.toString() === '0x0000000000000000000000000000000000000000') {
          alert('Token not found!')
        } else {
          this.token.mainColor = '#' + this.web3.toAscii(structure[1]);
          this.token.backgroundColor = '#' + this.web3.toAscii(structure[2]);
          this.token.borderColor = '#' + this.web3.toAscii(structure[3]);
          this.token.message = structure[4];
          this.loading = false;
        }
      },
      getParam(param) {
        const vars = {};
        window.location.href.replace(location.hash, '').replace(
          /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
          function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
          }
        );

        if (param) {
          return vars[param] ? vars[param] : null;
        }
        return vars;
      },
    },
  }
</script>
