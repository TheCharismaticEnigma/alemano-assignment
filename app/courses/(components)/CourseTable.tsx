import { CourseInterface as Course } from '@/schemas/courseSchema';
import {
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
