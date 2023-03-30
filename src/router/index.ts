import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayout,
      children: [
        { path: "/stock", alias: "/", name: "stock", component: () => import("@/views/StockView.vue") },
        { path: "/deals", name: "deals", component: () => import("@/views/DealsView.vue") },
        { path: "/favorites", name: "favorites", component: () => import("@/views/FavoritesView.vue") }
      ]
    }
  ],
});

export default router;
