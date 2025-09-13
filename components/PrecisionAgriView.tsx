
import React from 'react';
import YieldPredictionChart from './YieldPredictionChart';

const PrecisionAgriView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-surface p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Farm Overview Map</h3>
        <div className="bg-slate-200 h-96 rounded-lg flex items-center justify-center">
            <img src="https://picsum.photos/800/400?grayscale" alt="Farm Map" className="w-full h-full object-cover rounded-lg"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface p-5 rounded-xl shadow-sm">
          <h4 className="font-semibold mb-2">Irrigation Schedule</h4>
          <p className="text-text-secondary">Next cycle: Sector B, 4:00 AM</p>
          <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">Adjust Schedule</button>
        </div>
        <div className="bg-surface p-5 rounded-xl shadow-sm">
          <h4 className="font-semibold mb-2">Fertilizer Optimization</h4>
          <p className="text-text-secondary">Recommendation: NPK 15-15-15 for corn fields.</p>
          <button className="mt-4 w-full bg-secondary text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">View Details</button>
        </div>
        <div className="bg-surface p-5 rounded-xl shadow-sm">
          <h4 className="font-semibold mb-2">Pest & Disease Prediction</h4>
          <p className="text-text-secondary">High risk of mildew in Sector D.</p>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors">Preventive Actions</button>
        </div>
      </div>
       <div className="bg-surface p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Crop Yield Analysis</h3>
          <YieldPredictionChart />
        </div>
    </div>
  );
};

export default PrecisionAgriView;
