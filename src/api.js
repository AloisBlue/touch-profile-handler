import axios from "axios";

export default {
  users: {
    getUsers: () =>
      axios
        .get("/users")
        .then(res => res.data),
    getSingleUser: id =>
      axios
        .get(`/users/${id}`)
        .then(res => res.data),
    updateUser: (user, id) =>
      axios
        .patch(`/users/${id}`, { user })
        .then(res => res.data)
  }
}
