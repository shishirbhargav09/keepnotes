
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { addNote, getNotes } from "../Store/notesSlice";

function Notes() {
  const navigate = useNavigate();
  const showloading = useSelector((state)=> state.Notes.loading);
  
  const [addnote, setAddnote] = useState("");

  const userName = useSelector((state) => state.Auth.username);
  const allnotes = useSelector((state) => state.Notes.notes);
  const userId = useSelector((state) => state.Auth.userid);
  const isloggedin = useSelector((state) => state.Auth.isloggedin);
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    if (!isloggedin) {
      navigate("/login");
    }
  }, [isloggedin, navigate]);

 

  const addnoteHandler = (e) => {
    if (addnote.length===0) {
      toast.error("Please Add Valid Text")
    }
    if (addnote.length>0) {
      dispatch(addNote({userid: userId, text:addnote}), toast.success("Note Added Successfully"))
    
    }
       
  
        setAddnote("");
    
  };
  
  useEffect(() => {
    dispatch(getNotes(userId))
   
  }, [dispatch,userId]);

  

  return (
    <Container>
      <h1>Hi {userName} !</h1>
      

      <input
        id="addNotes" placeholder="Write Something Here" value={addnote}
        onChange={(e) => {
          setAddnote(e.target.value);
        }}
      />
      <Button onClick={addnoteHandler} value={addnote}>
        ADD NOTE
      </Button>
      {showloading&&  <Loader/>}

    

      <div className="cards">
        {allnotes.map((note) => {
          return <Card key={note._id} id={note._id} text={note.text}   />;
        })}
      </div>
    </Container>
  );
}

export default Notes;

const Button = styled.button`
  font-size: 15px;
  font-family: Arial;
  margin-top: 1rem;
  width:140px;
  min-height: 50px;
  height:50px;
  border-width: 1px;
  color: #fff;
  border-color: #18ab29;
  font-weight: bold;
  border-radius: 28px;
  text-shadow: 1px 1px 0px #2f6627;
  background: #404192;
  &:hover {
    cursor: pointer;
    background-color: #10aab3;
  }
`;

const Container = styled.div`
  height: 90vh;
  width: 90vw;
  box-sizing: content-box;
  
  margin: 0.5rem;

  
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;

  h1 {
    color: aliceblue;
    
  }
  input {
    max-width: 40rem;
    width: 80%;
    height: 3rem;
    font-size: large;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
    -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
    -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  }
  .cards {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* overflow: scroll; */
    &::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: #8070d4;
  border: 6px solid rgba(0, 0, 0, 0.2);
}
  }
`;
