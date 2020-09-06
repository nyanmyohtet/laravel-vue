import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store.js";
import HomeComponent from "../page/HomeComponent.vue";
import RegisterComponent from "../page/RegisterComponent.vue";
import LoginComponent from "../page/LoginComponent.vue";
import CreateComponent from "../components/CreateComponent.vue";
import IndexComponent from "../components/IndexComponent.vue";
import EditComponent from "../components/EditComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "register",
    path: "/register",
    component: RegisterComponent,
  },
  {
    name: "login",
    path: "/login",
    component: LoginComponent,
  },
  {
    name: "create",
    path: "/post/create",
    component: CreateComponent,
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent,
  },
  {
    name: "edit",
    path: "/post/edit/:id",
    component: EditComponent,
  },
];

const router = new VueRouter({ mode: "history", routes: routes });

// Global Before Guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.name !== "login" && to.name !== "register" && !isAuthenticated) {
    store.commit("showNav", false);
    next({ name: "login" });
  } else {
    store.commit("showNav", true);
    next();
  }
});

export default router;
