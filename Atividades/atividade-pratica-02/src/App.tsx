import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  localStorage.clear()
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
