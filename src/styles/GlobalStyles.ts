import { createGlobalStyle } from 'styled-components';

const fontURL = require('../assets/fonts/NanumGothic-Regular.ttf');

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NanumGothic';
    src: url(${fontURL});
  }
  body {
    font-family: 'NanumGothic', consolas;    
  }
`;

export default GlobalStyles;
