import { createGlobalStyle } from "styled-components";

import NotoSansBold from "./NotoSans-Bold.woff";
import NotoSansRegular from "./NotoSans-Regular.woff";
import SUITBold from "./SUIT-Bold.woff2";
import SUITRegular from "./SUIT-Regular.woff2";
import SUITSemibold from "./SUIT-SemiBold.woff2";
import SUITExtrabold from "./SUIT-ExtraBold.woff2";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'NotoSans Bold';
        src: url(${NotoSansBold}) format('woff');
    }

    @font-face {
        font-family: 'NotoSans Regular';
        src: url(${NotoSansRegular}) format('woff');
    }

    @font-face {
        font-family: 'SUIT Bold';
        src: url(${SUITBold}) format('woff');
    }

    @font-face {
        font-family: 'SUIT Regular';
        src: url(${SUITRegular}) format('woff');
    }

    @font-face {
        font-family: 'SUIT Semibold';
        src: url(${SUITSemibold}) format('woff');
    }

    @font-face {
        font-family: 'SUIT Extrabold';
        src: url(${SUITExtrabold}) format('woff');
    }

`;
