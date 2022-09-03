import styled from "styled-components";

export const MyPageContainer = styled.div`
  background: white;
  display: flex;
  position: relative;
  width: 100vw;
  z-index: 1;
`;

export const MyPageBG = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const ImgBG = styled.img`
  width: 100%;
`;

export const MyPageArea = styled.div`
  position: absolute;
  width: 1350px;
  left: 223px;
  top: 174px;
`;

export const MyPageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  grid-template-areas: "col1 col2 col2 col2";
`;

export const Column1 = styled.div`
  grid-area: col1;
  margin: 94px 0 0 98px;
`;

export const Column2 = styled.div`
  grid-area: col2;
  margin: 94px 0 0 98px;
`;

export const Profile = styled.img`
  width: 120px;
  margin-left: 50px;
`;

export const NameArea = styled.div`
  max-width: 100px;
  margin: 20px 0 0 67px;
  font-family: "SUIT Semibold";
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.2px;

  color: #424242;
`;

export const Desc = styled.div`
  max-width: 245px;
  margin: 10px 0 0 0px;
  font-family: "SUIT Semibold";
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.2px;

  color: #767676;   
`

export const RecentArea = styled.div`
  max-width: 180px;
  margin: 100px 0 10px 37px;
  font-family: "SUIT Semibold";
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2px;

  color: #424242;   
`

export const PlaceName = styled.div`
  color: #7D7D7D;
  width: 138px;
  margin: 20px 0px 0px 37px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  font-family: "SUIT Semibold";
  font-size: 16px;
  text-decoration: none;


  &:hover {
    transition: all 0.2s ease-in-out;
    color: #53d991;
  }
`