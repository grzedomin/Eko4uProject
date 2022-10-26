import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Table } from "./Table";
import { AddNewUserModal } from "./Table/AddNewUser/AddNewUserModal";
import { SearchBar } from "./SearchBar";
import { EditUserModal } from "./Table/EditUserModal";
import { Footer } from "./Footer";
import { Main } from "./Main";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
