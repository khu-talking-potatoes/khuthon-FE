import { createGlobalStyle } from "styled-components";
import Pretendard from "../assets/fonts/Pretendard-Regular.woff";
// 필요한 전역 스타일 작성해주세요.
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard";
  src: url(${Pretendard}) format("woff");
}

body {
    font-family: 'Pretendard';
    margin: 0;
    font-size: 16px;
}

  button {
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 16px;
  }

  input {
    outline: none;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

`;

export default GlobalStyle;
