<template>
    <div class="logo">
        <education class="logo__icon"/>
        <h1 class="logo__title">Тест<span class="logo__span">ириум</span>
        </h1>
    </div>
</template>
<script setup>
import education from 'icons/education.vue'
</script>
<style lang="scss">
.logo{
    display: flex;
    align-items: center;
}
.logo__icon{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.logo__title{
    text-transform: uppercase;
    font-weight: 900;
}
.logo__span{
    font-weight: 400;
    margin-left: 10px;
}
</style>