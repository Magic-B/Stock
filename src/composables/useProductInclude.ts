import { useStockStore } from '../stores/StockStore'

type ProductsType = "products" | "favoritesProducts" | "dealProducts"

export function isProductInclude (product, where: ProductsType) {
  const stockStore = useStockStore()
  return !!stockStore[where].find(item => item.id === product.id)
}