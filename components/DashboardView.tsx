
import React from 'react';
import DashboardCard from './DashboardCard';
import { LeafIcon, ChartBarIcon, CreditCardIcon, BellIcon } from './Icons';
import YieldPredictionChart from './YieldPredictionChart';
import MarketPriceChart from './MarketPriceChart';
import AlertsFeed from './AlertsFeed';

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Active Farms" value="12,450" change="+5.2%" changeType="increase" icon={LeafIcon} />
        <DashboardCard title="Total Yield (Tons)" value="8,920" change="+12.8%" changeType="increase" icon={ChartBarIcon} />
        <DashboardCard title="Transactions" value="$1.2M" change="+8.1%" changeType="increase" icon={CreditCardIcon} />
        <DashboardCard title="Critical Alerts" value="17" change="-3" changeType="decrease" icon={BellIcon} />
      </div>

      {/* Charts and Alerts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Yield Prediction (Next 6 Months)</h3>
          <YieldPredictionChart />
        </div>
        <div className="bg-surface p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Early Warnings</h3>
          <AlertsFeed />
        </div>
      </div>

      {/* Market Prices */}
      <div className="bg-surface p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Market Prices</h3>
        <MarketPriceChart />
      </div>
    </div>
  );
};

export default DashboardView;
