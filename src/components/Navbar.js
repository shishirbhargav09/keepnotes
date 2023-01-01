import React from 'react'
import styled from 'styled-components'
import {BsVectorPen} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { logout } from '../Store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
function Navbar() {
  const navigate  = useNavigate()
  const isloggedin = useSelector(state =>  state.Auth.isloggedin)

  const dispatch = useDispatch()
  const logoutHandler = (e) => { 
    dispatch(logout())
    localStorage.removeItem('token')
    toast.success("Successfully Logout")
    navigate('/login')

    }
  return (
    <Container>
       <div className="left">
<BsVectorPen style={{
        fontSize:"2rem",
        }} onClick={() => { navigate('/') }}/>
        <h1 onClick={() => { navigate('/') }}>KeepNotes</h1>
       </div>
       <div className="right">
      {isloggedin && <Button onClick={logoutHandler}>LOGOUT</Button>} 
        {!isloggedin && <Button onClick={() => { navigate('/login') }}>LOGIN</Button>
        }
        {!isloggedin&& <Button onClick={() => { navigate('/register') }}>REGISTER</Button>}
       </div>
    </Container>
  )
}

export default Navbar

const Button = styled.button`
  font-size:15px;
  font-family:Arial;
  width:140px;
  height:50px;
  border-width:1px;
  color:#fff;
  border-color:#18ab29;
  font-weight:bold;
  border-radius: 28px;
  text-shadow: 1px 1px 0px #2f6627;
  background:#237876;
  &:hover {
    cursor: pointer;
    background-color: #10aab3;
  }
`;

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