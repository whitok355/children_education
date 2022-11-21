<template>
    <input class="btn" type="submit" :value="props.text">
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text:{
        type: String,
        require: true,
        default: 'Начнем'
    }
})
</script> 
<style lang="scss" scoped>
.btn{
    padding: 10px 20px;
    font-size: 2em;
    font-family: 'Nunito Bold';
    background: $green;
    border: none;
    color: $darkGrey;
    border-radius: 5px;
}
.btn:hover{
    cursor: pointer;
}
</style>