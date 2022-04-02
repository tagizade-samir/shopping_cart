import store from 'src/modules/redux';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';

import '../../styles/globals.css';
import { theme } from 'src/modules/theme';
import { Drawer } from 'src/components/drawer';
import MainHeader from 'src/components/mainHeader';
import { useRouter } from 'next/router';
import DrawerController from 'src/components/drawerController';

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
