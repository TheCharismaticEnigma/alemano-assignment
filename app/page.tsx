'use client';

import { Box, Button, useColorMode } from '@chakra-ui/react';

export default function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button color="amber" onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  );
}
