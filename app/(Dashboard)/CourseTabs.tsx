'use client';

import { Tag, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CourseStats } from '../page';

interface CourseTab {
  label: string;
  value: CourseStatus;
  stat: number;
}

const CourseTabs = ({
  stats: { openCount, inProgressCount, closedCount },
}: {
  stats: CourseStats;
}) => {
  const tabs: CourseTab[] = [
    { label: 'Open Courses', value: 'OPEN', stat: openCount },
    {
      label: 'Progressing Courses',
      value: 'IN_PROGRESS',
      stat: inProgressCount,
    },
    { label: 'Closed Courses', value: 'CLOSED', stat: closedCount },
  ];

  return (
    <Flex
      direction={{
        base: 'column',
        sm: 'row',
        md: 'row',
      }}
      gap={5}
      p={1}
      justifyContent={'space-between'}
    >
      {tabs.map(({ label, value, stat }) => (
        <CourseTabTag label={label} value={value} stat={stat} />
      ))}
    </Flex>
  );
};

const CourseTabTag = ({
  label,
  value,
  stat,
}: {
  label: string;
  value: CourseStatus;
  stat: number;
}) => {
  return (
    <Tag
      size={'lg'}
      key={value}
      variant="subtle"
      colorScheme="blackAlpha.500"
      className="shadow-sm shadow-gray-700"
      p={3}
    >
      <Flex direction={'column'} gap={3}>
        <Link
          className="hover:text-orange-300"
          href={`/courses?status=${value}`}
        >
          {label}
        </Link>

        <Text color={'orange.600'} fontSize={'1.6rem'}>
          {stat}
        </Text>
      </Flex>
    </Tag>
  );
};

export default CourseTabs;
