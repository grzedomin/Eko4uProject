import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { clearInput } from "../usersSlice";
import { Modal } from "./Modal";

import { AddNewUserButton, Wrapper } from "./styled";

export const AddNewUser = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Link to="/add-user">
          <AddNewUserButton
            onClick={() => {
              setIsOpen(true);
              dispatch(clearInput());
            }}
          >
            Dodaj nowego uzytkownika
          </AddNewUserButton>
        </Link>
      </Wrapper>
      <div>{isOpen && <Modal setIsOpen={setIsOpen} />}</div>
    </>
  );
};
