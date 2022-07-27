import '../styles/globals.css';
import '../styles/blog.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import { TerminalProvider } from '../context/terminal';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TerminalProvider>
        <Analytics />
        <Component {...pageProps} />
      </TerminalProvider>
    </ChakraProvider>
  );
}

export default MyApp;
