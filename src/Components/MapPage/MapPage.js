/* global kakao */
import { Desc, MapCol, MapPageContainer, MapPageWrapper,Plus, Minus, R1, R2, Row1, Row2, Title, TitleCol, MapPin, TitleRow, C1, C2, C3, SelectBox, Label, SelectOptions, Option, OptionImg, MapWrap, } from "./MapPageElement";
import { useState, useRef, useMemo } from "react";
import { GlobalFonts } from "../../fonts/font";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import "./MapPage.css";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import mappin from "../../images/mappin.svg";
import { cafe_data } from "./data";
import { restaurant_data } from "./data";
import { shop_data } from "./data";

import cafe from "../../images/cafe.svg";
import restaurant from "../../images/restaurant.svg";
import shop from "../../images/shop.svg";

function MapPage(){
    // data.js 불러오기
    let [cafeData] = useState(cafe_data); 
    let [restaurantData] = useState(restaurant_data); 
    let [shopData] = useState(shop_data); 

    // 마커 보이고, 안 보이게 설정하는 state
    const [isCafeOpen, setIsCafeOpen] = useState(false);
    const [isRestOpen, setIsRestOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    
    // select 관련 state
    const [currentValue, setCurrentValue] = useState("음료 / 디저트");
    const [showOptions, setShowOptions] = useState(false);
    

    return(
        <>
        <MapPageContainer>
        <GlobalFonts/>
        <MapPageWrapper>
            <MapCol>
              <Row1>
                <TitleCol>
                    <R1>
                        <Title>우리동네 저탄소 지도</Title>
                    </R1>
                    <R2>
                      <TitleRow>
                        <C1>
                        <Desc>집 근처 가까운 곳에서 저탄소 챌린지를 실천할 수 있는 장소들을 찾아보세요!</Desc>
                        </C1>
                        <C2>
                          <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                              <Label>{currentValue}</Label>
                              <SelectOptions show={showOptions}>
                              <Option onClick={() => (setCurrentValue("음료 / 디저트"), setIsCafeOpen(true), setIsRestOpen(false), setIsShopOpen(false))}>
                                  <OptionImg src={cafe} alt="cafe"/>
                                  음료 / 디저트</Option>
                              <Option onClick={() => (setCurrentValue("식당 / 레스토랑"), setIsCafeOpen(false), setIsRestOpen(true), setIsShopOpen(false))}>
                                  <OptionImg src={restaurant} alt="restaurant"/>
                                  식당 / 레스토랑</Option>
                              <Option onClick={() => (setCurrentValue("소품샵 / 생활용품"), setIsCafeOpen(false), setIsRestOpen(false), setIsShopOpen(true))}>
                                  <OptionImg src={shop} alt="shop"/>소품샵 / 생활용품</Option>
                              </SelectOptions>
                          </SelectBox>
                        </C2>
                      </TitleRow>
                    </R2>
                </TitleCol>
              </Row1>
              <Row2>
                <MapWrap>
                  <MapAPI cafeData={cafeData} restaurantData={restaurantData} shopData={shopData} isCafeOpen={isCafeOpen} isRestOpen={isRestOpen} isShopOpen={isShopOpen}/>
                </MapWrap>
              </Row2>
            </MapCol>
        </MapPageWrapper>
        </MapPageContainer>
        </>
    )
}

export default MapPage;

export function MapAPI(props){
    const mapRef = useRef();


    // 지도 확대, 축소
    const zoomIn = () => {
        const map = mapRef.current
        map.setLevel(map.getLevel() - 1)
    }

    const zoomOut = () => {
        const map = mapRef.current
        map.setLevel(map.getLevel() + 1)
    }

    // 좌표들이 모두 보이게 지도의 중심좌표와 레벨을 재설정 
    const [points, setPoints] = useState([ 
      {lat: 37.5618588, lng: 126.9468339},
    ])

    const bounds = useMemo(() => {
      const bounds = new kakao.maps.LatLngBounds();

      points.forEach(point => {
        bounds.extend(new kakao.maps.LatLng(point.lat, point.lng))
      });
      return bounds;
    }, [points])


  return (
    <>
    <div className={`map_wrap`}>
    <Map
      center={ {lat: 37.5618588, lng: 126.9468339 }}
      style={{ width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden", }}
      level={2}
      draggable={true} // 지도 드래그 true/false
      ref={mapRef}
    >
       {props.isCafeOpen &&  // select 메뉴에서 카페 누르면
       (props.cafeData.map((a, index) => (
        <MapMarker
          key={`${props.cafeData[index].name}-${props.cafeData[index].latlng}`}
          position={props.cafeData[index].latlng} // 마커를 표시할 위치
          image={{
            src: "https://ifh.cc/g/cmo6Ta.png", // 마커이미지 주소
            size: {
              width: 45,
              height: 55
            }, // 마커이미지의 크기
          }}
        />)))}

      {props.isRestOpen && // select 메뉴에서 식당 누르면
        (props.restaurantData.map((a, index) => (
        <MapMarker
          key={`${props.restaurantData[index].name}-${props.restaurantData[index].latlng}`}
          position={props.restaurantData[index].latlng} // 마커를 표시할 위치
          image={{
            src: "https://ifh.cc/g/5LH8yK.png", // 마커이미지 주소
            size: {
              width: 45,
              height: 55
            }, // 마커이미지의 크기
          }}
        />)))}

        {props.isShopOpen && // select 메뉴에서 생활용품 누르면
        (props.shopData.map((a, index) => (
        <MapMarker
          key={`${props.shopData[index].name}-${props.shopData[index].latlng}`}
          position={props.shopData[index].latlng} // 마커를 표시할 위치
          image={{
            src: "https://ifh.cc/g/6QCpH8.png", // 마커이미지 주소
            size: {
              width: 45,
              height: 55
            }, // 마커이미지의 크기
          }}
        />)))}
   {props.isCafeOpen && ( // 카페 위에 뜨는 정보 -> 누르면 링크 이동
     props.cafeData.map((a, index) => (
      <CustomOverlayMap
          position={props.cafeData[index].latlng}
          yAnchor={1}
        >
            <div className="customoverlay">
            <a
              href={props.cafeData[index].href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="title">{props.cafeData[index].name}</span>
            </a>
          </div>
        </CustomOverlayMap>))
        )}
    {props.isRestOpen && ( // 식당 위에 뜨는 정보 -> 누르면 링크 이동
     props.restaurantData.map((a, index) => (
      <CustomOverlayMap
          position={props.restaurantData[index].latlng}
          yAnchor={1}
        >
          <div className="customoverlay1">
            <a
              href={props.restaurantData[index].href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="title">{props.restaurantData[index].name}</span>
            </a>
          </div>
        </CustomOverlayMap>))
        )}
    {props.isShopOpen && ( // 생활용품점 위에 뜨는 정보 -> 누르면 링크 이동
     props.shopData.map((a, index) => (
      <CustomOverlayMap
          position={props.shopData[index].latlng}
          yAnchor={1}
        >
          <div className="customoverlay2">
            <a
              href={props.shopData[index].href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="title">{props.shopData[index].name}</span>
            </a>
          </div>
        </CustomOverlayMap>))
        )}
    </Map>
    <div className="custom_zoomcontrol radius_border"> 
      <span onClick={zoomIn}>
          <Plus src={plus} alt="plus"/>
      </span>
      <span onClick={zoomOut}>
         <Minus src={minus} alt="minus"/>
      </span>
    </div>
    <div className="custom_centercontrol radius_border1">
      <span onClick={() => {
            const map = mapRef.current
            if (map) map.setBounds(bounds)
          }}>
          <MapPin src={mappin} alt="mappin"/>
      </span>
    </div>
    </div>
    </>
  )
}