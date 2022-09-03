import { GlobalFonts } from "../../fonts/font";
import {
  Column1,
  Column2,
  Desc,
  ImgBG,
  MyPageArea,
  MyPageBG,
  MyPageContainer,
  MyPageRow,
  NameArea,
  PlaceName,
  Profile,
  RecentArea,
} from "./MyPageElement";
import mypageBG from "../../images/mypageBG.svg";
import profile from "../../images/profile.svg";
import { useSelector, useDispatch } from "react-redux";

function MyPage() {
    // redux state
    let state = useSelector((state) => {
      return state;
    });
  return (
    <>
      <GlobalFonts />
      <MyPageContainer>
        <MyPageBG>
          <ImgBG src={mypageBG} alt="BG" />
        </MyPageBG>
        <MyPageArea>
          <MyPageRow>
            <Column1>
              <Profile src={profile} alt="profile"/>
              <NameArea>이탄소 님 {'>'}</NameArea>
              <Desc>지금까지 6881 마일리지가 쌓였어요!</Desc>
              <RecentArea>나의 최근 관심 장소</RecentArea>
              {state.detail.map((a, i) => (
                      <div key={i}>
                        <PlaceName as="a" href={state.detail[i].href}>{state.detail[i].name}</PlaceName>
                      </div>
                    ))}
              
            </Column1>
            <Column2>
           
              
            </Column2>
          </MyPageRow>
        </MyPageArea>
      </MyPageContainer>
    </>
  );
}

export default MyPage;
