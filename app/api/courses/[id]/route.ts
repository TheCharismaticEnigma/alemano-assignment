// Delete and Patch

import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: {
    id: string;
  };
}

// route handlers receive route params too
// axios.delete('/api/courses/ID')

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  try {
    const preExistingCourse: CourseInterface | null = await Course.findOne({
      _id: id,
    });

    console.log(preExistingCourse);

    if (!preExistingCourse)
      return NextResponse.json(
        {
          error: 'No Such Course Exists. Verify the Course Id',
        },
        { status: 500 }
      );

    const deletedIssue = await Course.findOneAndDelete({ _id: id });

    return NextResponse.json(
      {
        message: 'Course deleted Successfully!',
        success: true,
        deletedIssue,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Something went wrong. Please verify the ID or try again later.',
      },
      { status: 500 }
    );
  }
}
