import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>

     
      <ItemsText>
        <h1>{props.title}</h1>
        <p> {props.description}</p>
      </ItemsText>
      </Fade>
      <Fade bottom>
      <Button>
          
  

   
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          {props.rightBtnText &&
           <RightButton>{props.rightBtnText}</RightButton>
          }
         
         
        </ButtonGroup>
       
      </Buttons>
      <DownArrow src="/assets/images/down-arrow.svg" />
      </Button>
      </Fade>
     
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/assets/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  scroll-snap-align: start ;
  z-index: 10;
  filter:   ${props => props.show ? "blur(8px)" : 'none'};
`;

const ItemsText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
 h1{
   font-size:36px ;
   padding-bottom: 10px;
   text-transform:bold ;
   font-weight: 500;
   color: black ;
 }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
 
  @media(max-width :768px){
      flex-direction: column
  }

`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
background: white;
color:black;
opacity: 0.65





`;
const DownArrow = styled.img`
 
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  cursor:pointer;
`;
const Buttons = styled.div``;

const Button = styled.div`
display: flex;
flex-direction: column;


`;
