import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'SuperCandy';
    src: url('/fonts/SuperCandy.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SuperCandy';
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
