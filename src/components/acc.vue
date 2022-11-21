<template>
  <div class="acc">
    <div class="acc__top">
      <h2 class="acc__title">Привет {{ props.user.name }}</h2>
      <img class="acc__img" src="../assets/img/acc.webp" alt="account" />
    </div>
    <div class="acc__content">
      <h3 class="acc__subTitle">Время на портале</h3>
      <small>{{ "3 часа" }}</small>
      <h3 class="acc__subTitle">Выполненно заданий</h3>
      <small>{{ props.user.stat.quantity }}</small>
      <h3 class="acc__subTitle">Правильно выполненных</h3>
      <small>{{ props.user.stat.trueQuantity }}</small>
      <h3 class="acc__subTitle">Неверно выполненных</h3>
      <small>{{ props.user.stat.falseQuantity }}</small>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  user: {
    type: Object,
  },
});
</script>
<style lang="scss" scoped>
.acc {
  padding: 60px 10px;
  border: 10px solid $green;
  border-radius: 10px;
  &__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__title {
    text-decoration: underline;
    text-transform: uppercase;
  }
  &__img {
    width: 150px;
    height: 200px;
  }
  &__subTitle {
    margin-top: 50px;
  }
  &__content {
    margin-top: 50px;
  }
}
</style>
