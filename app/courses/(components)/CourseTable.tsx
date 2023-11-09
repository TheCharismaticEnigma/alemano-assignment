import { CourseInterface as Course } from '@/schemas/courseSchema';
import {
  Heading,
  Button,
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

const CourseTable = ({ courses }: { courses: Course[] }) => {
  // CASE: No Courses Match the Filter(s)
  if (courses.length === 0)
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

  return (
    <TableContainer>
      <Table variant={'simple'} fontSize={'lg'} colorScheme="purple">
        <Thead>
          <Tr>
            <Th fontSize={'xl'}>Course </Th>
            <Th fontSize={'xl'}>Instructor Name</Th>
            <Th fontSize={'xl'}>Status</Th>
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

export default CourseTable;
