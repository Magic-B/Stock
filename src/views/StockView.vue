<template>
  <div class="product_list" v-if="stockStore.products.length">
    <template v-for="product in productsBy" :key="product.id">
      <ProductCard :data="product">
        <ActionButton label="Добавить в сделки" @click="addToDeal(product)" />
      </ProductCard>
    </template>
  </div>
  <AppLoader big-loader v-else />
  <div class="message" v-if="stockStore.products.length && !productsBy.length">
    Такого товара нет на складе
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStockStore } from '@/stores/StockStore'
import type { Product } from '@/types/product.interface'
import ProductCard from '@/components/ProductCard.vue'
import ActionButton from '@/components/ActionButton.vue'
import AppLoader from '@/components/AppLoader.vue'

const stockStore = useStockStore()
const productsBy = computed(() => stockStore.searchBy('products'))
const addToDeal = (product: Product): void => stockStore.addTo('dealProducts', product)
</script>

<style scoped>
.product_list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.message {
  font-size: 22px;
  font-weight: 500;
}
</style>
