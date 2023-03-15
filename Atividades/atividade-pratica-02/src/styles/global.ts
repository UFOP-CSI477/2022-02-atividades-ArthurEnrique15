import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }
  
  :focus {
    outline: none;
    box-shadow: 0px;
  }

  body {
    background: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border: 0px;
  }

  a {
    text-decoration: none;
  }
`
