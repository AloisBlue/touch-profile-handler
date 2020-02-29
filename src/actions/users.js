import { GET_ALL_USERS, USERS_LOADING, GETS_SINGLE_USER, UPDATE_USER } from "../types";
import api from "../api";

export const fetchAllUsers = data => ({
  type: GET_ALL_USERS,
  payload: data
});

export const usersLoading = () => ({
  type: USERS_LOADING
});

export const fetchSingleUser = data => ({
  type: GETS_SINGLE_USER,
  payload: data
});

export const patchUser = data => ({
  type: UPDATE_USER,
  payload: data
});

export const getUsers = () => (dispatch) => {
  dispatch(usersLoading());
  api.users
    .getUsers()
    .then(users => {
      dispatch(fetchAllUsers(users));
    })
}

export const getSingleUser = id => (dispatch) => {
  dispatch(usersLoading());
  api.users
    .getSingleUser(id)
    .then(user => {
      dispatch(fetchSingleUser(user));
    })
}

export const updateUser = (user, id, history) => (dispatch) => {
  api.users
    .updateUser(user, id)
    .then(updates => {
      dispatch(patchUser(updates));
      history.push("/view-users");
    })
}
