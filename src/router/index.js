import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/MainView.vue";
import Posts from "@/views/PostsView.vue";
import MapPage from "@/views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
    {
      path: "/map",
      name: "map-page",
      component: MapPage,
    },
  ],
});

export default router;
