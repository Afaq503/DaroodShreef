import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Footer from "../components/Footer.vue";
const routes = [
  // {
  //   path: "/",
  //   name: "Footer",
  //   component: Footer,
  // },
  {
    path: "/log",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "register",
    component: Register,
  },
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
