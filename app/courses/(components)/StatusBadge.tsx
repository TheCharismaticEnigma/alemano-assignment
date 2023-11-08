// Green, Red, Golden

import { Tag } from '@chakra-ui/react';

interface Props {
  status: CourseStatus;
}

const StatusBadge = ({ status = 'OPEN' }: Props) => {
  const tagColor = {
    OPEN: 'cyan',
    IN_PROGRESS: 'orange',
    CLOSED: 'green',
  };

  return (
    <Tag size={'lg'} variant="subtle" colorScheme={tagColor[status]}>
      {status}
    </Tag>
  );
};

export default StatusBadge;
