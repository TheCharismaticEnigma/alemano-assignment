// GET all courses and Post a new course

import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import { CourseInterface, CourseSchema } from '@/schemas/courseSchema';
import { NextRequest, NextResponse } from 'next/server';

connectToDatabase();

// If no request param, then results are cached.
export async function GET(request: NextRequest) {
  try {
    // If not authenticated, then throw an error.
    const courses: CourseInterface[] = await Course.find();

    if (!courses) {
      return NextResponse.json({
        courses: {},
      });
    }

    return NextResponse.json(
      {
        message: 'Courses sent successfully.',
        success: true,
        courses,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}

// Edge Cases: Invalid body structure | Already existing title
export async function POST(request: NextRequest) {
  try {
    const body: CourseInterface = await request.json();

    const validation = CourseSchema.safeParse(body);

    // Not a valid course structure/schema
    if (!validation.success)
      return NextResponse.json(
        {
          error:
            'The provided structure for the course does not match the schema. Please check again. ',
        },
        { status: 400 }
      );

    // Check if a course w/ similar title exists or not
    const preExistingCourse = await Course.findOne({ title: body.title });
    if (preExistingCourse)
      return NextResponse.json(
        {
          error: 'Course with similar title already exists.',
        },
        { status: 400 }
      );

    const newCourse = new Course(body);
    const savedCourse = await newCourse.save();

    return NextResponse.json(
      {
        success: true,
        message: 'New course added successfully.',
        course: savedCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Something went wrong.',
      },
      { status: 500 }
    );
  }
}
