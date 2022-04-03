
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import '../../styles/globals.css';
import { useRouter } from 'next/router';
import DrawerController from '../components/drawerController';
import { Drawer } from '../components/drawer';
import MainHeader from '../components/mainHeader';
import { theme } from '../modules/theme';
import store from '../modules/redux';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DrawerController>
          {router.pathname === '/'
            ? null
            : <>
              <Drawer />
              <MainHeader />
            </>}
          <Component {...pageProps} />
        </DrawerController>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp
