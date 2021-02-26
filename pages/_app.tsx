import type { AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import 'modern-normalize';
import { fetchAPI } from 'lib/api';
import { fetchMedia } from 'lib/media';
import { createContext } from 'react';

export const GlobalContext = createContext({});
function JayseeApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  console.log(global);
  return (
    <>
      <Head>
        <link rel="icon" href={fetchMedia(global.favicon)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

JayseeApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const global = await fetchAPI('/global');

  return { ...appProps, pageProps: { global } };
};
export default JayseeApp;
