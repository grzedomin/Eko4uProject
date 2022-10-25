import { takeEvery, put, takeLatest, select, call } from "redux-saga/effects";
import {
  fetchUsers,
  setUsers,
  removeUser,
  editUser,
  selectUserJSON,
  addNewUser,
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
  yield axios({
    url: `https://fronttest.ekookna.pl/user/${id.payload}`,
    method: "delete",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-type": "application/json",
      "Access-Control-Allow-Methods": "DELETE",
    },
  });
  yield put(removeUser(id));
}

function* updateUser(user) {
  const id = user.payload.id;
  const userBody = yield select(selectUserJSON);
  try {
    yield axios({
      url: `https://fronttst.ekookna.pl/user/${id}`,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      method: "put",
      data: userBody,
    });
    yield call(fetchUsers);
  } catch (error) {
    yield console.log(error, "error update");
  }
}

function* addUser() {
  const newUserbody = yield select(selectUserJSON);
  try {
    yield axios.post(`https://fronttst.ekookna.pl/user/`, newUserbody);
  } catch (error) {
    console.log(error);
  }
}

export function* usersSaga() {
  yield takeEvery(fetchUsers.type, fetchUsersHandler);
  yield takeEvery(removeUser.type, deleteUserById);
  yield takeLatest(editUser.type, updateUser);
  yield takeEvery(addNewUser.type, addUser);
}
