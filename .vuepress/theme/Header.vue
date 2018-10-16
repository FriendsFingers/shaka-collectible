<template>
    <b-navbar toggleable="md" variant="light" sticky>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/">Shaka Collectible</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/">All tokens</b-nav-item>
                <b-nav-item target="_blank" href="https://www.friendsfingers.com/">FriendsFingers</b-nav-item>
                <b-nav-item target="_blank" href="https://github.com/FriendsFingers">GitHub</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
