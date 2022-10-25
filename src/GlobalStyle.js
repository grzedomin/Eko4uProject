import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
};
::before, ::after {
    box-sizing: inherit;
};
body {
    font-family: "Montserrat", sans-serif;
    max-width: 1400px;
    margin: 40px auto;
    
    @media (max-width: 1280px){
      margin: 21px 16px;
    }
    @media (max-width: 767px){
        margin: 21px 16px 31px 16px;
    }
}
`;
