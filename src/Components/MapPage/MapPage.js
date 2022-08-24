import NavBar from "../NavBar/NavBar";
import { MapPageContainer } from "./MapPageElement";

function MapPage(){
    return(
        <>
        <NavBar/>
        <MapPageContainer>
        {/* <Map/> */}
        </MapPageContainer>
        </>
    )
}

export function Map(){
    return(
        <>
        <div>지도 api</div>
        </>
    )
}
export default MapPage;