import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Addrestaurant from "./components/Addrestaurant.vue";
// import Update from "./components/Update.vue";
import Showdata from "./components/showdata.vue";
import About from "./components/About.vue";
import Edit from "./components/Edit.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Addrestaurant",
    path: "/add",
    component: Addrestaurant,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Showdata",
    path: "/Showdata",
    component: Showdata,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
