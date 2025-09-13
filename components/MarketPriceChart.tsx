
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Wheat', price: 250 },
  { name: 'Corn', price: 180 },
  { name: 'Soybeans', price: 450 },
  { name: 'Cotton', price: 800 },
  { name: 'Rice', price: 320 },
  { name: 'Potatoes', price: 150 },
];

const MarketPriceChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis unit="$" stroke="#64748b" />
          <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} cursor={{fill: 'rgba(34, 197, 94, 0.1)'}} />
          <Legend />
          <Bar dataKey="price" fill="#22c55e" name="Price per Ton (USD)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketPriceChart;
