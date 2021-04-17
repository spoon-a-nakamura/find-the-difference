import React, { useEffect } from 'react'
import '../styles/globals.css'
import { adobeLoader } from '../fonts/adobeLoader'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
