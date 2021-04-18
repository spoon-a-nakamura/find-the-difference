import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import { AnimateSharedLayout } from 'framer-motion'
import Container from '../components/Container'
import GlobalCss from '../components/GlobalCss'

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
      <GlobalCss />
      <AnimateSharedLayout>
        <Container key={router.route} key={router.route}>
          <Component {...pageProps} />
        </Container>
      </AnimateSharedLayout>
    </>
  )
}
