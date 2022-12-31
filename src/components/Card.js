import React from 'react'
import styled from 'styled-components'

function Card(props) {
  return (
    <Container>
        <p>{props.text}</p>
    </Container>
  )
}

export default Card

const Container = styled.div`
width: 15rem;
height: 5rem;
padding: 1rem;
background-color: white;
margin: 0.5rem;
overflow-wrap: break-word;
border-radius: 10px;
  box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 6px 5px 18px 0px rgba(0, 0, 0, 0.73);
`