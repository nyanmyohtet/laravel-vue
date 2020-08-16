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
    showNav: true,
  },
  getters: {
    accessToken: (state) => state.accessToken,
    isAuthenticated: (state) => !!state.accessToken,
    isShowNav: (state) => state.showNav,
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

    /**
     * Toggle nav bar
     * @param {Object} state
     * @param {boolean} status
     */
    showNav(state, status) {
      state.showNav = status;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
