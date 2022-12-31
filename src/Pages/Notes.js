import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

function Notes() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [addnote, setAddnote] = useState("");

  const userName = useSelector((state) => state.Auth.username);
  const userId = useSelector((state) => state.Auth.userid);
  const isloggedin = useSelector((state) => state.Auth.isloggedin);

  useEffect(() => {
    if (!isloggedin) {
      navigate("/login");
    }
  }, [isloggedin, navigate]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/getallnotes", {
        userid: userId,
      })
      .then(function (response) {
        const Data = response.data;
        setNotes([...Data]);
        console.log(Data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const addnoteHandler = (e) => {
    axios
      .post("http://localhost:3000/api/postnotes", {
        userid: userId,
        text: addnote,
      })
      .then(function (response) {
        toast.success("Note Added Successfully");
        console.log(response);
        setAddnote("");
      })
      .catch(function (error) {
        toast.error("Something Went Wrong");
        console.log(error);
      });
  };

  return (
    <Container>
      <h1>HII {userName}</h1>
      <label htmlFor="addNotes" />

      <textarea
        id="addNotes"
        onChange={(e) => {
          setAddnote(e.target.value);
        }}
      />
      <Button onClick={addnoteHandler} value={addnote}>
        ADD NOTE
      </Button>
      <div className="cards">
        {notes.map((note) => {
          return <Card key={note._id} text={note.text} />;
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
  width: 140px;
  height: 50px;
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
  height: 80vh;
  width: 90vw;
  box-sizing: content-box;

  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: aliceblue;
  }
  textarea {
    max-width: 40rem;
    width: 80%;
    height: 8rem;
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
    overflow: scroll;
  }
`;
