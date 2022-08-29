import styled from "styled-components";

export const MapPageContainer = styled.div`
  background: #f6fcf9;
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const MapPageWrapper = styled.div`
  display: grid;
  z-index: 3;
  height: 90%;
  width: 100%;
  margin: 100px 80px 0 80px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const MapCol = styled.div`
  display: grid;
  grid-template-rows: 100px 110px 110px 110px 110px 110px 110px 110px;
  grid-template-areas: "row1" "row2" "row2" "row2" "row2" "row2" "row2" "row2";

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const Row1 = styled.div`
  grid-area: row1;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const Row2 = styled.div`
  grid-area: row2;
`;

export const TitleCol = styled.div`
  display: grid;
  grid-template-rows: 60px 50px;
  grid-template-areas: "r1" "r2";

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const R1 = styled.div`
  grid-area: r1;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const R2 = styled.div`
  grid-area: r2;
`;

export const Title = styled.div`
  max-width: 500px;
  margin: 10px 0 0 50px;
  font-family: "NotoSans Bold";
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: 0.2px;

  color: #424242;
`;

export const Desc = styled.div`
  max-width: 564px;
  font-family: "NotoSans Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 56px;
  letter-spacing: 0.2px;

  color: #767676;
`;

export const MapWrap = styled.div`
  margin: 10px 50px 20px 50px;
`

export const Plus = styled.img`
  max-width: 30px;
`;
export const Minus = styled.img`
  max-width: 30px;
`;

export const MapPin = styled.img`
  max-width: 24px;
`;

export const TitleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin: 0;

  grid-template-areas: "c1 c1 c1 c1 c1 c1 c2";

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
  }
`;
export const C1 = styled.div`
  grid-area: c1;
  margin: 0 0 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const C2 = styled.div`
  grid-area: c2;
  margin: 0 0 0 19px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;


export const SelectBox = styled.div`
  position: relative;
  width: 167px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 16, 61, 0.12);
  box-sizing: border-box;
  z-index: 999;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: 4px;
    right: 10px;
    color: #67d094;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  font-family: "NotoSans Regular";

  font-size: 15px;
  margin-left: 10px;
  text-align: center;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 30px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 114px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 6px;
  border: ${(props) =>
    props.show ? "1px solid rgba(0, 16, 61, 0.12)" : "none"};

  background-color: #ffffff;
`;

export const Option = styled.li`
  font-family: "NotoSans Regular";

  font-size: 14px;
  padding: 8px 4px;

  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #fafafa;
  }
`;

export const OptionImg = styled.img`
  position: relative;
  padding: 0px 15px 0 10px;
  top: 3px;
  left: 2px;
  margin: 0;
`;