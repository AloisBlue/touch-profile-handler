import { GET_ALL_USERS, USERS_LOADING } from "../types";

const initial = {
  allUsers: null,
  loading: false
}

const users = (state = initial, action = {}) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default users;
