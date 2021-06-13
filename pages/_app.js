import { useEffect } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig'

// styles
import '../styles/globals.css'

// components
import Header from '../components/layout/header'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useLocalStorage('dark-mode')
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="container">
        <Header toggle={toggleTheme} />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp