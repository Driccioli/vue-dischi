<template>
  <div class="row justify-content-center flex-wrap">
      <Card class="col-2 pt-2 pb-2" v-for="(album,index) in albums" :key="index"
                :poster="album.poster"
                :title="album.title"
                :author="album.author"
                :genre="album.genre"
                :year="album.year"
        />
        
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Main",
  components: {
      Card,
  },
  props:{
      albums: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
    .row{
            background-color: $spotify-background;
        }
</style>
