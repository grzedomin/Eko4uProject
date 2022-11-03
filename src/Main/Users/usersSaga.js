import { takeEvery, put, select, delay } from "redux-saga/effects";
import {
  fetchUsers,
  setUsers,
  removeUser,
  editUser,
  selectUserJSON,
  addNewUser,
  setErrorState,
  setSuccessState,
} from "./usersSlice";
import axios from "axios";
import { APIUrl } from "./APIUrl";

function* fetchUsersHandler() {
  try {
    yield delay(3000);
    const response = yield axios.get(`${APIUrl}`);
    yield put(setUsers(response.data.users));
    yield put(setSuccessState());
  } catch (error) {
    yield put(setErrorState("error"));
    yield console.log(error, "Error while getting users list from database");
  }
}

function* deleteUserById(id) {
  try {
    yield fetch(`${APIUrl}user/${id.payload}?_method=DELETE`, {
      method: "POST",
    });
    yield put(fetchUsers());
  } catch (error) {
    yield console.log(error, "Error while deleting user!");
  }
}

function* updateUser(user) {
  const userBody = yield select(selectUserJSON);
  const id = user.payload.id;
  console.log(userBody, "userBody in updateUser saga");

  try {
    yield fetch(`${APIUrl}user/${id}/?_method=PUT`, {
      method: "POST",
      body: userBody,
    });
    yield put(fetchUsers());
  } catch (error) {
    yield console.log(error, "Error while updating user!");
  }
}

function* addUser() {
  const newUserBody = yield select(selectUserJSON);
  console.log(newUserBody, "newUserBody in addUser saga");
  try {
    yield fetch(`${APIUrl}user?_method=POST`, {
      method: "POST",
      body: newUserBody,
    });
    yield put(fetchUsers());
  } catch (error) {
    yield console.log(error, "Error while adding new user!");
  }
}

export function* usersSaga() {
  yield takeEvery(fetchUsers.type, fetchUsersHandler);
  yield takeEvery(removeUser.type, deleteUserById);
  yield takeEvery(editUser.type, updateUser);
  yield takeEvery(addNewUser.type, addUser);
}
