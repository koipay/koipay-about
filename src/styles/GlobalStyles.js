import {
  createGlobalStyle,
  css,
} from 'styled-components';
const GlobalClasses = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  :root {
    --pri: linear-gradient(
      101.91deg,
      #32f094 -4.89%,
      #579af2 103.74%
    );
    --blue: #579AF2;
    --width-container: 1370px;
    --font: 'Poppins',
      sans-serif;
    --font-normal: 400;
    --font-size-html: 62.5%;
    --fz70: 7rem;
    --fz24: 2.4rem;
    --fz16: 1.6rem;
    --fz20: 2rem;
    --fz48: 4.8rem;
    --fz64: 6.4rem;
    --fz40: 4rem;
    --white: #ffffff;
    --gray: #262626;
    --sm: 47.9375em;
    --md: 64em;
    --lg: 80em;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    outline: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  li{
    list-style: none;
  }
  html {
    font-size: var(
      --font-size-html
    );
  }
  body {
    line-height: 1.5;
    font-family: var(--font);
    font-weight: var(
      --font-normal
    );
    color: var(--white);
    background: var(--gray);
    font-size: var(--fz16);
  }
  input,
  button {
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
    ${GlobalClasses}
`;
export default GlobalStyles;
