<template>
  <div class="row justify-content-center flex-wrap">
      <Card class="col-2 pt-2 pb-2" v-for="(album,index) in albums" :key="index"
                :poster="album.poster"
                :title="album.title"
                :author="album.author"
                :genre="album.genre"
                :year="album.year"
        />
        <Loader v-if="albums.length!=10"/>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Loader from "./Loader.vue";
export default {
  name: "Main",
  components: {
      Card,
      Loader,
  },
  props:{
      albums: Array,
  }
};
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
    .row{
            background-color: $spotify-background;
        }
</style>
