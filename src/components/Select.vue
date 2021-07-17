<template>
    <div class="select-genre">
        <label for="genre">Genre: </label>
        <select v-model="selectValue" name="genre" id="genre">
            <option value="any">Any</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="metal">Metal</option>
        </select>
        <button @click="$emit('search',selectValue)" >Search</button>
    </div>
</template>

<script>
export default {
    name:"Select",
    data(){
        return{
            selectValue:"",
        };
    },
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
div{
    color: $album-title;
    text-align: right;
}
select{
    font-size: 16px;
    margin-left: 20px;
    background: $card-background;
    color: $album-title;
    border: 1px solid greenyellow;

}
</style>