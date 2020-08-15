import axios from "axios";
import route from "../route/route.js";
import store from "../store/store.js";

const LoginService = {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginHandler() {
      axios
        .post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
            store.commit("logIn", response.data.success);
            route.push({ name: "home" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

export default LoginService;
