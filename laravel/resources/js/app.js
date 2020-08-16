/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

// router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./route/route.js";

// bootstrap css
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import "../sass/custom.scss";

// http client
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

// store
import store from "./store/store.js";

import App from "./App.vue";
new Vue(Vue.util.extend({ router, store }, App)).$mount("#app");
