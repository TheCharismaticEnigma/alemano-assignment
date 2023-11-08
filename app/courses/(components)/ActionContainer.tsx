import { Flex, Box } from '@chakra-ui/react';
import NewCourseButton from './NewCourseButton';
import StatusSelectAction from './StatusSelectAction';
import InstructorSearchAction from './InstructorSearchAction';

const ActionContainer = () => {
  return (
    <Flex
      px={'1'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={6}
    >
      <NewCourseButton />

      <InstructorSearchAction />

      <StatusSelectAction />
    </Flex>
  );
};

export default ActionContainer;
