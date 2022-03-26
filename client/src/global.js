import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    box-sizing: border-box;
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
        padding: 10px; 
    }
  }
  
`
