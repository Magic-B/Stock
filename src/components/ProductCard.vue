<template>
  <div class="product_card" v-if="data">
    <div class="product_card_data">
      <img :src="data.img" :alt="data.title" class="product_card_img">
      <div class="product_card_info">
        <div class="product_card_info_type">
          {{ data.type }}
        </div>
        <div class="product_card_info_title">
          {{ data.title }}
        </div>
        <div class="product_card_info_geo">
          <IconsController name="geo" />
          {{ data.city }}
        </div>
        <div class="product_card_info_seller">
          <span>Продавец</span>
          {{ data.seller }}
        </div>
        <div class="product_card_info_category">
          <span>Вид товара</span>
          {{ data.category }}
        </div>
        <div class="product_card_info_description">
          {{ prepareDescription(data.description) }}
        </div>
      </div>
    </div>

    <div class="product_card_sell">
      <div class="product_card_deal">
        <div class="product_card_deal_total">
          {{ priceCorrection(totalPrice) }} ₽
        </div>
        <div class="product_card_deal_quantity">
          <span>Количество</span>
          {{ data.quantity }} шт.
        </div>
        <div class="product_card_deal_price">
          <span>Стоимость за штуку</span>
          {{ priceCorrection(data.price) }} ₽
        </div>
      </div>
      <div class="product_card_btns">
        <slot></slot>
        <FavoritesButton :active="isProductInclude(data, 'favoritesProducts')" @click="addToFavorites(data)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStockStore } from '@/stores/StockStore'
import type { PropType } from 'vue'
import type { Product } from '@/types/product.interface'
import { isProductInclude } from '@/composables/useProductInclude'
import IconsController from '@/components/IconsController.vue'
import FavoritesButton from '@/components/FavoritesButton.vue'

const props = defineProps({
  data: {
    type: Object as PropType<Product>,
    required: true
  }
})

defineEmits(['favoriteAction'])

const stockStore = useStockStore()

const addToFavorites = (product: Product) => {
  if (!isProductInclude(props.data, 'favoritesProducts')) {
    stockStore.addTo(product, 'favoritesProducts')
  } else {
    stockStore.removeFrom(product, 'favoritesProducts')
  }
}

const totalPrice = computed(() => props.data.price * props.data.quantity)

const priceCorrection = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const prepareDescription = (value: string) => {
  if (value?.length > 250) {
    return value.substring(0, 250) + '...'
  }
  return value
}
</script>

<style lang="scss" scoped>
.product_card {
  display: flex;
  min-width: 1180px;
  min-height: 300px;
  border: 1px solid #E0E3EE;
  border-radius: 20px;

  &_data {
    display: flex;
    margin: 20px;
    gap: 20px;

    .product_card_img {
      object-fit: cover;
      max-width: 256px;
      max-height: 256px;
      border-radius: 20px;
    }

    .product_card_info {
      &_type {
        color: $selection;
      }

      &_title {
        margin-top: 15px;
        font-weight: 500;
        font-size: 15px;
      }

      &_geo {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 240px;
        height: 23px;

        padding: 0 8px;
        gap: 5px;
        margin-top: 25px;
        background: $bg;
        border-radius: 5px;
      }

      &_seller {
        margin-top: 12px;

        span {
          margin-right: 5px;
          color: $selection;
        }
      }

      &_category {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px;
        margin-top: 12px;
        gap: 6px;
        width: 124px;
        height: 48px;

        background: $bg;
        color: #616CA5;
        border-radius: 10px;

        span {
          color: $selection;
        }
      }

      &_description {
        margin-top: 12px;
      }
    }
  }

  .product_card_sell {
    position: relative;
    min-width: 315px;
    min-height: 365px;
    padding: 20px;
    border: 1px solid #E0E3EE;
    border-radius: 20px;

    .product_card_deal {
      &_total {
        font-weight: 500;
        font-size: 20px;
      }

      &_quantity {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;

        span {
          color: $selection;
        }
      }

      &_price {
        display: flex;
        justify-content: space-between;
        margin-top: 11px;

        span {
          color: $selection;
        }
      }
    }

    .product_card_btns {
      position: absolute;
      display: flex;
      gap: 12px;
      bottom: 20px;
    }
  }
}
</style>
