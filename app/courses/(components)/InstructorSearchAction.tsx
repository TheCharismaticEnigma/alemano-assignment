'use client';

import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/24/outline';

const InstructorSearchAction = () => {
  return (
    <InputGroup
      size={'lg'}
      variant={'filled'}
      className="w-64 md:w-full md:max-w-lg "
    >
      <InputLeftElement pointerEvents="none">
        <MagnifyingGlassIcon width={25} />
      </InputLeftElement>
      <Input
        type="text"
        autoCorrect="off"
        focusBorderColor="orange.200"
        borderWidth={'1px'}
        placeholder="Instructor Name..."
      />
    </InputGroup>
  );
};

export default InstructorSearchAction;
