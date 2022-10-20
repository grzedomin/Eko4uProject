import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
  },
  reducers: {
    setUsers: (state, { payload: users }) => {
      state.users = users;
    },

    fetchUsers: () => {},
  },
});

export const { fetchUsers, setUsers } = usersSlice.actions;

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
