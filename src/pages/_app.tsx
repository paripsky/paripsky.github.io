import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { TerminalProvider } from '../context/terminal';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TerminalProvider>
        <Component {...pageProps} />
      </TerminalProvider>
    </ChakraProvider>
  );
}

export default MyApp;
