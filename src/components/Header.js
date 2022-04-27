import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close"
import { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';








function Header() {
   const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Container>
        <Fade>
          <a href="#">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
          <Menu>
           
            <p>
              <a href="#">Model S</a>
            </p>
            <p>
              <a href="#">Model 3</a>
            </p>
            <p>
              <a href="#">Model X</a>
            </p>
            <p>
              <a href="#">Model Y</a>
            </p>
            <p>
              <a href="#">Solar Roof</a>
            </p>
            <p>
              <a href="#">Solar Panels</a>
            </p>
            
          </Menu>
          <RightMenu>
              <NonMenuBarLinks>
            <a href="#">Shop</a>
            <a href="#"> Account</a>
            </NonMenuBarLinks>
            <MenuBar onClick={()=>setMenuOpen(true)} href="#"> Menu</MenuBar>
          </RightMenu>

  
           
         
        </Fade>
        <MenuNav show={menuOpen}>
            <CloseWrapper>
            <CustomClose onClick={()=>setMenuOpen(false)}  />
            </CloseWrapper>
            
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Trade-in</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadster</a>
          </li>
          <li>
            <a href="">Semi</a>
          </li>
          <li>
            <a href="">Charging</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Commerical Energy</a>
          </li>
          <li>
            <a href="">Utilities</a>
          </li>
          <li>
            <a href="">Supports</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">
            <MoreDiv>More <MoreArrowDiv> <MoreArrow/>
            </MoreArrowDiv>
            </MoreDiv> </a>
          </li>
          <li>
            <a href="">
                <UnitedStatesDiv>
                <div>
                <LanguageLogo/>


                </div>
                <div>
                <h4>United States</h4>
                <p>English</p>
                
                
                
                </div>
                </UnitedStatesDiv>
                </a>
                
          </li>
        </MenuNav>
       
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
width: 100vw;
margin-left:10px ;
  position: fixed;
  /* top: 0;
  left: 0;
  right: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 500;
    color: #171a20 ;
    transition: color .33s ease,background-color .33s ease;
    backdrop-filter: unset;
    background-color: transparent;





    font-size: 15px;
    padding: 0 15px;
    flex-wrap: nowrap;
    a:hover {
    transition: color 0.75s;
    background-color: transparent;
  }
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;

    font-size: 15px;
    padding: 0 10px;
    flex-wrap: nowrap;
   
  }
  
  
`;
const NonMenuBarLinks = styled.div`

display:flex ;
justify-content: space-between ;
@media (max-width: 760px) {
    display: none;
  }
/* padding-right:7px ; */
`

const MenuBar = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;

    font-size: 15px;
    padding: 0;
    flex-wrap: nowrap;
  }
  a:hover {
    transition: color 0.75s;
    color: #666;
  }
`;
const MenuNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style:none ;
  padding: 20px ;
  display:flex ;
  transition:transform 0.4s ;
flex-direction:column ;

text-align: start ;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;

li{
    padding: 15px 0;
    

    a{
        font-weight: 600 ;
    }
}

`;
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex ;
justify-content: flex-end ;
`
const LanguageLogo = styled(LanguageIcon)`
padding-right:7px ;
`
const UnitedStatesDiv = styled.div`
display: flex;
padding: 5px ;
h4{
    font-size: 15px;
}
p{
    padding-top: 4px ;
    font-size: 11px;
}
/* justify-content:space-evenly ; */
`
const MoreArrow = styled(ArrowForwardIosIcon)`
/* padding-right:7px ; */
padding-left:5px ;
`
const MoreArrowDiv = styled.div`

display:flex ;
justify-content:flex-end ;

/* padding-right:7px ; */
`
const MoreDiv = styled.div`

display:flex ;
justify-content: space-between ;
/* padding-right:7px ; */
`
