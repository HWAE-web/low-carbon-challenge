import { createGlobalStyle } from "styled-components";

import NotoSansBold from "./NotoSans-Bold.woff";
import NotoSansRegular from "./NotoSans-Regular.woff";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'NotoSans Bold';
        src: url(${NotoSansBold}) format('woff');
    }

    @font-face {
        font-family: 'NotoSans Regular';
        src: url(${NotoSansRegular}) format('woff');
    }
`;