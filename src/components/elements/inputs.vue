<template>
    <input class="field"  @input="updateValue" :type="props.type" :placeholder="props.placeholder">
</template>
<script setup>
import {defineProps, defineEmits } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'String',
    },
    placeholder:{
        type: String,
        default: '',
    },
    modelValue:{
        type: String,
        default: ''
    }
});
const emit = defineEmits(['update:modelValue']);


const updateValue = (e) =>{
    emit('update:modelValue', e.target.value)
}

</script>
<style lang="scss" scoped>

.field{
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid $primary;
    font-size: 1.5em;
    font-weight: 700;
    background: $green;
    color: white;
    &::placeholder{
        color: $darkGrey;
    }
}
.err{
    border: 1px solid red;
}

.field::-webkit-outer-spin-button,
.field::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>