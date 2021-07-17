<template>
  <div id="app">
    <Header />
    <div class="container-fluid p-5">
      <Loader v-if="albums.length==0"/>
      <Select @search="searchGenre"/>
      <Main :albums="filteredAlbums"/>
    </div>
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Loader from "./components/Loader.vue";
import Select from "./components/Select.vue";
import axios from 'axios';
export default {
  name: "App",
  components: {
    Header,
    Main,
    Select,
    Loader,
  },
  data(){
    return{
      albums:[],
      filteredAlbums:[],
    }
  },  
    methods:{
        searchGenre(selectValue){
          console.log("is this working?");
          console.log(selectValue);
          this.filteredAlbums = this.albums;
            if(selectValue=="any"){
              return;
            } else{
              this.filteredAlbums = this.albums.filter(element => element.genre.toLowerCase()===selectValue);
            }
        },
        generateAlbums(){
          axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result)=>{
          this.albums= result.data.response;
          this.filteredAlbums = this.albums;
         })
        }
    },
  
  created(){
      this.generateAlbums();
  }
};
</script>

<style lang="scss">
@import "./style/colors.scss";
#app{
  background-color:$spotify-background;
}
</style>
