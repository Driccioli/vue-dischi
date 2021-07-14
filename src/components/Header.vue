<template>
    <div class="p-2">
        <img src="../assets/spotify-logo.png" alt="Spotify logo">
    </div>
</template>

<script>
export default {
    name:"Header",
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
div{
    background-color: $card-background;
    width: 100%;
    text-align: left;
    img{
        max-width: 60px;
    }
}
</style>