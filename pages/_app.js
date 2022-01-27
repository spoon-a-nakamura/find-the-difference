import Head from 'next/head';
import React, { useEffect } from 'react';
import { adobeLoader } from '../fonts/adobeLoader';
import { AnimateSharedLayout } from 'framer-motion';
import GlobalCss from '../components/GlobalCss';

const useVhProperty = () => {
  useEffect(() => {
    const updateVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    updateVhProperty();
    window.addEventListener('resize', updateVhProperty);
    return () => {
      document.documentElement.style.removeProperty('--vh');
      window.removeEventListener('resize', updateVhProperty);
    };
  }, []);
};

export default function App({ Component, pageProps, router }) {
  useVhProperty();
  useEffect(() => {
    if (process.browser) adobeLoader(document);
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="ja" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#298C6D" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="スタジオスプーン" />
        <title>スタジオスプーンのまちがい探し</title>
        <meta
          name="description"
          content="ちょっとした待ち時間にスマホでまちがい探しを楽しもう！　どうぶつとまほうの２コースから選べます。（制作：スタジオスプーン）"
        />
        <meta
          name="keywords"
          content="まちがい探し, ゲーム, スタジオスプーン"
        />
        <link
          rel="canonical"
          href="https://find-the-difference-zeta.vercel.app/"
        />
        <link rel="shortcut icon" href="/images/common/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/images/common/apple-touch-icon.png"
        />

        <meta
          property="og:site_name"
          content="スタジオスプーンのまちがい探し"
        />
        <meta property="og:title" content="スタジオスプーンのまちがい探し" />
        <meta
          property="og:image"
          content="https://find-the-difference-zeta.vercel.app/images/common/ogimg.png"
        />
        <meta
          property="og:description"
          content="ちょっとした待ち時間にスマホでまちがい探しを楽しもう！　どうぶつとまほうの２コースから選べます。（制作：スタジオスプーン）"
        />
        <meta
          property="og:url"
          content="https://find-the-difference-zeta.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="studio_spoon" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VE1Y2H2E69"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VE1Y2H2E69');`,
          }}
        ></script>
      </Head>
      <GlobalCss />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}
