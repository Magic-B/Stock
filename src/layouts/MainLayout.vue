<template>
  <div class="main_layout">
    <MainHeader />
    <div class="container">
      <PageTabs class="page_tabs" />
      <div class="nav_menu">
        <CategoryTabs />
        <SearchInput v-model.lazy="searchInput" />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStockStore } from '@/stores/StockStore'
import MainHeader from '@/components/MainHeader.vue'
import SearchInput from '@/components/SearchInput.vue'
import PageTabs from '@/components/PageTabs.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'
import { storeToRefs } from 'pinia'

const stockStore = useStockStore()
const { searchInput } = storeToRefs(stockStore)

onMounted(stockStore.fetchProducts)
</script>

<style scoped>
.page_tabs {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.nav_menu {
  display: flex;
  justify-content: space-between;
  margin-top: 77px;
  margin-bottom: 40px;
}
</style>