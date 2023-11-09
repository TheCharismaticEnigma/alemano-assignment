import { Button, Tooltip } from '@chakra-ui/react';

const EditCourseButton = () => {
  return (
    <Tooltip
      placement="bottom"
      label="Functionality skipped due to similarity!"
      fontSize={'md'}
    >
      <Button isDisabled={true} colorScheme="orange" variant="outline">
        Edit Course
      </Button>
    </Tooltip>
  );
};

export default EditCourseButton;
