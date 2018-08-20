<template>
    <div v-if="!loading">
        {{ token }}
    </div>
</template>

<script>
  import dapp from '../mixins/dapp';

  export default {
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
            alert(err);
            this.loading = false;
            return;
          }
          this.formatStructure(result);
        });
      },
      formatStructure(structure) {
        this.token.beneficiary = structure[0];
        this.token.mainColor = '#' + this.web3.toAscii(structure[1]);
        this.token.backgroundColor = '#' + this.web3.toAscii(structure[2]);
        this.token.borderColor = '#' + this.web3.toAscii(structure[3]);
        this.token.message = structure[4];
        this.loading = false;
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
