<template>
  <header class="header container">
    <router-link to="/"><logo class="header__logo" /></router-link>
    <div class="header__content">
      <h2 class="header__date">
        Сегодня
        <span class="header__span"
          >{{ fullDate.day }} {{ monthTransform }} {{ fullDate.year }}</span
        >
      </h2>
    </div>
  </header>
</template>
<script setup>
import { onMounted, reactive, computed } from "vue";
import logo from "elms/logo.vue";

const fullDate = reactive({});

onMounted(() => {
  const date = new Date();
  fullDate.day = date.getDate();
  fullDate.month = date.getMonth() + 1;
  fullDate.year = date.getFullYear();
});

const monthTransform = computed(() => {
  let month = "";
  switch (fullDate.month) {
    case 1:
      month = "января";
      break;
    case 2:
      month = "февраля";
      break;
    case 3:
      month = "марта";
      break;
    case 4:
      month = "апреля";
      break;
    case 5:
      month = "мая";
      break;
    case 6:
      month = "июня";
      break;
    case 7:
      month = "июля";
      break;
    case 8:
      month = "августв";
      break;
    case 9:
      month = "сентября";
      break;
    case 10:
      month = "октября";
      break;
    case 11:
      month = "ноября";
      break;
    case 12:
      month = "декабря";
      break;
  }
  return month;
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__span {
    text-decoration: underline;
  }
}
</style>
