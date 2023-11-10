'use client'; // Rechart Library Convention.

import { Card } from '@chakra-ui/react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { CourseStats } from '../page';

interface Props {
  stats: CourseStats;
}

const Graph = ({ stats }: Props) => {
  const { closedCount, inProgressCount, openCount } = stats;

  const data = [
    { label: 'Open', value: openCount },
    { label: 'In Progress', value: inProgressCount },
    { label: 'Closed', value: closedCount },
  ];

  return (
    <Card className="p-2 rounded-lg w-full shadow-sm shadow-violet-400 bg-gradient-to-tl from-[#121212] via-[#232323] to-gray-900">
      <ResponsiveContainer width={'100%'} height={400}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={40} fill={'#30A46C'} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Graph;
