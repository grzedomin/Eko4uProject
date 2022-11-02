import { takeEvery, put, select, delay } from "redux-saga/effects";
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
    yield delay(3000);
    const response = yield axios.get("https://fronttest.ekookna.pl/");
    yield put(setUsers(response.data.users));
  } catch (error) {
    yield console.log(error, "Error while getting users list from database");
  }
}

function* deleteUserById(id) {
  try {
    yield fetch(
      `https://fronttest.ekookna.pl/user/${id.payload}?_method=DELETE`,
      {
        method: "POST",
      }
    );
  } catch (error) {
    yield console.log(error, "Error while deleting user!");
  }
}

function* updateUser(user) {
  const userBody = yield select(selectUserJSON);
  const id = user.payload.id;
  console.log(userBody, "userBody in updateUser saga");

  try {
    yield fetch(`https://fronttest.ekookna.pl/user/${id}?_method=PUT`, {
      method: "POST",
      body: userBody,
    });
  } catch (error) {
    yield console.log(error, "Error while updating user!");
  }
}

function* addUser() {
  const newUserBody = yield select(selectUserJSON);
  console.log(newUserBody, "newUserBody in addUser saga");
  try {
    yield fetch(`https://fronttest.ekookna.pl/user?_method=PUT`, {
      method: "POST",
      body: newUserBody,
    });
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
