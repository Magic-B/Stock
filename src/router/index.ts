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
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
