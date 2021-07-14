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
}
img{
    width: 100%;
}
.title{
    color: $album-title;
    font-weight: bold;
    font-size: 20px;
}
.author, .year{
    color:$album-info;
    font-size:14px;
}

</style>