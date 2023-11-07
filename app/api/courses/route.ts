// GET all courses and Post a new course

import { connectToDatabase } from '@/dbConfig/dbConfig';
import { Course } from '@/models/courseModel';
import { CourseInterface } from '@/schemas/courseSchema';
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

export async function POST(request: NextRequest) {
  // Add a new course to the course list.
}
