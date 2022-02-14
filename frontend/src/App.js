import "./App.css";
import Listagem from "./Components/Listagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserCreate from "./Components/User/UserCreate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Listagem filter="default" />} />
        <Route path={"/cadastro"} element={<UserCreate></UserCreate>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
