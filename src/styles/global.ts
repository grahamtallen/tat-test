import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body, #__next {
    height: 100%;
  }

body {
  margin: 0;
  font-family: agency-fb, sans-serif;
}

.navheader {
  padding: 0 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .addr {
    font-size: 0.65rem;
  }
  background-color: #ae52d4;
  color: white;
}

.option-icon {
  font-size: 1rem;
}

.emphasis {
  color: #7b1fa2;
}
`;

export default GlobalStyles;
