import { ChakraTheme, extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const palette = {
  colors: {
    green: {
      200: '#1DB954',
      500: '#1DB954',
    },
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#636363',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
  },
};

export const chakraTheme = extendTheme({
  config,
  ...palette,
});
