import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
    modal: false,
  },
  reducers: {
    fetchUsers: () => {},
    addNewUser: (state, { payload: user }) => {
      state.users.push(user);
      return state;
    },
    setUsers: (state, { payload: users }) => {
      state.users = users;
    },
    removeUser: (state, { payload: id }) => {
      state.users = state.users.filter((user) => user.id !== id);
      return state;
    },
    setUserSlice: (state, action) => {
      state.user = action.payload;
    },
    editUser: (state, { payload: user }) => {
      state.user = user;
    },
    clearInput: (state) => {
      state.user = [];
    },
    showModal: (state) => {
      state.modal = false;
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
  clearInput,
  showModal,
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
