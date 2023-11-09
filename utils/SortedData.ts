import { CourseQuery } from '@/app/courses/page';
import { CourseInterface as Course } from '@/schemas/courseSchema';

type SortCriteria = 'status' | 'instructor' | 'title';

const sortedCourses = (courses: Course[], orderBy?: string) => {
  if (!orderBy) return;

  const criteria: SortCriteria = orderBy as SortCriteria;

  courses.sort((cA, cB) => {
    if (criteria === 'status') {
      const statusOrder: CourseStatus[] = ['OPEN', 'IN_PROGRESS', 'CLOSED'];
      return (
        statusOrder.indexOf(cA['status']) - statusOrder.indexOf(cB['status'])
      );
    }

    const firstValue = cA[criteria];
    const secondValue = cB[criteria];

    return firstValue.localeCompare(secondValue);
  });
};

export default sortedCourses;
