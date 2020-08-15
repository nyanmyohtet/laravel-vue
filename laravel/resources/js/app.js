require("./bootstrap");

window.Vue = require("vue");

import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

import "../sass/custom.scss";

import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
Vue.use(VueAxios, axios);

import router from "./route/route.js";
import store from "./store/store.js";
const app = new Vue(Vue.util.extend({ router, store }, App)).$mount("#app");
