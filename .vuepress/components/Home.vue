<template>
    <b-container>
        <b-row>
            <b-col class="p-2">
                <b-jumbotron bg-variant="light" class="mt-4">
                    <template slot="header">
                        Shaka Collectible
                    </template>
                    <template slot="lead">
                        Shaka Collectibles Tokens represent a Digital Collectible issued by FriendsFingers,
                        the Smart Contracts based Crowdfunding platform.
                    </template>
                    <hr class="my-4">
                    <p>Discover more about FriendsFingers or read the Source Code of our Collectibles.</p>
                    <b-btn variant="outline-success" size="lg" target="_blank" href="https://www.friendsfingers.com">FriendsFingers</b-btn>
                    <b-btn variant="outline-info" size="lg" target="_blank" href="https://github.com/friendsfingers/shaka-collectible">Source Code</b-btn>
                </b-jumbotron>
            </b-col>
        </b-row>
        <list-token />
    </b-container>
</template>

<script>
  import ListToken from "./elements/ListToken";

  export default {
    components: { ListToken },
  }
</script>
