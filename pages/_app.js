import Head from 'next/head'
import { useState } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig'

// styles
import '../styles/globals.css'

// components
import Header from '../components/layout/header'

function MyApp({ Component, pageProps }) {

  // const [theme, setTheme] = useLocalStorage('dark-mode')
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      </Head>
      <GlobalStyles />
      <div className="container">
        <Header toggle={toggleTheme} />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp