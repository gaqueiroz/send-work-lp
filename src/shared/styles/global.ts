import { Inter, Roboto } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const GlobalStyle = createGlobalStyle`

  &:root {
    --fc-border-color: ${({ theme }) => theme.colors.gray[100]};
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* font-family: var('--font-inter'); */
    font-family: ${inter.style.fontFamily};
    font-weight: 500;
  }

  html, body, #__next {
    min-height: 100%;
    height: 100%;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    /* color: ${({ theme }) => theme.colors.onBackground}; */
  }

  body {
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  main {
    background-color: ${({ theme }) => theme.colors.background};
  }

  fieldset {
    border: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  b {
    font-weight: 600;
  }
`;
