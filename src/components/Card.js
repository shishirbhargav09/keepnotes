import React from 'react'
import styled from 'styled-components'
import {AiFillDelete} from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote } from '../Store/notesSlice';
function Card(props) {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.Auth.userid);
  
  const deleteid =(e) => {
   dispatch(deleteNote({id:props.id,
  userid:userId}),
  toast.success("Deleted Successfully"))
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
box-sizing: content-box;
overflow-y: scroll;
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