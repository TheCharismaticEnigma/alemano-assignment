import { CourseStats } from '@/app/page';
import { CourseInterface } from '@/schemas/courseSchema';

type FetchCourseStats = (courses: CourseInterface[]) => CourseStats;

const getCourseStats: FetchCourseStats = (courses) => {
  let openCount = 0;
  let inProgressCount = 0;
  let closedCount = 0;

  courses.forEach(({ status }) => {
    switch (status) {
      case 'OPEN': {
        openCount++;
        break;
      }
      case 'IN_PROGRESS': {
        inProgressCount++;
        break;
      }
      case 'CLOSED': {
        closedCount++;
        break;
      }
    }
  });

  return {
    openCount,
    inProgressCount,
    closedCount,
  } as CourseStats;
};

export default getCourseStats;
