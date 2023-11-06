'use client';

import { Flex, Switch, useColorMode } from '@chakra-ui/react';
import { SunIcon } from '@heroicons/react/24/outline';

const ThemeSwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex width={'fit-content'} alignItems={'center'} gap={'3'}>
      <Switch
        defaultChecked={colorMode === 'light'}
        onChange={toggleColorMode}
        size="md"
        colorScheme="teal"
      />
      <SunIcon height={'32'} color="white" />
    </Flex>
  );
};

export const dynamic = 'force-dynamic';

export default ThemeSwitchButton;
