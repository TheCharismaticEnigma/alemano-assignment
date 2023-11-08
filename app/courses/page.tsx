import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
import { Box, Flex } from '@chakra-ui/react';
import CourseTable from './(components)/CourseTable';
import ActionContainer from './(components)/ActionContainer';

// Route Handlers are only meant to call from client comps.
// In server comps, call the DB Directly.

connectToDatabase();

const CourseListPage = async () => {
  const courses: CourseInterface[] = await Course.find();

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
