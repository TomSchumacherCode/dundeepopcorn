import React from "react";
import { Badge } from '@material-ui/core';
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import dplogo from "../assets/images/logo-horizontal-black.jpeg";



const Container = styled.div`
  min-height: 60px; 
  // background-color: rgb(176, 176, 176);
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
  justify-content: flex-end;
  padding-right: 20px;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
`
const BadgeWrapper = styled.div`
  align-items: center;
`
const DPLogo = styled.img`
  width: 30vw;
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
        <Center> <DPLogo src={dplogo}></DPLogo> </Center>
        <Right> 
          <BadgeWrapper>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </BadgeWrapper>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar