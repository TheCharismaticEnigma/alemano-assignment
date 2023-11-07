import PageSkeleton from '@/skeletons/PageSkeleton';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const NewCourseForm = dynamic(() => import('../(components)/NewCourseForm'), {
  ssr: false,
  loading: () => <PageSkeleton />,
});

const NewCoursePage = () => {
  return <NewCourseForm />;
};

export default NewCoursePage;

export const metadata: Metadata = {
  title: 'The Assignment - New Course Page',
  description: 'Add new course to the database.',
};

// Optimize - Lazy Load the Heavy Client component only when needed.
