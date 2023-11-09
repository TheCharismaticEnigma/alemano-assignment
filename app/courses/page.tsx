import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
import { Box, Flex } from '@chakra-ui/react';
import CourseTable from './(components)/CourseTable';
import ActionContainer from './(components)/ActionContainer';
import Pagination from './(components)/Pagination';
import getFilteredCourses from '@/utils/FilteredData';

// Route Handlers are only meant to call from client comps.
// In server comps, call the DB Directly.
// Server Comps receive the search Params too.

interface Props {
  searchParams: CourseQuery;
}
export interface CourseQuery {
  status?: CourseStatus;
  instructor?: string;
  pageSize?: string;
  page?: string;
}

connectToDatabase();

const CourseListPage = async ({ searchParams }: Props) => {
  const courses: CourseInterface[] = await Course.find();

  const { page = '1', pageSize = '5' } = searchParams;

  const pageNumber = parseInt(page);
  const itemsPerPage = parseInt(pageSize);
  const renderedCourses = getFilteredCourses(courses, searchParams);

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
      <ActionContainer />

      <CourseTable courses={renderedCourses} />

      <Pagination
        totalItems={courses.length}
        currentPage={pageNumber}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default CourseListPage;
