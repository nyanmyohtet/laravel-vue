/* eslint-disable no-undef */
require("./bootstrap");

window.Vue = require("vue");

// import { BootstrapVue } from 'bootstrap-vue';

// Install BootstrapVue
// Vue.use(BootstrapVue);

import "../sass/custom.scss";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
Vue.use(VueAxios, axios);

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";
import EditComponent from "./components/EditComponent.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeComponent,
  },
  {
    name: "create",
    path: "/create",
    component: CreateComponent,
  },
  {
    name: "posts",
    path: "/posts",
    component: IndexComponent,
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditComponent,
  },
];

const router = new VueRouter({ mode: "history", routes: routes });
// eslint-disable-next-line no-unused-vars
const app = new Vue(Vue.util.extend({ router }, App)).$mount("#app");
