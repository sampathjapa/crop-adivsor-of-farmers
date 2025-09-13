
import React from 'react';
import type { SystemService } from '../types';

const services: SystemService[] = [
  { name: 'Mobile App API', status: 'Operational', details: 'All systems normal.' },
  { name: 'Django Backend', status: 'Operational', details: '200 OK at 99.9% uptime.' },
  { name: 'Data Analytics Engine', status: 'Operational', details: 'ML models running as expected.' },
  { name: 'IoT Integration Module', status: 'Degraded', details: 'High latency detected from Sector G sensors.' },
  { name: 'Weather API Integration', status: 'Operational', details: 'Connected and receiving data.' },
  { name: 'Govt. Database Sync', status: 'Operational', details: 'Last sync: 5 minutes ago.' },
  { name: 'Payment Gateway', status: 'Offline', details: 'Third-party provider experiencing an outage.' },
];

const StatusIndicator: React.FC<{ status: SystemService['status'] }> = ({ status }) => {
    const color = status === 'Operational' ? 'bg-green-500' : status === 'Degraded' ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <div className="flex items-center">
            <span className={`h-3 w-3 rounded-full ${color} mr-2`}></span>
            <span>{status}</span>
        </div>
    );
};


const SystemHealthView: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Core Components Status</h3>
                <div className="space-y-4">
                    {services.map(service => (
                        <div key={service.name} className="flex justify-between items-center p-4 border rounded-lg hover:bg-slate-50">
                           <div>
                                <p className="font-semibold">{service.name}</p>
                                <p className="text-sm text-text-secondary">{service.details}</p>
                           </div>
                           <div className="w-40 text-right">
                                <StatusIndicator status={service.status} />
                           </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Cloud Infrastructure (AWS)</h4>
                    <p className="text-text-secondary">EC2 Instances: 12 | RDS: 2 | S3 Buckets: 5</p>
                    <p className="text-green-500 mt-2">All systems operational.</p>
                </div>
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">CDN Performance (Cloudflare)</h4>
                    <p className="text-text-secondary">Cache Hit Ratio: 97.3%</p>
                     <p className="text-text-secondary">Average Latency: 45ms</p>
                </div>
            </div>
        </div>
    );
};

export default SystemHealthView;
