import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 60px; 
  background-color: rgb(46,110,4);
  color: yellow;
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

const Logo = styled.h3`
  font-weight: bold;
`



const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> Home </Left>
        <Center> <Logo>Dundee Popcorn</Logo> </Center>
        <Right> Products </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar