import React from 'react'
import styled from 'styled-components'
function Loader() {
    return (
        <Container><div class="custom-loader"></div></Container>
        )
    }
    
    export default Loader
   const Container = styled.div`
   
   .custom-loader {
  width: 100px;
  height: 100px;
  padding: 0.2rem;
  display: grid;
  animation: s4 4s infinite;
}
.custom-loader::before,
.custom-loader::after {    
  content:"";
  grid-area: 1/1;
  border:16px solid;
  border-radius: 50%;
  border-color:#534CAB #534CAB #0000 #0000;
  mix-blend-mode: darken;
  animation: s4 1s infinite linear;
}
.custom-loader::after {
  border-color:#0000 #0000 #E4E4ED #E4E4ED;
  animation-direction: reverse;
}

@keyframes s4{ 
  100%{transform: rotate(1turn)}
}
   `