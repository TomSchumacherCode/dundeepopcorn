import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from "styled-components";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: coral;
`

//Arrows may be better fit for carousel component 
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  align-items: center:
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=> props.direction === "left" && "10pix"};
  right: ${props=> props.direction === "right" && "10pix"};
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon/>
      </Arrow>
      <Arrow direction="right">
        <ArrowForwardIosIcon/>
      </Arrow>

    </Container>
  )
};

export default Slider;