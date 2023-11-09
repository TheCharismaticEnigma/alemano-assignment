/* Form, Schema Validation, Form Validation, Axois Post Request */
'use client';

import { CourseInterface, CourseSchema } from '@/schemas/courseSchema';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
  Tooltip,
} from '@chakra-ui/react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const NewCourseForm = () => {
  const inputStyles = {
    focusBorderColor: 'purple.300',
    borderWidth: '1px',
    variant: 'filled',
    fontSize: 'lg',
    autoComplete: 'off',
  };

  const [isLikedCourse, setLikedStatus] = useState(false);
  const router = useRouter();

  // Form Validation and Submission Logic
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    getValues,
  } = useForm<CourseInterface>({
    resolver: zodResolver(CourseSchema),
  });

  const onSubmit = handleSubmit(async (data, event) => {
    try {
      await axios.post(`/api/courses`, {
        ...data,
        isLiked: isLikedCourse,
      });
    } catch (error) {
      throw error;
    }

    reset();
    router.push('/');
    router.refresh();
  });

  return (
    <Box className="max-w-6xl my-6 p-2 mx-auto ">
      <form
        onSubmit={onSubmit}
        className="mx-auto border-2 border-transparent w-full max-w-3xl text-2xl rounded-2xl flex flex-col gap-6 p-6 px-7 bg-gradient-to-tl from-[#212121] to-gray-900 "
      >
        <FormHeading />

        <FormControl isInvalid={errors.title ? true : false}>
          <FormLabel htmlFor="title">Course Title</FormLabel>
          <Input
            {...inputStyles}
            {...register('title')}
            type="text"
            placeholder="Course Title"
            required
          />

          {errors.title && (
            <FormErrorMessage>{errors.title.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={errors.instructor ? true : false}>
          <FormLabel htmlFor="instructor">Instructor Name</FormLabel>
          <Input
            id="instructor"
            {...register('instructor')}
            {...inputStyles}
            type="text"
            placeholder="Instructor Name"
            required
          />

          {errors.instructor && (
            <FormErrorMessage>{errors.instructor.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={errors.description ? true : false}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            {...register('description')}
            variant={'filled'}
            focusBorderColor="purple.300"
            placeholder="Course Description..."
          />

          {errors.description && (
            <FormErrorMessage>{errors.description.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="duration">Course Duration (weeks)</FormLabel>

          <NumberInput
            id="duration"
            variant={'filled'}
            defaultValue={1}
            focusBorderColor="purple.300"
            min={1}
            max={53}
          >
            <NumberInputField
              {...register('duration', {
                valueAsNumber: true,
                min: 1,
                max: 53,
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          {errors.duration && (
            <FormErrorMessage>{errors.duration.message}</FormErrorMessage>
          )}
        </FormControl>

        <Flex gap={'6'} mt={'3'}>
          <Select
            {...register('status')}
            defaultValue={'OPEN'}
            variant={'filled'}
            focusBorderColor="purple.300"
          >
            <option disabled>Course Status</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="CLOSED">Closed</option>
          </Select>

          <Select
            {...register('location')}
            defaultValue={'OFFLINE'}
            variant={'filled'}
            focusBorderColor="purple.300"
          >
            <option disabled>Course Structure / Location</option>
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
            <option value="HYBRID">Hybrid </option>
          </Select>
        </Flex>

        <Flex
          width={'fit-content'}
          alignItems={'center'}
          gap={'8'}
          className="p-2 mt-3 "
        >
          <Button
            type="submit"
            isLoading={isSubmitting}
            size={'md'}
            variant={'outline'}
            colorScheme="purple"
          >
            Add New Course
          </Button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setLikedStatus(!isLikedCourse);
            }}
          >
            <Tooltip
              label={`${isLikedCourse ? 'UNLIKE' : 'LIKE'} COURSE`}
              placement="right"
              fontSize="sm"
            >
              <HeartIcon
                fill={(isLikedCourse && 'red') || 'none'}
                color={(isLikedCourse && 'red') || 'purple'}
                pointerEvents={'inherit'}
                width={40}
              />
            </Tooltip>
          </button>
        </Flex>
      </form>
    </Box>
  );
};

const FormHeading = () => {
  return (
    <Heading
      marginBottom={'3'}
      textAlign={'center'}
      size={'lg'}
      fontWeight={'medium'}
      className="text-purple-300"
    >
      New Course Details
    </Heading>
  );
};

export default NewCourseForm;
