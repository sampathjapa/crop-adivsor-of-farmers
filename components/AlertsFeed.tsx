
import React from 'react';
import type { Alert } from '../types';
import { AlertLevel } from '../types';

const alerts: Alert[] = [
  { id: '1', level: AlertLevel.Critical, title: 'Severe Pest Outbreak', message: 'Locust swarm detected in North Quadrant.', timestamp: '2 mins ago' },
  { id: '2', level: AlertLevel.Warning, title: 'Frost Warning', message: 'Temperatures expected to drop below 0°C tonight.', timestamp: '1 hour ago' },
  { id: '3', level: AlertLevel.Info, title: 'Irrigation Complete', message: 'Sector 4 irrigation cycle has finished.', timestamp: '3 hours ago' },
  { id: '4', level: AlertLevel.Warning, title: 'Low Soil Moisture', message: 'Moisture levels in Sector 2 are critically low.', timestamp: '5 hours ago' },
];

const alertColors = {
  [AlertLevel.Critical]: 'bg-red-100 border-red-500 text-red-700',
  [AlertLevel.Warning]: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  [AlertLevel.Info]: 'bg-blue-100 border-blue-500 text-blue-700',
};

const AlertItem: React.FC<{ alert: Alert }> = ({ alert }) => {
  return (
    <div className={`p-4 rounded-lg border-l-4 ${alertColors[alert.level]}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold">{alert.title}</p>
          <p className="text-sm">{alert.message}</p>
        </div>
        <p className="text-xs text-slate-500 flex-shrink-0 ml-2">{alert.timestamp}</p>
      </div>
    </div>
  );
};

const AlertsFeed: React.FC = () => {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {alerts.map(alert => <AlertItem key={alert.id} alert={alert} />)}
    </div>
  );
};

export default AlertsFeed;
