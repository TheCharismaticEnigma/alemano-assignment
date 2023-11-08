import { CourseInterface as Course } from '@/schemas/courseSchema';

interface Props {
  course: Course;
}

const DetailCard = ({ course }: Props) => {
  return <div>{course.title}</div>;
};

export default DetailCard;

export const dynamic = 'force-dynamic';
