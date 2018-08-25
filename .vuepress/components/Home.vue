<template>
    <b-container>
        <b-row>
            <b-col class="p-2">
                <b-jumbotron bg-variant="light" class="mt-4">
                    <template slot="lead">
                        <b>Shaka Collectible Tokens</b> represent a Digital Collectible issued by <b>FriendsFingers</b>,
                        the Smart Contracts based Crowdfunding platform.
                    </template>
                    <hr class="my-4">
                    <p>Each Shaka Collectible is an ERC721 Token born by a Smart Contract living on the Ethereum Blockchain... 🤔</p>
                    <p>Want to learn more about Collectibles?
                        Read our <b-link target="_blank" href="https://medium.com/friendsfingers/wtf-are-collectible-or-non-fungible-tokens-54b36eda2af">blog post</b-link>
                        or explore the <b-link target="_blank" href="https://github.com/friendsfingers/shaka-collectible">Source Code</b-link>.</p>
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
