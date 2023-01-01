import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
        <Rocket>🚀</Rocket>
      <div className="focus-in-contract-bck">
        <h2>Boost Happiness, Productivity and Creativity</h2>
      </div>
    </Container>
  );
}

export default Home;
const Rocket = styled.div`
font-size: 5rem;
margin-top: 3rem;
animation: myAnim 13s ease 0s infinite alternate none;
@keyframes myAnim {
	0%,
	100% {
		transform: translateY(0);
	}

	10%,
	30%,
	50%,
	70% {
		transform: translateY(-8px);
	}

	20%,
	40%,
	60% {
		transform: translateY(8px);
	}

	80% {
		transform: translateY(6.4px);
	}

	90% {
		transform: translateY(-6.4px);
	}
}

 
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;


  h2{
    
    font-size: 3rem;
    color: white;
  }
  .focus-in-contract-bck {
    padding: 0.5rem;
    margin: 0.5rem;
    width: 90%;
    max-width: 50rem;
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
