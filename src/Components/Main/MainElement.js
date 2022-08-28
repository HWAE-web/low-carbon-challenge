import styled from "styled-components";
import { Desc } from "../MapPage/MapPageElement";
import { Link } from "react-scroll";

export const MainContainer = styled.div`
  background: white;
  display: flex;
  /* height: 100vh; */
  width: 100vw;
  position: relative;
  z-index: 1;
`;

export const MainBG = styled.div`
  position: absolute;
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
`;
export const ImageBG = styled.img`
  width: 100%;
  /* height: 100%; */
`;

export const MainOne = styled.div`
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* background-color: palegoldenrod; */
  z-index: 999;
  display: flex;
  margin-left: 50px;
`;
export const MainDiv = styled.div`
  /* background-color: papayawhip; */
  width: 50%;
  margin-left: 40px;
  margin-bottom: 60px;
`;
export const Small = styled.div`
  display: flex;
  width: 140px;
  height: 28px;
  border-radius: 40px;
  color: white;
  background-color: #53d991;
  justify-content: center;
  font-size: 18px;
  align-items: center;
  font-weight: 500;
  font-family: "SUIT Semibold";
  margin-left: 75px;
`;
export const Heading = styled.div`
  margin-top: 20px;
  font-size: 89px;
  font-family: "SUIT Extrabold";
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 20px;
  text-decoration-color: #6ef2ac;
`;
export const MainDescription = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  font-size: 18px;
  font-family: "SUIT Regular";
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  margin-left: 80px;
  margin-top: 30px;
`;
export const Challenge = styled.div`
  width: 150px;
  margin-top: 100px;
  margin-left: 80px;
`;
export const MainArt = styled.div`
  float: right;
`;

export const ArtPic = styled.img`
  /* background-color: aliceblue; */
  width: 88%;
  float: right;
`;

export const Button = styled(Link)`
  border-radius: 10px;
  /* box-shadow: 0px 3px 12px rgba(255, 45, 70, 0.25); */
  /* background: ${({ primary }) => (primary ? "#" : "green")}; */
  background: #53d991;
  white-space: nowrap;
  padding: 9px 20px;
  color: white;
  font-family: "SUIT Extrabold";
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(10px 10px 10px rgba(103, 208, 152, 0.2));
  /* transition: all 0.2s ease-in-out; */

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: ${({ primary }) => (primary ? "white" : "orange")}; */
    background: transparent;
    color: #53d991;
    border: 1px solid #53d991;
  }
`;
export const MainTwo = styled.div``;
