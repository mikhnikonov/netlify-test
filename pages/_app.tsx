import '../styles/globals.css'
import Script from 'next/script';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-M2NHXX2TCJ`} />
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
