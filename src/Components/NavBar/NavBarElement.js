import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: white;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  height: 70px;
  z-index: 999;
  width: 100%;
  padding: 0 24px;
  max-width: 1530px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #e02f36;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-right: 39px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  /* margin: 0 25px; */
`;

export const NavLinks1 = styled(LinkRouter)`
  color: #67d094;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 35px;
  height: 100%;
  cursor: pointer;
  font-family: "NotoSans Regular";
  font-size: 17px;
  font-weight: ${({ active }) => (active === 1 ? 800 : 500)};

  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: 800;
  }
`;

export const NavLinks2 = styled(LinkRouter)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* margin: 0 30px; */
  height: 100%;
  cursor: pointer;
  font-family: "NotoSans Regular";
  font-size: 17px;
  font-weight: ${({ active }) => (active === 2 ? 800 : 500)};

  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: 800;
  }
`;

export const NavBell = styled(LinkRouter)`
  /* margin: 5px 0 0 1230px; */
  margin-left: 70%;
  margin-right: 2%;
  display: flex;
  max-width: 23px;
  align-items: center;

  @media screen and (max-width: 768px) {
    /* margin: 5px 0 0 530px; */
    display: flex;
  }
`;

export const NavMyPage = styled(LinkRouter)`
  /* margin: 5px 0 0 30px; */
  display: flex;
  max-width: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
