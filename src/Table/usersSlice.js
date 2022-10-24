import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {
      first_name: "",
      last_name: "",
      age: "",
      city: "",
      postal_code: "",
      street: "",
      id: "",
    },
  },
  reducers: {
    fetchUsers: () => {},
    addNewUser: () => {},
    setUsers: (state, { payload: users }) => {
      state.users = users;
    },
    removeUser: (state, { payload: id }) => {
      state.users = state.users.filter((user) => user.id !== id);
      return state;
    },
    setUserSlice: (state, action) => {
      state.user = action.payload;
      return state;
    },
    editUser: (state, { payload: user }) => {
      state.user = user;
      return state;
    },
  },
});

export const {
  fetchUsers,
  setUsers,
  removeUser,
  setUserSlice,
  editUser,
  addNewUser,
} = usersSlice.actions;

export const selectUsersState = (state) => state.users;

export const selectUsers = (state) => selectUsersState(state).users;

export const selectUser = (state) => state.users.user;

export const selectUserJSON = (state) => JSON.stringify(state.users.user);

export const selectUsersByQuery = (state, query) => {
  const users = selectUsers(state);

  if (!query || query.trim() === "") {
    return users;
  }
  return selectUsers(state).filter((user) =>
    user.last_name.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default usersSlice.reducer;
