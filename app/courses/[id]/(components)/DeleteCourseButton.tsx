'use client';

import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const DeleteCourseButton = () => {
  const params = useParams();
  const router = useRouter();

  const [isDeleting, setIsDeleting] = useState(false);

  const deleteCourse = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/courses/${params.id}`);
      router.push('/courses');
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      onClick={deleteCourse}
      disabled={isDeleting}
      isLoading={isDeleting}
      colorScheme="red"
      variant="outline"
    >
      Delete Course
    </Button>
  );
};

export default DeleteCourseButton;
