import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <head>
        <meta name='viewport' content='initial-scale=1.0, width:device-width' />
      </head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
