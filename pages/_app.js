import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
