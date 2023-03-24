<template>
  <div class="page_tabs">
    <TabBtn label="Избранное" icon="favorites" />
    <TabBtn label="Склад" icon="stock" />
    <TabBtn label="Сделки" icon="deals" />
  </div>
</template>

<script setup lang="ts">
import TabBtn from './TabBtn.vue';
</script>

<style lang="scss" scoped>
.page_tabs {
  display: flex;
}
</style>