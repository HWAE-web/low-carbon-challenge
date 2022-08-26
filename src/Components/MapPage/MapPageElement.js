import styled from "styled-components";

export const MapPageContainer = styled.div`
    background: #F6FCF9;
    display: flex;
    height: 100vh;
    width: 100vw;
`
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
    margin: 0 0 0 20px;
    font-family: "NotoSans Bold";
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 56px;
    letter-spacing: 0.2px;
 
    color: #424242;
`

export const Desc = styled.div`
    max-width: 564px;
    margin: -5px 0 0 25px;
    font-family: "NotoSans Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 56px;
    letter-spacing: 0.2px;
 
    color: #767676;
`

export const MapRow = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center; 
    margin: 0;

    grid-template-areas: "col1 col1 col1 col1 col1 col2 col2";

    @media screen and (max-width: 1024px) {
        
    }
    @media screen and (max-width: 768px) {
        
    }
`;
export const Column1 = styled.div`
  grid-area: col1;
  margin: 10px 0 0 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const Column2 = styled.div`
  grid-area: col2;
  @media screen and (max-width: 768px) {
    padding: 0;
 }
`;

export const Plus = styled.img`
    max-width: 30px;
`
export const Minus = styled.img`
    max-width: 30px;
`

export const MapPin = styled.img`
    max-width: 24px;
`

export const MapContentWrap = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 428px;
    height: 155px;
    left: 1336px;
    top: 287px;
    z-index: 30;

    background: #FFFFFF;
    border: 1px solid rgba(0, 16, 61, 0.12);
    border-radius: 6px;

    margin-left: -144px;

    text-align: left;
    overflow: hidden;
    font-size: 12px;
    font-family: "NotoSans Regular";
    line-height: 1.5;
`
export const Info = styled.div`
    width: 428px;
    height: 155px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    background: #fff;
    z-index: 30;

`

export const InfoTitle = styled.div`
    padding: 5px 0 0 10px;
    height: 30px;
    background: #eee;
    z-index: 30;

    border-bottom: 1px solid #ddd;
    font-size: 18px;
    font-weight: bold;
`

export const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888;
    width: 17px;
    height: 17px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
    &:hover{
        cursor: pointer;
    }
`

export const Body = styled.div`
    position: relative;
    overflow: hidden;
`

export const Addr = styled.div`
    position: relative;
    margin: 13px 0 0 90px;
    height: 75px;
`
 
export const Ellipsis = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
