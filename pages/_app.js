import Head from 'next/head';

import Layout from '../components/layout/layout';
import Notification from '../components/ui/notification';
import { notificationContextProvider } from '../store/notification';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <notificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name='description' content='NextJS Events' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
        <Notification title='Test' message='This is a test.' status='pending' />
      </Layout>
    </notificationContextProvider>
  );
}

export default MyApp;
