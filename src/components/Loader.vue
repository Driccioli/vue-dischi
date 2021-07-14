<template>
    <div>
        Caricamento in corso...
    </div>
</template>

<script>
export default {
    name:"Loader",
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
div{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: $album-title;
}
</style>