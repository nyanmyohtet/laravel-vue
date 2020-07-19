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

import routes from "./route/route.js";

const router = new VueRouter({ mode: "history", routes: routes });
const app = new Vue(Vue.util.extend({ router }, App)).$mount("#app");
