import { CourseInterface as Course } from '@/schemas/courseSchema';
import { Box } from '@chakra-ui/react';

interface Props {
  course: Course;
}

const DetailCard = ({ course }: Props) => {
  return (
    <Box height={'100%'} width={'100%'}>
      {course.title}
    </Box>
  );
};

export default DetailCard;

export const dynamic = 'force-dynamic';
