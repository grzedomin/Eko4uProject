import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Table } from "./Table";
import { Modal } from "./Table/AddNewUser/Modal";
import { SearchBar } from "./SearchBar";
import { EditUserModal } from "./Table/EditUserModal";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <main>
        <Routes>
          <Route path="/Eko4uProject" element={<Table />} />
          <Route path="/Eko4uProject/add-user" element={<Modal />} />
          <Route path="/Eko4uProject/edit-user/:id" element={<EditUserModal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
