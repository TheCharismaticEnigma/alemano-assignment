'use client';

import { Box, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import CourseTabs from './(Dashboard)/CourseTabs';
import Graph from './(Dashboard)/Graph';
import LatestCourses from './(Dashboard)/LatestCourses';

export default function HomePage() {
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
        <CourseTabs />
        <Graph />
      </Flex>

      <Box border={'1px solid red'}>
        <LatestCourses />
      </Box>
    </SimpleGrid>
  );
}

/*
  /dashboard => home page 
  /courses => course list 
  /courses/id  => individual course details page
  /courses/new => create new course 
  /courses/id/update => update existing course details
*/
