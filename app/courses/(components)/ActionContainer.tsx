import { Flex, Box } from '@chakra-ui/react';
import NewCourseButton from './NewCourseButton';

const ActionContainer = () => {
  return (
    <Flex
      px={'1'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={6}
    >
      <NewCourseButton />

      <Box>Instructor Sort Select </Box>
      <Box>Status Sort Select</Box>
    </Flex>
  );
};

export default ActionContainer;
