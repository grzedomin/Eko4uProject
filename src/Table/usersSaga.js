import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { fetchUsers, setUsers, removeUser } from "./usersSlice";
import axios from "axios";

function* fetchUsersHandler() {
  try {
    const response = yield axios.get("https://fronttest.ekookna.pl/");
    yield put(setUsers(response.data.users));
  } catch (error) {
    yield console.log(error, "errorix");
  }
}

function* deleteUserById(id) {
  yield axios.delete(`https://fronttest.ekookna.pl/user/${id}`);
  yield put(removeUser(id));
}
export function* usersSaga() {
  yield takeEvery(fetchUsers.type, fetchUsersHandler);
  yield takeEvery(removeUser.type, deleteUserById);
}
