
import React from 'react';
import type { KnowledgeArticle } from '../types';

const articles: KnowledgeArticle[] = [
  { id: '1', title: 'Best Practices for Corn Fertilization', type: 'Video', author: 'Dr. Jane Doe', date: '2024-07-15' },
  { id: '2', title: 'Identifying Common Wheat Diseases', type: 'Infographic', author: 'Agri University', date: '2024-07-12' },
  { id: '3', title: 'Quiz: Soil Health Basics', type: 'Quiz', author: 'Admin', date: '2024-07-10' },
  { id: '4', title: 'Effective Irrigation Techniques', type: 'Video', author: 'Dr. John Smith', date: '2024-07-08' },
];

const KnowledgeBaseView: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-text-primary">Content Management</h3>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    Add New Content
                </button>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">Title</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Author</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(article => (
                                <tr key={article.id} className="border-b hover:bg-slate-50">
                                    <td className="p-3 font-medium">{article.title}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            article.type === 'Video' ? 'bg-blue-100 text-blue-800' :
                                            article.type === 'Infographic' ? 'bg-green-100 text-green-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>{article.type}</span>
                                    </td>
                                    <td className="p-3 text-text-secondary">{article.author}</td>
                                    <td className="p-3 text-text-secondary">{article.date}</td>
                                    <td className="p-3">
                                        <button className="text-secondary hover:underline">Edit</button>
                                        <button className="text-red-500 hover:underline ml-4">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Community Forum Activity</h3>
                <p className="text-text-secondary">34 new posts and 128 comments today.</p>
            </div>
        </div>
    );
};

export default KnowledgeBaseView;
