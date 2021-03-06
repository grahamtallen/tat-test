import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import '../components/ImageReveal/svg.css';
import 'antd/dist/antd.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React NextJS - Boilderplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
