import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { theme } from 'theme'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: sans-serif;
    font-size: 16px;
  }
  button, a {
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
`

const user = null

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
