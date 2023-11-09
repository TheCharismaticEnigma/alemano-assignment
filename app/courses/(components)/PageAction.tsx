'use client';

import { Select } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

const PageAction = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setSearchParams = (event: ChangeEvent<HTMLSelectElement>) => {
    const criteria = 'pageSize';
    const perPageSize = parseInt(event.target.value);

    // Dynamic Search Query String
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => params.append(key, value));

    if (searchParams.get(criteria) && perPageSize === 5)
      params.delete(criteria);

    perPageSize !== 5 && params.set(criteria, `${perPageSize}`);

    const queryString = params.size ? `?${params.toString()}` : '';
    router.push(`/courses/${queryString}`);
  };

  return (
    <Select
      width={'max-content'}
      variant={'filled'}
      focusBorderColor={'orange.200'}
      borderColor={'orange.200'}
      borderWidth={'1px'}
      size={'md'}
      defaultValue={searchParams.get('pageSize') || 5}
      onChange={setSearchParams}
    >
      {[5, 10].map((count) => (
        <option key={count} value={count} className="text-lg py-1">
          {`${count} / page`}
        </option>
      ))}
    </Select>
  );
};

export default PageAction;
