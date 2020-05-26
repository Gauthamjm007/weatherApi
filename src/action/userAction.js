import fetchUsers from "./getUsersGoogleSheets";
import saveUsers from "./saveUsersGoogleSheets";

export const startgetUsers = () => {
  return (dispatch) => {
    fetchUsers().then((users) => {
      dispatch(setUsers(users));
    });
  };
};

export const setUsers = (users) => {
  return {
    type: "SET_USER",
    payload: users,
  };
};

export const pushUser = (user) => {
  return {
    type: "PUSH_USER",
    payload: user,
  };
};
export const startAddUsers = (name, email, password, redirect) => {
  return (dispatch) => {
    saveUsers(name, email, password).then((users) => {
      dispatch(pushUser({ name, email, password }));
      redirect();
    });
  };
};
