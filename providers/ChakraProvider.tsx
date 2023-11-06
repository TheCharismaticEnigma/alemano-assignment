'use client';

import { PropsWithChildren } from 'react';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider as ChakraThemeProvider } from '@chakra-ui/react';

export function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraThemeProvider>{children}</ChakraThemeProvider>
    </CacheProvider>
  );
}

export default ChakraProvider;
