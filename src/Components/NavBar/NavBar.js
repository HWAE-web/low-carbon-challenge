import React from "react";
import mainlogo from "../../images/logotest.svg";
import bell from "../../images/bell.svg";
import mypage from "../../images/mypage.svg";
import { GlobalFonts } from "../../fonts/font";
import { useState } from "react";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks1,
  NavLinks2,
  NavBell,
  NavMyPage,
} from "./NavBarElement";

function NavBar(){
  let [active, setActive] = useState(0);

    return(
        <>
        <Nav>
          <GlobalFonts />
          <NavBarContainer>
            <NavLogo to="/" onClick={() => {
                        setActive(0);
                      }}>
              <img src={mainlogo} alt="mainLogo"/>
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks1 to="/post"  
                      active={active}
                      onClick={() => {
                        setActive(1);
                      }}>#챌린지</NavLinks1>
              </NavItem>
              <NavItem>
                <NavLinks2 to="/map"
                      active={active}
                      onClick={() => {
                        setActive(2);
                      }}>지도</NavLinks2>
              </NavItem>
            </NavMenu>
              <NavBell to="/map"> {/* 나중에 /map 수정 필요 */}
                <img src={bell} alt="bell"/>
              </NavBell>
              <NavMyPage to="/mypage">
                <img src={mypage} alt="mypage"/>
              </NavMyPage>
          </NavBarContainer>
        </Nav>
        </>
    )
}

export default NavBar;