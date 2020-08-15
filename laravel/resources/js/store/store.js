import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  filter: (mutation) => mutation.type == "logIn",
  reducer: (state) => ({ accessToken: state.accessToken }),
});

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

    /**
     * Store access token on login
     * @param {Object} state
     * @param {String} token
     */
    logIn(state, { token }) {
      state.accessToken = token;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
