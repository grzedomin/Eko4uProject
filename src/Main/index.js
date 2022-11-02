import { Route, Routes } from "react-router-dom";
import { Users } from "./Users";
import { AddNewUserModal } from "./Modals/AddNewUserModal";
import { EditUserModal } from "./Modals/EditUserModal";

import { Wrapper } from "./styled";

export const Main = () => (
  <Wrapper>
    <Routes>
      <Route path="/Eko4uProject" element={<Users />} />
      <Route path="/Eko4uProject/add-user" element={<AddNewUserModal />} />
      <Route path="/Eko4uProject/edit-user/:id" element={<EditUserModal />} />
    </Routes>
  </Wrapper>
);
