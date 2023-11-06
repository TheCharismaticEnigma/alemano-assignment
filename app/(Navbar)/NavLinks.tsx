import { Tab, TabList, Tabs } from '@chakra-ui/react';

const NavLinks = () => {
  return (
    <Tabs
      variant={'soft-rounded'}
      colorScheme="purple"
      fontWeight={'medium'}
      className="px-4 text-black"
    >
      <TabList gap={'3'}>
        <Tab color={'black'}>Dashboard</Tab>
        <Tab color={'black'}>All Courses</Tab>
        <Tab color={'black'}>New Course</Tab>
      </TabList>
    </Tabs>
  );
};

export default NavLinks;
