import { takeEvery, put, select, call } from "redux-saga/effects";
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

  console.log(userBody, "userBody in updateUser saga");
  try {
    yield fetch(
      `https://fronttst.ekookna.pl/user/${user.payload.id}?_method=PUT`,
      {
        method: "POST",
        body: userBody,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //(yield call(fetchUsers));
  } catch (error) {
    yield console.log(error, "Error while updating user!");
  }
}

function* addUser() {
  const newUserbody = yield select(selectUserJSON);
  console.log(newUserbody, "newUserBody in addUser saga");
  try {
    yield axios.post(`https://fronttst.ekookna.pl/user/`, newUserbody);
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
