import { Route, Routes } from "react-router-dom";
import { Table } from "../Table";
import { AddNewUserModal } from "../Table/AddNewUser/AddNewUserModal";
import { EditUserModal } from "../Table/EditUserModal";

import { Wrapper } from "./styled";

export const Main = () => (
  <Wrapper>
    <Routes>
      <Route path="/Eko4uProject" element={<Table />} />
      <Route path="/Eko4uProject/add-user" element={<AddNewUserModal />} />
      <Route path="/Eko4uProject/edit-user/:id" element={<EditUserModal />} />
    </Routes>
  </Wrapper>
);
