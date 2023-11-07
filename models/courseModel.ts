import mongoose, { Schema } from 'mongoose';

/*
1) Course name
2) Instructor's name
3) Description
4) Enrollment status (e.g., 'Open', 'Closed', 'In Progress')
5) Course duration
6) Schedule
7) Location
8) Pre-requisites
9) Syllabus as an expandable item
*/

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 3,
    maxLength: 255,
  },

  instructor: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 255,
  },

  description: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 500,
  },

  status: {
    type: String,
    default: 'OPEN',
    required: true,
    enum: ['OPEN', 'IN_PROGRESS', 'CLOSED'],
  },

  //   Weeks
  duration: {
    type: Number,
    required: true,
    default: 1,
    min: 1,
    max: 53,
  },

  schedule: {
    type: String,
    default: 'Monday - Friday, 10:00 AM - 5:00 PM',
  },

  // Mode
  location: {
    type: String,
    required: true,
    default: 'OFFLINE',
    enum: ['ONLINE', 'OFFLINE', 'HYBRID'],
  },

  prerequisites: {
    type: [String],
    default: ['Basic JavaScript knowledge', 'Familiarity with React'],
  },

  isLiked: {
    type: Boolean,
    default: false,
  },

  syllabus: {
    type: [
      {
        week: String,
        topic: String,
        content: String,
      },
    ],

    default: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content:
          'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
    ],
  },
});

export const Course =
  mongoose.models.courses || mongoose.model('courses', courseSchema);
