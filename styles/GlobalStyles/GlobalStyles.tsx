import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/*  ===== fonts ===== */

/* Noto Sans */
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Light.ttf');
    font-style: normal;
    font-weight: 300;
}
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Regular.ttf');
    font-style: normal;
    font-weight: 400;
}
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Medium.ttf');
    font-style: normal;
    font-weight: 500;
}
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Bold.ttf');
    font-style: bold;
    font-weight: 600;
}
@font-face {
    font-family: "Noto Sans";
    src: url('assets/fonts/NotoSans-Bold.ttf');
    font-style: bold;
    font-weight: 700;
}

/* poppins font */
@font-face {
    font-family: "Poppins";
    src: url('assets/fonts/Poppins-Light.ttf');
    font-style: normal;
    font-weight: 300;
}
@font-face {
    font-family: "Poppins";
    src: url('assets/fonts/Poppins-Regular.ttf');
    font-style: normal;
    font-weight: 400;
}
@font-face {
    font-family: "Poppins";
    src: url('assets/fonts/Poppins-Bold.ttf');
    font-style: 600;
    font-weight: bold;
}
@font-face {
    font-family: "Poppins";
    src: url('assets/fonts/Poppins-ExraBold.ttf');
    font-style: normal;
    font-weight: 700;
}


/*  ===== fonts ===== */


body{
    background-color: #F2F2F2;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
     
}

input{
    border: none;
    outline: none;

    &:focus{
        border: none;
        outline: none;
    }
}
h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
`;

export default GlobalStyles;
