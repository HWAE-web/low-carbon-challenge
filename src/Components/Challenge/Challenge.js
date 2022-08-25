import { useState } from "react";
import { GlobalFonts } from "../../fonts/font";
import { ChallengeContainer } from "./ChallengeElement";
import { useNavigate } from "react-router-dom";

function Challenge(){
    let navigate = useNavigate();

    return(
        <>
        <GlobalFonts/>
        <ChallengeContainer>
        <button onClick={() => {navigate("/post")}}>post 이동</button>
        </ChallengeContainer>
        </>
    )
}

export default Challenge;