import { CourseInterface as Course } from '@/schemas/courseSchema';
import {
  Heading,
  Button,
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import StatusBadge from './StatusBadge';
import Link from 'next/link';
import { CourseQuery } from '../page';
import { ArrowLongUpIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import sortedCourses from '@/utils/SortedData';

interface Props {
  courses: Course[];
  searchParams: CourseQuery;
}

const CourseTable = ({ courses, searchParams }: Props) => {
  if (courses.length === 0) return <RedirectionComponent />;

  // Order the courses if necessary
  sortedCourses(courses, searchParams.orderBy);

  return (
    <TableContainer>
      <Table variant={'simple'} fontSize={'lg'} colorScheme="purple">
        <Thead>
          <Tr>
            <TableHeaderCell searchParams={searchParams} />
          </Tr>
        </Thead>

        <Tbody>
          {courses.map(({ _id, title, instructor, status }) => (
            <Tr key={_id!}>
              <Td>
                <Link
                  href={`/courses/${_id?.toString()}`}
                  className={`hover:text-orange-300`}
                >
                  {title}
                </Link>
              </Td>
              <Td>{instructor}</Td>
              <Td>
                <StatusBadge status={status} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

// CASE : NO MORE COURSES TO RENDER
const RedirectionComponent = () => {
  return (
    <Stack spacing={8}>
      <Heading mt={5} textAlign={'center'} color={'orange.300'}>
        {`NO COURSES MATCH YOUR FILTERS :( `}
      </Heading>

      <Button
        size={'lg'}
        mx={'auto'}
        colorScheme="orange"
        variant={'outline'}
        width={'fit-content'}
      >
        <Link
          href={'/courses'}
          className=" w-full h-full flex place-items-center"
        >
          View All Courses
        </Link>
      </Button>
    </Stack>
  );
};

interface TableHeaderCell {
  label: string;
  value: string;
}

const TableHeaderCell = ({ searchParams }: { searchParams: CourseQuery }) => {
  const cells: TableHeaderCell[] = [
    { label: 'Course', value: 'title' },
    { label: 'Instructor Name', value: 'instructor' },
    { label: 'Status', value: 'status' },
  ];

  const { orderBy } = searchParams;

  return cells.map(({ label, value }) => (
    <Th fontSize={'xl'}>
      <Link
        href={{
          query: {
            ...searchParams,
            orderBy: value,
          },
        }}
      >
        {label}
        {orderBy && orderBy === value && (
          <ArrowLongUpIcon className="inline-block pb-1" width={15} />
        )}
      </Link>
    </Th>
  ));
};

export default CourseTable;
