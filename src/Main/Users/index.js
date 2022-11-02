import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectPageState } from "./usersSlice";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Success } from "./Success";

export const Users = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPageState);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers]);

  switch (status) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
    case "success":
      return <Success />;
    default:
      return null;
  }
};
