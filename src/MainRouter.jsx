import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './ReactRouter/Home';
import About from './ReactRouter/About';
import Conteact from './ReactRouter/Conteact';
import NavBar from './ReactRouter/NavBar';




export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
<NavBar/>
<Routes>
  <Route path="/About" element={<About/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Conteact" element={<Conteact/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}


