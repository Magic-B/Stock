<template>
  <div class="page_tabs">
    <RouterLink
      class="router_link"
      :to="{ name: 'favorites' }"
      active-class="active"
    >
      <TabButton label="Избранное" icon="favorites" />
    </RouterLink>
    <RouterLink
      class="router_link"
      :to="{ name: 'stock' }"
      active-class="active"
    >
      <TabButton label="Склад" icon="stock" />
    </RouterLink>
    <RouterLink
      class="router_link"
      :to="{ name: 'deals' }"
      active-class="active"
    >
      <TabButton label="Сделки" icon="deals" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TabButton from '@/components/TabButton.vue'
</script>

<style lang="scss" scoped>
.page_tabs {
  display: flex;
  text-decoration: none;
}
.active {
  background: $bg;
  border-radius: 10px;
}
</style>
