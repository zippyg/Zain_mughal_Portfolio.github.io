import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #fff;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default GlobalStyles;
