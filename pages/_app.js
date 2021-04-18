import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'
import Layout from '../components/layout'

export default function App({ Component, pageProps, router }) {
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
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  )
}
