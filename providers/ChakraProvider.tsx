'use client';

import { PropsWithChildren } from 'react';
import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider as ChakraThemeProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import { chakraTheme } from '@/utils/ChakraTheme';

export function ChakraProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraThemeProvider theme={chakraTheme}>
        <ColorModeScript initialColorMode={'dark'} />

        {children}
      </ChakraThemeProvider>
    </CacheProvider>
  );
}

export default ChakraProvider;
