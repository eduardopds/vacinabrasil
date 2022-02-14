import "./App.css";
import Listagem from "./Components/Listagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Listagem filter="default" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
