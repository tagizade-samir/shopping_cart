
import Head from 'next/head';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';

import '../../styles/globals.css';
import store from '../modules/redux';
import { theme } from '../modules/theme';
import { Drawer } from '../components/drawer';
import { InfoHOC } from '../components/infoHOC';
import MainHeader from '../components/mainHeader';
import { DrawerController } from '../components/drawerController';
import { Utils } from '../services/utils';

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  return(
    <>
      <Head>
        <title>{Utils.CONSTANTS.appTitle}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <InfoHOC>
            <DrawerController>
              {router.pathname === '/'
                ? null
                : <>
                  <Drawer />
                  <MainHeader />
                </>}
              <Component {...pageProps} />
            </DrawerController>
          </InfoHOC>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp
