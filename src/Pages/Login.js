import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/authSlice";
import { BASE_URL } from "../utils/constant";
import Loader from "../components/Loader";

function Login() {
  const {isloggedin} = useSelector((state) => state.Auth.isloggedin);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (isloggedin) {
      navigate("/notes");
    }
  }, [isloggedin, navigate]);

  const loginHandler = (e) => {
    // e.preventDefault();
    setLoader(true);
    axios
      .post(`${BASE_URL}/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        // console.log(response);
        const token = response.data.token;
        const userdetails = jwtDecode(token);
        const useremail = userdetails.userEmail;
        const username = userdetails.userName;
        const userid = userdetails.userId;
        // console.log(userdetails);
        dispatch(login({ useremail, username, userid }));
        localStorage.setItem("token", token);
        // localStorage.setItem('userid', userid);

        setLoader(false);
        toast.success("Successfully Login");
        navigate("/notes");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Wrong Credintials");
      setLoader(false);

      });
  };
  return (
    <Container>
      <FormContainer>
        <h1>Login</h1>

        <BsPersonCircle
          style={{
            fontSize: "8rem",
          }}
        />
        <div className="email">
          <MdEmail
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <HiLockClosed
            style={{
              fontSize: "2rem",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button onClick={loginHandler}>LOGIN</Button>
        {
          loader && <Loader/>
        }
        

        <p>
          {" "}
          New User ? <Link to="/register">Register</Link>
        </p>
      </FormContainer>
    </Container>
  );
}

export default Login;
const Button = styled.button`
  margin: 1rem;
  width: 60%;
  height: 40px;
  color: white;
  border-radius: 5px;

  background-color: #124c50;
  &:hover {
    cursor: pointer;
    background-color: #10aab3;
  }
`;
const FormContainer = styled.div`
  background-color: white;
  width: 90%;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);

  .email {
    padding-top: 1rem;
    display: flex;
    width: 90%;
    justify-content: space-around;

    input {
      width: 80%;
      border-radius: 5px;
      padding-left: 1rem;
    }

  }
 
`;

const Container = styled.div`
  height: 90vh;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  

  display: flex;
  justify-content: center;
  align-items: center;
 
`;
