
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', corn: 4000, wheat: 2400 },
  { name: 'Feb', corn: 3000, wheat: 1398 },
  { name: 'Mar', corn: 2000, wheat: 9800 },
  { name: 'Apr', corn: 2780, wheat: 3908 },
  { name: 'May', corn: 1890, wheat: 4800 },
  { name: 'Jun', corn: 2390, wheat: 3800 },
];

const YieldPredictionChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} />
          <Legend />
          <Line type="monotone" dataKey="corn" stroke="#22c55e" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="wheat" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YieldPredictionChart;
