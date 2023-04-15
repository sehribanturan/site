import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import PayView from '@/views/PayView.vue';



const routes = [
  {
    path: "/",
    name: "Anasayfa",
    component: HomeView,
  },
  {
    path: "/about",
    name: "Hakkında",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "İletişim",
  
    component: () =>
      import( "../views/ContactView.vue"),
  },
  {
    path: "/product",
    name: "UrunSayfasi",
    component: ProductView,
  },
  {
    path: "/login",
    name: "GirisSayfasi",
    component: LoginView,
  },
  {
    path: "/register",
    name: "KayitSayfasi",
    component:RegisterView,
  },
  {
    path: "/pay",
    name: "OdemeSayfasi",
    component:PayView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
