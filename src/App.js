import jwtDecode from "jwt-decode";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notes from "./Pages/Notes";
import Register from "./Pages/Register";
import { login } from "./Store/authSlice";

function App() {
  const isloggedin = useSelector((state) => state.Auth.isloggedin);

  const dispatch = useDispatch();
  if (!isloggedin) {
  const tokeninlocalstorage = localStorage.getItem("token");
    if (tokeninlocalstorage) {
      const userdetails = jwtDecode(tokeninlocalstorage);
      const useremail = userdetails.userEmail;
      const username = userdetails.userName;
      const userid = userdetails.userId;
      // console.log(tokeninlocalstorage);
      dispatch(login({ useremail, username, userid }));
    }
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
