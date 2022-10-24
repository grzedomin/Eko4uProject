import { takeEvery, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchUsers,
  setUsers,
  removeUser,
  editUser,
  selectUser,
} from "./usersSlice";
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
  yield axios.delete(
    `https://fronttest.ekookna.pl/user/${id.payload}`,
    id.payload
  );
  yield put(removeUser(id));
}

function* updateUser(id) {
  const userBody = yield select(selectUser);

  try {
    const response = yield axios.put(
      `https://fronttst.ekookna.pl/user/${id}`,
      userBody
    );
    yield console.log(response, "xx");
    yield put(setUsers(response.data.users));
  } catch (error) {
    yield console.log(error, "error update");
  }
}

// function* addUser(user) {
//   yield axios.post("fronttest.ekookna.pl/user", user);

// }

export function* usersSaga() {
  yield takeEvery(fetchUsers.type, fetchUsersHandler);
  yield takeEvery(removeUser.type, deleteUserById);
  yield takeLatest(editUser.type, updateUser);
}
