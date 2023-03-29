<template>
  <div class="product_list" v-if="productsBy.length">
    <template v-for="product in productsBy" :key="product.id">
      <ProductCard :data="product">
        <BuyButton label="Оплатить" alt-label="Оплачено" />
      </ProductCard>
    </template>
  </div>
  <div class="message" v-else>
    У вас пока нет сделок
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStockStore } from '@/stores/StockStore';
import ProductCard from '@/components/ProductCard.vue';
import BuyButton from '@/components/BuyButton.vue'

const stockStore = useStockStore()
const productsBy = computed(() => stockStore.searchBy('dealProducts'))
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