import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Modal } from "./Modal";

import { AddNewUserButton, Wrapper } from "./styled";

export const AddNewUser = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <Wrapper>
        <Link to="/add-user">
          <AddNewUserButton
            onClick={() => {
              setIsOpen(true);
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
