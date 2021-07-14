<template>
    <div class="custom-card">
        <div class="inner">
            <img :src="poster" :alt="'Cover of'+ title"/>
            <div class="title">{{title}}</div>
            <div class="author">{{author}}</div>
            <div class="year">{{year}}</div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        poster: String,
        title: String,
        author: String,
        year: String,
    }
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
.custom-card{
    background-color:$card-background;
    text-align: center;
    margin: 10px;
}
img{
    width: 60%;
}
.title{
    padding-top: 10px;
    color: $album-title;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
}
.author, .year{
    color:$album-info;
    font-size:14px;
}

</style>