import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    accessToken: null,
  },
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    // store access token
    storeAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
});

export default store;
