<template>
  <MainHeader />
  <div class="container">
    <PageTabs />
    <SearchInput />
    <CategoryTabs />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainHeader from "@/components/MainHeader.vue";
import SearchInput from "@/components/SearchInput.vue";
import PageTabs from '@/components/PageTabs.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
</script>

<style scoped>

</style>