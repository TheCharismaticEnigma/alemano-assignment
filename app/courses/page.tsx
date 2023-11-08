import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
import { Box, Flex } from '@chakra-ui/react';
import CourseTable from './(components)/CourseTable';
import ActionContainer from './(components)/ActionContainer';

// Route Handlers are only meant to call from client comps.
// In server comps, call the DB Directly.
// Server Comps receive the search Params too.

interface Props {
  searchParams: CourseQuery;
}
interface CourseQuery {
  status?: CourseStatus;
  instructor?: string;
}

connectToDatabase();

const CourseListPage = async ({ searchParams }: Props) => {
  const courses: CourseInterface[] = await Course.find();

  const { status, instructor } = searchParams;

  if (status) {
    const statusFilteredCourses = courses.filter((c) => c.status === status);
    courses.length = 0;
    courses.push(...statusFilteredCourses);
  }

  if (instructor) {
    const commonInstructorCourses = courses.filter(
      (c) => c.instructor === instructor
    );
    courses.length = 0;
    courses.push(...commonInstructorCourses);
  }

  return (
    <Flex
      direction={'column'}
      gap={10}
      mt={8}
      mb={8}
      padding={8}
      className=" w-full max-w-5xl shadow-sm shadow-indigo-400 rounded-xl mx-auto
                   bg-gradient-to-br from-[#212323] to-gray-900"
    >
      {/* Course Action Container = new issue , instructor filter, status filter  */}
      <ActionContainer />

      <CourseTable courses={courses} />

      {/* Pagination Component  => pagination buttons + page count options */}
    </Flex>
  );
};

export default CourseListPage;
