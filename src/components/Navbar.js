import React from 'react'
import styled from 'styled-components'
import {BsVectorPen} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <Container>
       <div className="left">
<BsVectorPen style={{
        fontSize:"2rem",
        }}/>
        <h1>KeepNotes</h1>
       </div>
       <div className="right">

        <Button><Link to="/login">LOGIN</Link></Button>
        <Button><Link to="/register">REGISTER</Link></Button>
       </div>
    </Container>
  )
}

export default Navbar
const Button = styled.button`
    font-size: large;
    
    border-radius: 8px;
    
`

const Container = styled.div`
height: 10vh;
width: 100%;
color: aliceblue;
display: flex;
justify-content: space-between;
/* background-color: cadetblue; */
display: flex;
 .left{
    padding-left: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
   gap: 1rem;
 }
 .right{
    padding-right: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
   gap: 1rem;
 }
 @media only screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
    .right{
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .left{
        padding-left: 2rem;
        padding-right: 2rem;
    }
 }
 
`