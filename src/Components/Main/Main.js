import { GlobalFonts } from "../../fonts/font";
import { MainContainer } from "./MainElement";
import { useNavigate } from "react-router-dom";

import {
  MainOne,
  MainDiv,
  Small,
  Heading,
  Challenge,
  MainArt,
  ArtPic,
  MainTwo,
  MainBG,
  ImageBG,
  MainDescription,
  Button,
} from "./MainElement";
import mainart from "../../images/mainart.svg";
import mainbg from "../../images/main.png";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <GlobalFonts />
      <MainContainer>
        <MainBG>
          <ImageBG src={mainbg} />
        </MainBG>
        <MainOne>
          <MainDiv>
            <Small>저탄go지구</Small>
            <Heading>#저탄소라이프 챌린지</Heading>
            <MainDescription>
              저탄소배출 챌린지의 소개가 들아갈 영역입니다. ESG(Environment,
              Social, Governance) 중 ‘환경’에 주목하여 요즘 대두되고 있는 탄소
              배출량 증가로 인한 지구온난화 문제 해결에 기여하기 위해 개발을
              시작하게 되었습니다. 챌린지의 목적과 의의를 설명하고 챌린지
              참여방법을 소개하는 영역입니다.챌린지의 이름을 정하여 사용할
              예정입니다.
            </MainDescription>
            <Challenge>
              <Button onClick={() => navigate("/post")}>챌린지 참여하기</Button>
            </Challenge>
          </MainDiv>
          <MainArt>
            <ArtPic src={mainart} />
          </MainArt>
        </MainOne>
        <MainTwo></MainTwo>
      </MainContainer>
      <></>
    </>
  );
}

export default Main;
