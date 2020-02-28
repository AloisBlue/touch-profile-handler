import { GET_ALL_USERS, USERS_LOADING } from "../types";
import api from "../api";

export const fetchAllUsers = data => ({
  type: GET_ALL_USERS,
  payload: data
});

export const usersLoading = () => ({
  type: USERS_LOADING
});

export const getUsers = () => (dispatch) => {
  dispatch(usersLoading());
  api.users
    .getUsers()
    .then(users => {
      dispatch(fetchAllUsers(users));
    })
    // .catch()
}
