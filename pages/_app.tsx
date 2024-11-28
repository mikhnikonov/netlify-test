import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
        <meta name="description"
              content="Салон Deko в Казани с опытом более 25 лет. Специализируемся на тюлях, шторах и портьерах для дома и офиса любой сложности. Качество и стиль, проверенные временем."/>
        <title>Deko – Портьерный салон в Казани | Шторы, Тюли и Портьеры</title>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
        />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
        />
      </Head>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-M2NHXX2TCJ`}/>
      <Script strategy="lazyOnload" id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M2NHXX2TCJ', {
              page_path: window.location.pathname,
              });
          `}
    </Script>
    <Component {...pageProps} />  
    </>
  )
}

export default MyApp
