import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 60px; 
  background-color: green;
`;
const Wrapper = styled.div`
  padding: 10px 20 px;
  display: flex;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  margin-top: 10px;
  `;
const Center = styled.div`
  flex: 1;
  margin-top: 10px;
`;
const Right = styled.div`  
  flex: 1;
  margin-top: 10px;
`;



const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> Home </Left>
        <Center> Products </Center>
        <Right> About </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar