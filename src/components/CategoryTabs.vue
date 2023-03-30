<template>
  <div class="category_tabs">
    <div
      class="category_tabs_item"
      :class="{ active: !selected }"
      @click="selected = null"
    >
      Все типы
    </div>
    <div
      class="category_tabs_item"
      :class="{ active: selected === 'Разовая продажа' }"
      @click="selected = 'Разовая продажа'"
    >
      Прямые продажи
    </div>
    <div
      class="category_tabs_item"
      :class="{ active: selected === 'Аукцион' }"
      @click="selected = 'Аукцион'"
    >
      Аукцион
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStockStore } from '@/stores/StockStore'
import { storeToRefs } from 'pinia'

const stockStore = useStockStore()
const { selected } = storeToRefs(stockStore)
</script>

<style lang="scss" scoped>
.category_tabs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  width: 304px;
  height: 40px;

  background: #F4F5F9;
  border: 1px solid #E0E3EE;
  border-radius: 10px;

  &_item {
    cursor: pointer;
    font-size: 15px;
    color: $selection;
  
    &.active {
      color: $primary !important;
    }
  }
}
</style>
