import { CourseInterface as Course } from '@/schemas/courseSchema';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { HandThumbDownIcon, HeartIcon } from '@heroicons/react/24/outline';

interface Props {
  course: Course;
}

type CourseKeys =
  | 'description'
  | 'duration'
  | 'location'
  | 'status'
  | 'prerequisites'
  | 'schedule';

const DetailCard = ({ course }: Props) => {
  const cardKeys: CourseKeys[] = [
    'description',
    'location',
    'duration',
    'status',
    'schedule',
    'prerequisites',
  ];

  const { description, duration, location, status, prerequisites, schedule } =
    course;

  return (
    <Card
      variant={'filled'}
      borderRadius={'lg'}
      height={'100%'}
      width={'100%'}
      fontFamily={'cursive'}
      className="px-2 py-1 bg-gradient-to-br from-gray-800 via-[#212121] to-gray-900 shadow-sm shadow-indigo-400"
    >
      <CourseCardHeader course={course} />

      <CardBody>
        <Stack divider={<StackDivider />} spacing="5">
          {cardKeys.map((key) => {
            const cardContent = course[key] as string;
            return <ContentBox key={key} heading={key} content={cardContent} />;
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

const CourseCardHeader = ({ course }: { course: Course }) => {
  const { title, isLiked, instructor } = course;

  return (
    <CardHeader>
      <Stack spacing={4}>
        <Heading size="lg">{title}</Heading>
        <Flex
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={6}
          width={'95%'}
        >
          <Heading size="md">BY - {instructor}</Heading>

          {isLiked && (
            <Tooltip label="Liked Course" fontSize="sm">
              <HeartIcon fill="red" color="red" width={40} />
            </Tooltip>
          )}

          {!isLiked && (
            <Tooltip label="Disliked Course" fontSize="sm">
              <HandThumbDownIcon fill="violet" color="violet" width={40} />
            </Tooltip>
          )}
        </Flex>
      </Stack>
    </CardHeader>
  );
};

interface ContentBoxProps {
  heading: string;
  content: string;
}
const ContentBox = ({ heading, content }: ContentBoxProps) => {
  return (
    <Box>
      <Heading size="sm" textTransform="uppercase">
        {heading.toUpperCase()}
      </Heading>
      <Text pt="2" fontSize="md">
        {`${content}`}
      </Text>
    </Box>
  );
};

export const dynamic = 'force-dynamic';
export default DetailCard;
