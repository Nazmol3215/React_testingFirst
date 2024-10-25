import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Conteact from "./ReactRouter/Conteact";
import NavBar from "./ReactRouter/NavBar";
import MainPage from "./MainPages/MainPage";
import OrderButton from "./ReactRouter/OrderButton";

export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Conteact" element={<Conteact />} />
          <Route path="/OrderButton" element={<OrderButton />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
