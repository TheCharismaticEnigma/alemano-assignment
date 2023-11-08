import { Flex, Box } from '@chakra-ui/react';
import DeleteCourseButton from './DeleteCourseButton';
import EditCourseButton from './EditCourseButton';

const CourseActionContainer = () => {
  return (
    <Flex
      direction={'column'}
      gap={6}
      width={'100%'}
      className="px-3 py-5  w-full max-w-md  rounded-lg bg-gradient-to-bl from-inherit  to-inherit  shadow-sm shadow-indigo-400"
    >
      <DeleteCourseButton />
      <EditCourseButton />
    </Flex>
  );
};

export default CourseActionContainer;
