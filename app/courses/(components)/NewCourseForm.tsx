/* Form, Schema Validation, Form Validation, Axois Post Request */
'use client';

import {
  Box,
  Button,
  Flex,
  FormControl,
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
} from '@chakra-ui/react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const NewCourseForm = () => {
  const inputStyles = {
    focusBorderColor: 'purple.300',
    borderWidth: '1px',
    variant: 'filled',
    fontSize: 'lg',
    autoComplete: 'off',
  };

  return (
    <Box className="max-w-6xl my-6 p-2 mx-auto ">
      <form className="mx-auto border-2 border-transparent w-full max-w-3xl text-2xl rounded-2xl flex flex-col gap-6 p-6 px-7 bg-gradient-to-tl from-[#212121] to-gray-900 ">
        <FormHeading />

        <FormControl>
          <FormLabel>Course Title</FormLabel>
          <Input
            {...inputStyles}
            type="text"
            placeholder="Course Title"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Instructor Name</FormLabel>
          <Input
            {...inputStyles}
            type="text"
            placeholder="Instructor Name"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            variant={'filled'}
            focusBorderColor="purple.300"
            placeholder="Course Description..."
          />
        </FormControl>

        <FormControl>
          <FormLabel>Prerequisites</FormLabel>
          <Input
            type="text"
            placeholder="JavaScript, React.js, Next.js"
            {...inputStyles}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Course Duration ( weeks)</FormLabel>
          <NumberInput
            variant={'filled'}
            defaultValue={1}
            min={1}
            max={53}
            focusBorderColor="purple.300"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Flex gap={'6'} mt={'3'}>
          <Select
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

        <FormButtonContainer />
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
      className="text-purple-300 underline decoration-wavy underline-offset-8"
    >
      New Course Details
    </Heading>
  );
};

const FormButtonContainer = () => {
  const [isLikedCourse, setLikedStatus] = useState(false);

  return (
    <Flex
      width={'fit-content'}
      alignItems={'center'}
      gap={'8'}
      className="p-2 mt-3 "
    >
      <Button size={'md'} variant={'outline'} colorScheme="purple">
        Add New Course
      </Button>

      <button
        onClick={(e) => {
          e.preventDefault();
          setLikedStatus(!isLikedCourse);
        }}
      >
        <HeartIcon
          fill={(isLikedCourse && 'red') || 'none'}
          color={(isLikedCourse && 'red') || 'purple'}
          pointerEvents={'none'}
          width={40}
        />
      </button>
    </Flex>
  );
};

export default NewCourseForm;
