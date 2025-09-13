
import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ComponentType<{ className?: string }>;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, change, changeType, icon: Icon }) => {
  const isIncrease = changeType === 'increase';
  const changeColor = changeType ? (isIncrease ? 'text-green-500' : 'text-red-500') : 'text-text-secondary';
  
  return (
    <div className="bg-surface p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-text-secondary">{title}</p>
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-text-primary">{value}</p>
        {change && (
          <div className="flex items-center mt-1 text-sm">
            <span className={changeColor}>{change}</span>
            <span className="text-text-secondary ml-1">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
