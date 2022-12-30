import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <div className="focus-in-contract-bck">
        <h2>🚀Boost Happiness Productivity and Creativity</h2>
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  h2{
    font-size: 100px;
    color: white;
  }
  .focus-in-contract-bck {
    padding: 2rem;
    -webkit-animation: focus-in-contract-bck 1s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }
  @-webkit-keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(300px);
            transform: translateZ(300px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(12px);
            transform: translateZ(12px);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

`;
