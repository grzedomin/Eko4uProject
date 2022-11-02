import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearInput, selectModalState } from "../usersSlice";
import { AddNewUserModal } from "../../Modals/AddNewUserModal";
import { AddNewUserButton, Wrapper } from "./styled";

export const AddNewUser = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModalState);

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
      <div>{modal && <AddNewUserModal />}</div>
    </>
  );
};
