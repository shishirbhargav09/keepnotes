import React from "react";
import styled from "styled-components";

function Notes() {
  return (
    <Container>
      <label htmlFor="addNotes" />

      <textarea id="addNotes" name="notes" rows="5" cols="33" />
    </Container>
  );
}

export default Notes;
const Container = styled.div`
  height: 90vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
