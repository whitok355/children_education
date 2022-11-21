<template>
  <headers />
  <div class="main container">
    <acc :user="user" />
    <workZone :user="user" />
  </div>
</template>
<script setup>
import { reactive } from "vue";
import headers from "comp/header.vue";
import acc from "comp/acc.vue";
import workZone from "comp/work-zone.vue";

const user = reactive(JSON.parse(localStorage.user));
</script>
<style lang="scss">
.main {
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 30px;
}
</style>
