import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import axios from 'axios'
import type { Product } from '@/types/product.interface'

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
        const res = await axios.get(import.meta.env.VITE_BASE_URL)
        this.products = res.data
      } catch (error) {
        console.log('ERROR')
      }
    },
    addTo(product: Product, where: ProductsType): void {
      this[where].push(product)
    },
    removeFrom(product: Product, where: ProductsType): void {
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
  },
})
