import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { HiLockClosed} from "react-icons/hi";
import { MdEmail} from "react-icons/md";

function Login() {
  return (
    <Container>
      <FormContainer>
      <h1>Login</h1>

      <BsPersonCircle style={{
        fontSize:"8rem"
      }}/>
      <div className="email">
<MdEmail style={{
        fontSize:"2rem"
      }}/>
<input type="email" placeholder="Email"/>
      </div>
      <div className="email">
<HiLockClosed style={{
        fontSize:"2rem"
      }}/>
<input type="password" placeholder="Password"/>
      </div>
      <Button>
        LOGIN
      </Button>
      
      <p> New User ? <a href="http://">Register</a></p>

      </FormContainer>
    </Container>
  );
}

export default Login;
const Button = styled.button`
margin: 1rem;
width: 60%;
color: white;
border-radius: 5px;

background-color: #124C50;
&:hover{
    cursor: pointer;
    background-color: #10AAB3;
}
`
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
  box-shadow: 6px 5px 18px 0px rgba(0,0,0,0.73);
-webkit-box-shadow: 6px 5px 18px 0px rgba(0,0,0,0.73);
-moz-box-shadow: 6px 5px 18px 0px rgba(0,0,0,0.73);

    .email{
        padding-top: 1rem;
        display: flex;
        width: 90%;
        justify-content: space-around;

        input{
            width: 80%;
            border-radius: 5px;
            padding-left: 1rem;

        }

    }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
