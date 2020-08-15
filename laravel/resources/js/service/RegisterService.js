import axios from "axios";
import router from "../route/route.js";

export default {
  data() {
    return {
      form: { name: "", email: "", password: "", c_password: "" },
      showForm: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:8000/api/register", {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          c_password: this.form.c_password,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            router.push("login");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onReset() {
      this.form = { name: "", email: "", password: "", c_password: "" };
    },
  },
};
