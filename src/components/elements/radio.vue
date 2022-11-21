<template>
    <div class="radio">
        <input class="radio__invisible" :id="props.id" type="radio" :name="name" @input="updateValue">
        <div class="radio__visible">
            <div class="radio__center" v-if="props.value"></div>
        </div>
        <label class="radio__label"><slot></slot></label>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    id:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true
    },
    value:{
        type: Boolean,
        require: true,
        default: false,
    },
    modelValue:{
        type: String,
        default: ''
    }
})
const emit = defineEmits(['update:modelValue']);

const updateValue = (e) =>{
    emit('update:modelValue', e.target.id)
}
</script>
<style lang="scss" scoped>
.radio{
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
}
.radio__invisible{
    position: absolute;
    opacity: 0;
    z-index: 1;
    top: 7px;
    left: -30px;
    transform: scale(2.3);
}
.radio__visible{
    position: absolute;
    top: 2px;
    left: -35px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    z-index: 0;
    width: 24px;
    height: 24px;
    outline: 3px solid $green;
    border-radius: 100px;
    text-align: center;
}
.radio__center{
    width: 70%;
    height: 70%;
    background: $green;
    border-radius: 100px;
}
.radio__label{
    font-size: 1.5em;
    text-transform: uppercase;
}
</style>