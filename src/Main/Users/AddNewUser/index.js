import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearInput } from "../usersSlice";
import { AddNewUserModal } from "../../Modals/AddNewUserModal";

import { AddNewUserButton, Wrapper } from "./styled";

export const AddNewUser = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Link to="/Eko4uProject/add-user">
          <AddNewUserButton
            onClick={() => {
              setIsOpen(true);
              dispatch(clearInput());
            }}
          >
            Dodaj nowego pracownika
          </AddNewUserButton>
        </Link>
      </Wrapper>
      <div>{isOpen && <AddNewUserModal setIsOpen={setIsOpen} />}</div>
    </>
  );
};
