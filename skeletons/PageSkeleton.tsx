import { Box, SkeletonCircle, Skeleton, SkeletonText } from '@chakra-ui/react';

const PageSkeleton = () => {
  return (
    <Box
      padding="6"
      boxShadow="lg"
      className="w-full bg-gradient-to-br from-[#232323] to-gray-900 max-w-3xl mx-auto my-6 rounded-2xl"
    >
      <SkeletonCircle size="5rem" />
      <Skeleton mt={'5'} borderRadius={'2xl'}>
        <div>contents wrapped</div>
        <div>Won be visible</div>
      </Skeleton>
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />

      <Skeleton mt={'5'} mb={'5'} borderRadius={'2xl'}>
        <div>contents wrapped</div>
        <div>Won be visible</div>
      </Skeleton>

      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
};

export default PageSkeleton;
