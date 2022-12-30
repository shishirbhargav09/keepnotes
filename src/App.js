import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/login" element={<Login/>}  />
          <Route path="/register" element={<Register/>} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
