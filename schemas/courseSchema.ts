import { z } from 'zod';

// _id: String is generated by DB implicitly, so we keep it optional.
const syllabusSchema = z.object({
  week: z.number(),
  topic: z.string(),
  content: z.string(),
});

export const CourseSchema = z.object({
  _id: z.string().optional(),
  title: z.string().trim().min(3).max(255),
  instructor: z.string().trim().min(3).max(255),
  description: z.string().trim().min(3).max(500),
  status: z.enum(['OPEN', 'IN_PROGRESS', 'CLOSED']).default('OPEN'),
  location: z.enum(['ONLINE', 'OFFLINE', 'HYBRID']).default('OFFLINE'),
  isLiked: z.boolean().default(false),
  duration: z.number().min(1).max(53).default(1),
  schedule: z.string().default('Monday - Friday, 10:00 AM - 5:00 PM'),

  prerequisites: z
    .array(z.string())
    .default(['JavaScript knowledge', 'React Competence']),

  syllabus: z.array(syllabusSchema).default([
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
  ]),
});

export type Course = z.infer<typeof CourseSchema>;
