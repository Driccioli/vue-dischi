<template>
  <div id="app">
    <Main :albums="albums"/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import axios from 'axios';
export default {
  name: "App",
  components: {
    Main,
  },
  data(){
    return{
      albums:[],
    }
  },
  
  created(){
      axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((result)=>{
          this.albums= result.data.response
      })
  }
};
</script>

<style lang="scss">
</style>
