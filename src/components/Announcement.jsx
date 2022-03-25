import React from "react";
import styled from "styled-components"

const Container = styled.div`
  height = 30px; 
  background-color: teal;
  color: white;
  text-align: center;
`

const Announcement = () => {
  return (
    <Container>
      Check out our tent at the Aksarben Farmer's Market starting May 8th!
    </Container>
  )
};

export default Announcement;