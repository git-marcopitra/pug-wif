import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from '@/styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Toaster />
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>
);

export default App;
