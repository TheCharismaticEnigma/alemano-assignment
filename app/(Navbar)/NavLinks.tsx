'use client';
import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { navLinks } from '@/utils/NavLinks';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const path = usePathname();

  return (
    <Flex gap={'2'} px={'4'}>
      {navLinks.map(({ label, href }) => {
        //   If it is active link then return a separate styled link
        if (href === path) {
          return (
            <Link
              key={label}
              href={href}
              borderRadius={'3xl'}
              color={'black'}
              fontWeight={'medium'}
              style={{
                textDecoration: 'none',
              }}
              className="px-4 py-2 shadow-sm shadow-indigo-500 bg-gradient-to-r from-purple-300 to-indigo-300 "
            >
              {label}
            </Link>
          );
        }

        return (
          <Link
            key={label}
            href={href}
            borderRadius={'3xl'}
            color={'black'}
            fontWeight={'medium'}
            style={{
              textDecoration: 'none',
            }}
            className="px-4 py-2 hover:shadow-sm hover:shadow-indigo-500 hover:bg-gradient-to-r from-purple-300 to-indigo-300 "
          >
            {label}
          </Link>
        );
      })}
    </Flex>
  );
};

export default NavLinks;
