<template>
    <div class="p-2 d-flex justify-content-between align-items-center">
        <img src="../assets/spotify-logo.png" alt="Spotify logo">
        
    </div>
</template>

<script>
// import Select from "./Select.vue";
export default {
    name:"Header",
    components:{
    },
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