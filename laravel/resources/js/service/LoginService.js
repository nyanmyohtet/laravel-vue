import axios from "axios";
import route from "../route/route.js";
import store from "../store/store.js";

const LoginService = {
  data() {
    return {
      form: { email: "", password: "" },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:8000/api/login", {
          email: this.form.email,
          password: this.form.password,
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
