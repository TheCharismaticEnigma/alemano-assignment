'use client';

import { Select } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

interface Option {
  value?: CourseStatus;
  label: string;
}

const StatusSelectAction = () => {
  const options: Option[] = [
    { label: 'All Courses' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();

  const setSearchParams: (e: ChangeEvent<HTMLSelectElement>) => void = (
    event
  ) => {
    const selectedStatus = event.target.value;
    const criteria = 'status';

    // Create Search Params String dynamically.
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => params.append(key, value));

    if (params.get(criteria) && selectedStatus === 'all')
      params.delete(criteria);

    selectedStatus !== 'all' && params.set(criteria, selectedStatus);

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
      defaultValue={'all'}
      onChange={setSearchParams}
    >
      {options.map(({ value = 'all', label }) => (
        <option key={label} value={value} className="text-lg py-1">
          {label}
        </option>
      ))}
    </Select>
  );
};

export default StatusSelectAction;
