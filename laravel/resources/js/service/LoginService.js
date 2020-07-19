import axios from "axios";

export default {
  methods: {
    loginHandler() {
      axios.post('http://localhost:8000/api/login', {
          email: "user01@laravel.com",
          password: "password123"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
