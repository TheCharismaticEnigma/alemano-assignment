'use client';

import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter, useSearchParams } from 'next/navigation';
import { KeyboardEvent } from 'react';

const InstructorSearchAction = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSearchParams: (e: KeyboardEvent<HTMLInputElement>) => void = (
    event
  ) => {
    if (event.code !== 'Enter') return; // if key is not enter key
    const criteria = 'instructor';
    const input = event.target as HTMLInputElement;
    const instructor = input.value.trim();
    input.value = ''; // reset value

    if (instructor.length === 0) return; // if empty string is sent

    // Generate Search Query String Dynamically
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => params.append(key, value));
    params.set(criteria, instructor);

    const queryString = params.size ? `?${params.toString()}` : '';
    router.push(`/courses/${queryString}`);
  };

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
        onKeyUp={setSearchParams}
      />
    </InputGroup>
  );
};

export default InstructorSearchAction;
