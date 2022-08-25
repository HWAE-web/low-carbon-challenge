import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
    background: white;
    height: 80px;
    margin-top: -70px;
    // display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
    }  
`;

export const NavBarContainer = styled.div`
    display: flex;
    height: 80px;
    z-index: 999;
    width: 100%;
    padding: 0 30px;
    max-width: 1800px;
`;

export const NavLogo = styled(LinkRouter)`
    color: #e02f36;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 0px;
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks1 = styled(LinkRouter)`
    color: #67D094;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 30px;
    height: 100%;
    cursor: pointer;
    font-family: "NotoSans Regular";
    font-size: 20px;
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
    padding: 0 30px;
    height: 100%;
    cursor: pointer;
    font-family: "NotoSans Regular";
    font-size: 20px;
    font-weight: ${({ active }) => (active === 2 ? 800 : 500)};

    &:hover {
      transition: all 0.2s ease-in-out;
      font-weight: 800;
    }
`;

export const NavBell = styled(LinkRouter)`
  margin: 5px 0 0 1230px;
  display: grid;
  max-width: 23px;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 5px 0 0 530px;
    display: flex;
  }
`

export const NavMyPage = styled(LinkRouter)`
  margin: 5px 0 0 30px;
  display: grid;
  max-width: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {

  }
`
