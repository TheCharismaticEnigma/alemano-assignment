'use client';

import { Button, Flex, Tag } from '@chakra-ui/react';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

import PageAction from './PageAction';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1)
    return (
      <Flex justifyContent={'end'}>
        <PageAction />
      </Flex>
    );

  const updatePage = (page: number) => {
    const params = new URLSearchParams();

    searchParams.forEach((value, key) => {
      params.append(key, value);
    });

    if (searchParams.get('page') && page === 1) params.delete('page');
    page > 1 && params.set('page', `${page}`);

    router.push(`?${params.toString()}`);
  };

  return (
    <Flex
      direction={{
        base: 'column',
        sm: 'column',
        md: 'row',
      }}
      p={1}
      gap={'5'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Flex gap={'5'} align={'center'}>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => {
            updatePage(1);
          }}
        >
          <ChevronDoubleLeftIcon width={20} pointerEvents={'none'} />
        </PaginationButton>

        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => {
            updatePage(currentPage - 1);
          }}
        >
          <ChevronLeftIcon width={20} />
        </PaginationButton>

        <Tag
          variant="subtle"
          textAlign={'center'}
          lineHeight={'1.4'}
          size={'lg'}
          colorScheme="pink"
        >
          Page {currentPage} of {totalPages}
        </Tag>

        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => {
            updatePage(currentPage + 1);
          }}
        >
          <ChevronRightIcon width={20} />
        </PaginationButton>

        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => {
            updatePage(totalPages);
          }}
        >
          <ChevronDoubleRightIcon width={20} />
        </PaginationButton>
      </Flex>

      <PageAction />
    </Flex>
  );
};

// Sub Component.

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const PaginationButton = ({
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      variant="outline"
      colorScheme="orange"
      isDisabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Pagination;

/* 
   4 buttons - next, prev, start, end 
   currentPage, itemsCount, itemsPerPage. 
*/
