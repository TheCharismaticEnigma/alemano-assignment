import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const NewCourseButton = () => {
  return (
    <Button
      className="w-fit max-md:hidden"
      variant="outline"
      size={'md'}
      colorScheme="orange"
    >
      <Link href="/courses/new">+ COURSE</Link>
    </Button>
  );
};

export default NewCourseButton;
