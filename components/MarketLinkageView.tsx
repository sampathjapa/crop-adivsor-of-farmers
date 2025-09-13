
import React from 'react';
import type { MarketPrice } from '../types';
import MarketPriceChart from './MarketPriceChart';

const marketData: MarketPrice[] = [
    { crop: "Wheat", price: 255.50, change: 2.75 },
    { crop: "Corn", price: 182.30, change: -1.40 },
    { crop: "Soybeans", price: 451.00, change: 5.20 },
    { crop: "Cotton", price: 805.75, change: -3.10 },
    { crop: "Rice", price: 318.90, change: 1.15 },
    { crop: "Coffee", price: 1540.60, change: 22.80 },
];

const MarketLinkageView: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Real-time Market Prices (per Ton)</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">Crop</th>
                                <th className="p-3">Price (USD)</th>
                                <th className="p-3">Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marketData.map((item) => (
                                <tr key={item.crop} className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-medium">{item.crop}</td>
                                    <td className="p-3">${item.price.toFixed(2)}</td>
                                    <td className={`p-3 font-semibold ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Price Trends</h3>
                <MarketPriceChart />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Input Procurement Orders</h4>
                    <p className="text-3xl font-bold">4,281</p>
                    <p className="text-text-secondary">New orders this week</p>
                </div>
                <div className="bg-surface p-5 rounded-xl shadow-sm">
                    <h4 className="font-semibold mb-2">Blockchain Traceability</h4>
                    <p className="text-3xl font-bold">1,500+</p>
                    <p className="text-text-secondary">Products with verified origins</p>
                </div>
            </div>
        </div>
    );
};

export default MarketLinkageView;
