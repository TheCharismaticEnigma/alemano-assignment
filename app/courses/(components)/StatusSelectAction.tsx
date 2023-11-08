import { Select } from '@chakra-ui/react';

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

  return (
    <Select
      width={'max-content'}
      variant={'filled'}
      focusBorderColor={'orange.200'}
      borderColor={'orange.200'}
      borderWidth={'1px'}
      size={'md'}
      defaultValue={'all'}
    >
      {options.map(({ value = 'all', label }) => (
        <option key={value} value={value} className="text-lg py-1">
          {label}
        </option>
      ))}
    </Select>
  );
};

export default StatusSelectAction;
