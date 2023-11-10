import { CourseInterface as Course } from '@/schemas/courseSchema';
import {
  Box,
  Card,
  CardHeader,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { HeartIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import StatusBadge from '../courses/(components)/StatusBadge';

interface Props {
  courses: Course[];
  displayCount?: number;
}

const LatestCourses = ({ courses, displayCount = 5 }: Props) => {
  const displayedCourses = courses
    .reverse()
    .slice(0, Math.min(courses.length, displayCount));

  return (
    <Card className="w-full p-2 rounded-xl bg-gradient-to-br shadow-sm shadow-violet-400 from-[#121212] to-gray-900">
      <CardHeader>
        <Heading color={'orange.300'} fontSize={'2xl'}>
          Latest Courses
        </Heading>
      </CardHeader>

      <TableContainer overflowY={'auto'}>
        <Table variant="simple" colorScheme="orange">
          <Tbody fontSize={'lg'}>
            {displayedCourses.map((course) => (
              <TableRow course={course} key={course.title} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const TableRow = ({ course }: { course: Course }) => {
  const { title, _id, status, isLiked } = course;

  return (
    <Tr key={title}>
      <Td>
        <Stack spacing={4}>
          <Link className="hover:text-orange-300" href={`/courses/${_id}`}>
            {title}
          </Link>
          <Box>
            <StatusBadge status={status} />
          </Box>
        </Stack>
      </Td>

      <Td>
        <Box>
          <Tooltip
            label={`${isLiked ? 'Liked' : 'Disliked'} Course`}
            fontSize="sm"
          >
            {isLiked ? (
              <HeartIcon fill="red" color="red" width={40} />
            ) : (
              <HandThumbDownIcon fill="violet" color="violet" width={40} />
            )}
          </Tooltip>
        </Box>
      </Td>
    </Tr>
  );
};

export default LatestCourses;
