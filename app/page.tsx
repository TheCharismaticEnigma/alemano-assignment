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

export default async function HomePageDashboard() {
  const courses: CourseInterface[] = await Course.find();
  const courseStats = getCourseStats(courses);

  return <DashboardGrid courses={courses} courseStats={courseStats} />;
}

interface DashboardProps {
  courses: CourseInterface[];
  courseStats: CourseStats;
}

const DashboardGrid = ({ courses, courseStats }: DashboardProps) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 1,
        md: 1,
        lg: 2,
      }}
      spacing={'8'}
      className="lg:h-screen w-full max-w-6xl mx-auto mt-6 "
    >
      <Flex alignItems={'center'} direction={'column'} gap={8}>
        <CourseTabs stats={courseStats} />
        <Graph stats={courseStats} />
      </Flex>

      <Flex p={1} overflowY={'hidden'}>
        <LatestCourses courses={courses} />
      </Flex>
    </SimpleGrid>
  );
};
