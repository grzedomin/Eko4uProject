import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchUsers, setUsers } from "./usersSlice";
import axios from "axios";

function* fetchUsersHandler() {
  try {
    const response = yield axios.get("https://fronttest.ekookna.pl/");
    yield put(setUsers(response.data.users));
  } catch (error) {
    yield console.log(error, "errorix");
  }
}

export function* usersSaga() {
  yield takeLatest(fetchUsers.type, fetchUsersHandler);
}
