import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import axios from 'axios'
import type { Product } from '@/types/product.interface'

const API_URL = import.meta.env.VITE_API_URL

type ProductsType = 'products' | 'favoritesProducts' | 'dealProducts'
type SortProductsBy = null | 'Разовая продажа' | 'Аукцион'

export const useStockStore = defineStore('stock', {
  state: () => ({
    products: [] as Product[],
    favoritesProducts: useStorage('favoritesProducts', [] as Product[]),
    dealProducts: useStorage('dealProducts', [] as Product[]),
    searchInput: useStorage('searchInput', ''),
    selected: useStorage('selected', null as SortProductsBy),
  }),

  actions: {
    async fetchProducts(): Promise<void> {
      try {
        const res = await axios.get(API_URL)
        this.products = res.data
      } catch (error) {
        alert(error)
      }
    },
    addTo(where: ProductsType, product: Product): void {
      this[where].push(product)
    },
    removeFrom(where: ProductsType, product: Product): void {
      this[where] = this[where].filter(
        (item: Product) => item.id !== product.id
      )
    },
  },

  getters: {
    filterBy: (state) => {
      return (sortBy: ProductsType) => {
        if (state.selected) {
          return state[sortBy].filter(
            (item: Product) => state.selected === item.type
          )
        }
        return state[sortBy]
      }
    },
    searchBy() {
      return (sortBy: ProductsType) =>
        this.filterBy(sortBy).filter(
          (product: Product) =>
            product.title
              .toLowerCase()
              .indexOf(this.searchInput.toLowerCase()) !== -1
        )
    },
    isProductInclude: (state) => (where: ProductsType, product: Product) => !!state[where].find(item => item.id === product.id)
  },
})
