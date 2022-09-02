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
`;

export const MapCol = styled.div`
  display: grid;
  grid-template-rows: 100px 110px 110px 110px 110px 110px 110px 110px;
  grid-template-areas: "row1" "row2" "row2" "row2" "row2" "row2" "row2" "row2";
`;

export const Row1 = styled.div`
  grid-area: row1;
`;

export const Row2 = styled.div`
  grid-area: row2;
`;

export const TitleCol = styled.div`
  display: grid;
  grid-template-rows: 60px 50px;
  grid-template-areas: "r1" "r2";
`;

export const R1 = styled.div`
  grid-area: r1;
`;

export const R2 = styled.div`
  grid-area: r2;
`;

export const Title = styled.div`
  max-width: 500px;
  margin: 10px 0 0 18px;
  font-family: "SUIT Extrabold";
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 56px;
  letter-spacing: 0.2px;

  color: #424242;
`;

export const Desc = styled.div`
  max-width: 564px;
  margin: -20px 0 10 25px;
  font-family: "SUIT Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 56px;
  letter-spacing: 0.2px;

  color: #767676;
`;

export const MapRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  margin: 0;

  grid-template-areas: "col1 col1 col1 col1 col1 col2 col2";
`;
export const Column1 = styled.div`
  grid-area: col1;
  margin: 10px 0 0 20px;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

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

  grid-template-areas: "c1 c1 c1 c1 c2 c3 c3";
`;
export const C1 = styled.div`
  grid-area: c1;
  margin: 0 0 0 20px;
`;

export const C2 = styled.div`
  grid-area: c2;
  margin: 0 0 0 70px;
`;
export const C3 = styled.div`
  grid-area: c3;
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
  font-family: "SUIT Regular";

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
  font-family: "SUIT Regular";

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

export const MapSearchArea = styled.div`
  position: relative;
  width: 300px;
  max-height: 40px;
`;
export const MapSearchInput = styled.input`
  box-sizing: border-box;

  width: 100%;

  background: #ffffff;

  border: 1px solid rgba(0, 16, 61, 0.12);
  border-radius: 6px;

  font-family: "SUIT Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  padding: 10px 30px 10px 50px;
  margin: 0 0 0 20px;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 11px;
  left: 41px;
`;

export const DetailInfo = styled.div`
  width: 400px;
  font-family: "SUIT Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  padding: 10px 0px 10px 30px;
  color: #767676;
`;
export const ClearBtn = styled.button`
  position: absolute;
  top: 2px;
  left: 335px;
  width: 80px;
  height: 35px;

  border-radius: 10px;

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

  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: ${({ primary }) => (primary ? "white" : "orange")}; */
    background: transparent;
    color: #53d991;
    border: 1px solid #53d991;
  }
`;

export const DetailWrap = styled.div`
  position: absolute;
  top: 220px;
`;

export const DetailArea = styled.div`
  width: 400px;
  max-height: 250px;
  background: #ffffff;
  margin: 0 0 10px 20px;
  border: 1px solid rgba(0, 16, 61, 0.12);
  border-radius: 6px;
`;
export const ShopName = styled.div`
  max-width: 500px;
  margin: 20px 0 0 30px;
  font-family: "SUIT Extrabold";
  display: inline-block;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.2px;

  color: #424242;
`;
export const ShopType = styled.div`
  max-width: 500px;
  margin: 0 0 0 20px;
  font-family: "SUIT Semibold";
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.2px;

  color: #d3d3d3;
`;
export const ShopAddr = styled.div`
  max-width: 500px;
  margin: 0 0 10px 30px;
  font-family: "SUIT Regular";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 0.2px;

  color: #424242;
`;

export const PostLink = styled.div`
  color: #424242;
  width: 138px;
  margin: 0 10px 20px 30px;
  cursor: pointer;
  display: inline-block;
  font-family: "SUIT Regular";
  font-size: 13px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #53d991;
  }
`;

export const Dot = styled.img`
  display: inline-block;
  width: 6.25px;
`;

export const PostLink2 = styled.div`
  display: inline-block;
  color: #424242;
  width: 50px;
  margin: 0 0 20px 13px;
  cursor: pointer;
  font-family: "SUIT Regular";
  font-size: 13px;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #53d991;
  }
`;
