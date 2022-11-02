import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { usersSaga } from "./Main/Users/usersSaga";
import usersReducer from "./Main/Users/usersSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(usersSaga);

export default store;
