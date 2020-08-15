import axios from "axios";
import router from "../route/route.js";

export default {
  data() {
    return { name: "", email: "", password: "", c_password: "" };
  },
  methods: {
    registerHandler() {
      axios
        .post("http://localhost:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          c_password: this.c_password,
        })
        .then((response) => {
          if (response.status == 200) {
            router.push("login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
