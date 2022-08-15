import { createGlobalStyle } from "styled-components";
import ProximaNova from "../../fonts/Proxima_Nova.otf"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #181818;
  }
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'),
    url(${ProximaNova}) format('truetype');
  }
`