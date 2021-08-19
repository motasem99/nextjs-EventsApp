import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <head>
        <title>Next Event </title>
        <meta name='description' content='NextJs Events' />
        <meta name='viewport' content='initial-scale=1.0, width:device-width' />
      </head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
