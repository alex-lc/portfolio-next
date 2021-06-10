import '../styles/globals.css'

// components
import Header from '../components/layout/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
