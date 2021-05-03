import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import { AnimateSharedLayout } from 'framer-motion'
import GlobalCss from '../components/GlobalCss'
import {
  GameLevelProvider,
  useGameLevelContext,
} from '../components/GameLevelContext'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])

  // コンテキストに保存されている初期値をgameLevelに代入
  const { gameLevel, setGameLevel } = useGameLevelContext()
  console.log(`初期値：${gameLevel}`)

  return (
    <>
      <Head>
        <title>まちがい探し | スタジオスプーン</title>
        <link rel='icon' href='/images/common/favicon.ico' />
      </Head>
      <GlobalCss />
      <GameLevelProvider value={{ gameLevel, setGameLevel }}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </GameLevelProvider>
    </>
  )
}
