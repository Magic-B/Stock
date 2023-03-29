<template>
  <div class="product_list" v-if="productsBy.length">
    <template v-for="product in productsBy" :key="product.id">
      <ProductCard :data="product">
        <ActionBtn
          label="Добавить в сделки"
          alt-label="Добавлен"
          :active="isProductInclude(product, 'dealProducts')"
          @click="addToDeal(product)"
        />
      </ProductCard>
    </template>
  </div>
  <div class="message" v-else>
    У вас пока нет избранных товаров
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStockStore } from '@/stores/StockStore';
import { isProductInclude } from '@/composables/useProductInclude'
import type { Product } from '@/types/product.interface'
import ProductCard from '@/components/ProductCard.vue';
import ActionBtn from '@/components/ActionBtn.vue';

const stockStore = useStockStore()
const productsBy = computed(() => stockStore.searchBy('favoritesProducts'))
const addToDeal = (product: Product): void => stockStore.addTo(product, 'dealProducts')
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