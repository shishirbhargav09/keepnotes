import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../Store/authSlice";

function Notes() {
  const navigate  = useNavigate()
  

    const useremail = useSelector(state =>  state.Auth.useremail)
    const isloggedin = useSelector(state =>  state.Auth.isloggedin)
    const tokeninlocalstorage = localStorage.getItem('token')
   useEffect(() => {
    if (!isloggedin) {
      navigate('/login')
    }
   
     
   }, [isloggedin,navigate])

   

   
  return (
    <Container>
      
        <h1>HII {useremail}</h1>
      <label htmlFor="addNotes" />

      <textarea id="addNotes" name="notes" rows="5" cols="33" />
    </Container>
  );
}

export default Notes;
const Container = styled.div`
  height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
