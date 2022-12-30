import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notes from "./Pages/Notes";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/login" element={<Login/>}  />
          <Route path="/register" element={<Register/>}  />
          <Route path="/notes" element={<Notes/>}  />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
