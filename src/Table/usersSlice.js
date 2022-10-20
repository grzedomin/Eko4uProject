import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, { payload: users }) => {
      state.users = users;
    },

    fetchUsers: () => {},

    removeUser: (state, { payload: id }) => {
      state.users = state.users.filter((user) => user.id !== id);
      console.log("user deleted");
      return state;
    },
  },
});

export const { fetchUsers, setUsers, removeUser } = usersSlice.actions;

export const selectUsersState = (state) => state.users;

export const selectUsers = (state) => selectUsersState(state).users;

// export const selectTasksByQuery = (state, query) => {
//     const tasks = selectTasks(state);

//     if (!query || query.trim() === "") {
//         return tasks;
//     }
//     return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
// }

export default usersSlice.reducer;
