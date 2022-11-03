import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearInput } from "../usersSlice";
import { AddNewUserButton, Wrapper } from "./styled";

export const AddNewUser = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Link to="/Eko4uProject/add-user">
          <AddNewUserButton
            onClick={() => {
              dispatch(clearInput());
            }}
          >
            Dodaj nowego pracownika
          </AddNewUserButton>
        </Link>
      </Wrapper>
    </>
  );
};
