
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import '../../styles/globals.css';
import store from '../modules/redux';
import { theme } from '../modules/theme';
import { Drawer } from '../components/drawer';
import { InfoHOC } from '../components/infoHOC';
import MainHeader from '../components/mainHeader';
import { DrawerController } from '../components/drawerController';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return(
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
  );
}

export default MyApp
