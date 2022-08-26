/* global kakao */
import { Column1, Column2, Desc, MapCol, MapPageContainer, MapPageWrapper, MapRow,Plus, Minus, R1, R2, Row1, Row2, Title, TitleCol, MapPin, MapContentWrap, Info, InfoTitle, Close, Body, Addr, Ellipsis } from "./MapPageElement";
import { useEffect, useState, useRef, useMemo } from "react";
import { GlobalFonts } from "../../fonts/font";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import "./MapPage.css";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import mappin from "../../images/mappin.svg";
import { cafe_data } from "./data";
import { restaurant_data } from "./data";
import { shop_data } from "./data";

function MapPage(){
    let [cafeData] = useState(cafe_data); 
    let [restaurantData] = useState(restaurant_data); 
    let [shopData] = useState(shop_data); 
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
                        <Desc>집 근처 가까운 곳에서 저탄소 챌린지를 실천할 수 있는 장소들을 찾아보세요!</Desc>
                    </R2>
                </TitleCol>
              </Row1>
              <Row2>
                <MapRow>
                    <Column1>
                        <MapAPI cafeData={cafeData} restaurantData={restaurantData} shopData={shopData}/>
                    </Column1>
                    <Column2>
                    </Column2>
                </MapRow>
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
    const [isOpen, setIsOpen] = useState(false);

    const zoomIn = () => {
        const map = mapRef.current
        map.setLevel(map.getLevel() - 1)
    }

    const zoomOut = () => {
        const map = mapRef.current
        map.setLevel(map.getLevel() + 1)
    }

    const [points, setPoints] = useState([ // 좌표들이 모두 보이게 지도의 중심좌표와 레벨을 재설정 가능
      {lat: 36.3745656, lng: 127.3213564},
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
      center={props.cafeData[1].latlng }
      style={{ width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden", }}
      level={2}
      draggable={true} // 지도 드래그 true/false
      ref={mapRef}
    >
        {props.cafeData.map((a, index) => (
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
          onClick={() => setIsOpen(!isOpen)}
        />))}

        {props.restaurantData.map((a, index) => (
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
        />))}

        {props.shopData.map((a, index) => (
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
        />))}
   {isOpen && ( // 카페 위에 뜨는 거
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