import { useState } from "react";
import { Modal } from "./Modal";

import { AddNewUserButton, Wrapper } from "./styled";
export const AddNewUser = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Wrapper>
        <AddNewUserButton onClick={() => setIsOpen(true)}>
          Dodaj nowego uzytkownika
        </AddNewUserButton>
      </Wrapper>
      <div>{isOpen && <Modal setIsOpen={setIsOpen} />}</div>
    </>
  );
};
