import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Table } from "./Table";
import { Modal } from "./Table/AddNewUser/Modal";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <main>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/add-user" element={<Modal />} />
          <Route path="/edit-user/:user" element={<Modal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
