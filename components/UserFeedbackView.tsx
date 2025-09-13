
import React from 'react';
import type { Feedback } from '../types';

const feedbackData: Feedback[] = [
  { id: '1', user: 'Farmer John', rating: 5, comment: 'The new yield prediction is incredibly accurate!', timestamp: '2 hours ago' },
  { id: '2', user: 'Maria G.', rating: 4, comment: 'The app is great, but sometimes slow in my area.', timestamp: '1 day ago' },
  { id: '3', user: 'K. Singh', rating: 3, comment: 'I had trouble understanding the irrigation schedule.', timestamp: '2 days ago' },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

const UserFeedbackView: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Recent User Feedback</h3>
                <div className="space-y-4">
                    {feedbackData.map(fb => (
                        <div key={fb.id} className="p-4 border rounded-lg">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold">{fb.user}</p>
                                    <p className="text-sm text-text-secondary mt-1">{`"${fb.comment}"`}</p>
                                </div>
                                <div className="text-right ml-4">
                                    <StarRating rating={fb.rating} />
                                    <p className="text-xs text-slate-400 mt-1">{fb.timestamp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">A/B Testing Results</h3>
                <div>
                    <h4 className="font-semibold">Test: New "Marketplace" Button Color</h4>
                    <div className="flex items-center space-x-8 mt-2">
                        <div>
                            <p className="text-sm text-text-secondary">Control (Green)</p>
                            <p className="text-xl font-bold">12.5% CTR</p>
                        </div>
                        <div>
                            <p className="text-sm text-text-secondary">Variant (Blue)</p>
                            <p className="text-xl font-bold text-primary">15.2% CTR (Winner)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserFeedbackView;
