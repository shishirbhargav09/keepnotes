import React from 'react'
import styled from 'styled-components'
import {AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import axios from 'axios';
function Card(props) {
  const deleteid =(e) => {
    axios
      .post("http://localhost:3000/api/delete", {
        id: props.id
      })
      .then(function (response) {
        toast.success("Note Deleted Successfully");
        console.log(response);
        
      })
      .catch(function (error) {
        toast.error("Something Went Wrong");
        console.log(error);
      });
  }

  return (
    <Container>
        <p>{props.text}</p>
        <AiFillDelete style={{
          fontSize:"25px",
          color:"crimson"
          
        }}  onClick={deleteid} />
    </Container>
  )
}

export default Card

const Container = styled.div`
width: 15rem;
position: relative;
height: 5rem;
padding: 1rem;
background-color: white;
margin: 0.5rem;
overflow-wrap: break-word;
border-radius: 10px;
  box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);

  svg{
    &:hover{
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`