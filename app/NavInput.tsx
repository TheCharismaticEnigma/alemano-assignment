'use client';

import { useColorMode } from '@chakra-ui/react';

interface ColorScheme {
  [key: string]: {
    bgColor: string;
    textColor: string;
  };
}

const NavInput = () => {
  return (
    <input
      type="text"
      spellCheck="false"
      placeholder="Search"
      autoCorrect="off"
      autoComplete="off"
      className={` w-72 md:w-96 placeholder:text-white cursor-pointer text-xl p-2 pl-11
              shadow-sm border-inherit rounded-md outline-none focus:outline-none
            focus:shadow-gray-800 flex-1 md:flex-initial transition duration-200 ease-in-out
              text-white bg-[#3B3B3B] 
            `}
    />
  );
};

export const dynamic = 'force-dynamic';

export default NavInput;
