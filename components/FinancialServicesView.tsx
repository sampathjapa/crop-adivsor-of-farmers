
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const transactionData = [
  { name: 'Jan', value: 240000 },
  { name: 'Feb', value: 310000 },
  { name: 'Mar', value: 290000 },
  { name: 'Apr', value: 450000 },
  { name: 'May', value: 480000 },
  { name: 'Jun', value: 510000 },
];

const FinancialServicesView: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Total Transactions</h4>
                    <p className="text-3xl font-bold">$1.24M</p>
                    <p className="text-green-500 text-sm">+15% this month</p>
                </div>
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Active Micro-loans</h4>
                    <p className="text-3xl font-bold">852</p>
                    <p className="text-text-secondary">Avg. loan size: $500</p>
                </div>
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Insurance Claims</h4>
                    <p className="text-3xl font-bold">42</p>
                    <p className="text-text-secondary">Automated processing rate: 95%</p>
                </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Monthly Transaction Volume</h3>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart data={transactionData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="name" stroke="#64748b" />
                            <YAxis unit="$" tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value as number)} stroke="#64748b" />
                            <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)} />
                            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} name="Volume"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default FinancialServicesView;
