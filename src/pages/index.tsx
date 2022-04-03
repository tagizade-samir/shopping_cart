import type { NextPage } from 'next'
import Head from 'next/head';
import Home from './home';


const Index: NextPage = () => {
  return(
    <>
      <Head>
        {/* TODO: Need to fix this issue */}
        <title>Foody</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Home />
    </>
  );
}

export default Index;
