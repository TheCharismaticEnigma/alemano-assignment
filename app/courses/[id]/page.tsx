import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
import PageSkeleton from '@/skeletons/PageSkeleton';
import { Grid, GridItem } from '@chakra-ui/react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import CourseActionContainer from './(components)/CourseActionContainer';

const DetailCard = dynamic(() => import('./(components)/DetailCard'), {
  ssr: true,
  loading: () => <PageSkeleton />,
});

// Route Handlers are called only from client comps.
interface Props {
  params: { id: string };
}
const CourseDetailsPage = async ({ params }: Props) => {
  const { id } = params;

  const course: CourseInterface | null = await Course.findById({ _id: id })!;
  if (!course) notFound();

  return (
    <Grid
      gap={8}
      templateColumns={{
        base: 'repeat(1,1fr)',
        sm: 'repeat(1,1fr)',
        md: 'repeat(3,1fr)',
      }}
      templateRows={{
        base: '1fr 250px',
        sm: '1fr 250px',
        md: 'repeat(1,1fr)',
      }}
      className="mt-8 p-8 w-full max-w-5xl shadow-sm shadow-indigo-400 rounded-xl mx-auto
                   bg-gradient-to-tr from-[#212323] to-gray-900"
    >
      <GridItem
        colSpan={{
          base: 1,
          sm: 1,
          md: 2,
        }}
      >
        <DetailCard course={course} />
      </GridItem>

      <GridItem>
        <CourseActionContainer />
      </GridItem>
    </Grid>
  );
};

export default CourseDetailsPage;

export const metadata: Metadata = {
  title: 'Course Detail Page',
  description: 'This page contains all the details regarding a course.',
};
