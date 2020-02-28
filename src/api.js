import axios from "axios";

export default {
  users: {
    getUsers: () =>
      axios
        .get("/users")
        .then(res => res.data)
  }
}
