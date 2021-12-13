import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const GlobalStyles = createGlobalStyle`
  html, body {
    /* font-family: 'Nosifer', cursive; */
    background-color: ${colors.blackOpacity05};
  }
`;

export default GlobalStyles;
