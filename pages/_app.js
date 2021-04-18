import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return (
    <>
      <Head>
        <title>まちがい探し | スタジオスプーン</title>
        <link rel='icon' href='/images/common/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
