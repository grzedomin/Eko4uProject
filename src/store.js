import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { usersSaga } from "./Table/usersSaga";
import usersReducer from "./Table/usersSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(usersSaga);

export default store;
