import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import CourseTabs from './(Dashboard)/CourseTabs';
import Graph from './(Dashboard)/Graph';
import LatestCourses from './(Dashboard)/LatestCourses';
import { CourseInterface } from '@/schemas/courseSchema';
import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import getCourseStats from '@/utils/CourseStats';

connectToDatabase();

export interface CourseStats {
  openCount: number;
  inProgressCount: number;
  closedCount: number;
}

export default async function HomePage() {
  const courses: CourseInterface[] = await Course.find();
  const courseStats = getCourseStats(courses);

  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 1,
        md: 2,
      }}
      spacing={'8'}
      className="w-full max-w-6xl mx-auto mt-6"
    >
      <Flex border={'1px solid red'} direction={'column'} gap={8}>
        <CourseTabs stats={courseStats} />
        <Graph />
      </Flex>

      <Box border={'1px solid red'}>
        <LatestCourses />
      </Box>
    </SimpleGrid>
  );
}
