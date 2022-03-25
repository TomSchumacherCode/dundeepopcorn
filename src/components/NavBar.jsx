import React from "react";
import { Badge } from '@material-ui/core';
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"


const Container = styled.div`
  height: 60px; 
  background-color: rgb(176, 176, 176);
  color: rgb(7, 33, 14);
`;
const Wrapper = styled.div`
  padding: 10px 20 px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Left = styled.div`
  flex: 1;
  margin-top: 10px;
  display: flex;
  align-items: center;
  `;
const Center = styled.div`
  flex: 1;
  margin-top: 10px;
`;
const Right = styled.div`  
  flex: 1;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end
`;

const Logo = styled.h3`
  font-weight: bold;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
`


const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> 
          <MenuItem>Home</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Our Story</MenuItem>
        </Left>
        <Center> <Logo>Dundee Popcorn</Logo> </Center>
        <Right> 
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar