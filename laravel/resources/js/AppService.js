import store from "./store/store.js";
const AppService = {
  data() {
    return {
      showNav: store.getters.isShowNav,
    };
  },
};

export default AppService;
