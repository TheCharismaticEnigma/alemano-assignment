// Get courses and searchParams and return filtered results

import { CourseQuery } from '@/app/courses/page';
import { CourseInterface } from '@/schemas/courseSchema';

type FilteredCourses = (
  courses: CourseInterface[],
  searchParams: CourseQuery
) => CourseInterface[];

const getFilteredCourses: FilteredCourses = (courses, searchParams) => {
  const { status, instructor, page = '1', pageSize = '5' } = searchParams;

  if (status) {
    const statusFilteredCourses = courses.filter((c) => c.status === status);
    refillArray(courses, statusFilteredCourses);
  }

  if (instructor) {
    const commonInstructorCourses = courses.filter(
      (c) => c.instructor === instructor
    );

    refillArray(courses, commonInstructorCourses);
  }

  // Filter Based on page Number and pageSize
  const pageNumber = parseInt(page);
  const itemsPerPage = parseInt(pageSize);
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = Math.min(courses.length, startIndex + itemsPerPage);

  const renderedCourses = courses.slice(startIndex, endIndex);

  if (itemsPerPage > courses.length) refillArray(renderedCourses, courses);

  return renderedCourses;
};

const refillArray = (
  oldArray: CourseInterface[],
  newArray: CourseInterface[]
) => {
  oldArray.length = 0;
  oldArray.push(...newArray);
};

export default getFilteredCourses;
