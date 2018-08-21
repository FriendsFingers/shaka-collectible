<template>
    <div class="page-wrapper">
        <site-header />
        <b-container>
            <transition name="fade" mode="out-in">
                <component v-if="page" :is="page" :key="page"></component>
            </transition>
        </b-container>
        <site-footer />
    </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import SiteHeader from './Header.vue';
  import SiteFooter from './Footer.vue';
  export default {
    components: {
      SiteHeader,
      SiteFooter,
    },
    computed: {
      page() {
        return this.$page.frontmatter.component || null;
      },
    },
  };
</script>
