import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Regular.ttf');
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: "Poppins";
    src: url('assets/fonts/Poppins-Regular.ttf');
    font-style: normal;
    font-weight: normal;
}

body{
    background-color: #F2F2F2;
    font-family: 'Noto Sans';
}
`;

export default GlobalStyles;
