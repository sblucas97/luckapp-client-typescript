import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from 'theme'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>React boilerplate typescript</p>
    </ThemeProvider>
  )
}

export default App
