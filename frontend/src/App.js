import "./App.css";
import Listagem from "./Components/Listagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UserCreate from "./Components/User/UserCreate";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path={"/"} element={<Listagem filter="default" />} />
            <Route path={"/cadastro"} element={<UserCreate></UserCreate>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
