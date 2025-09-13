
import React from 'react';
import type { ViewType } from '../types';
import { BellIcon, ChevronDownIcon, SearchIcon } from './Icons';

interface HeaderProps {
  currentView: ViewType;
}

const viewTitles: Record<ViewType, string> = {
  dashboard: 'Dashboard Overview',
  precisionAgri: 'Precision Agriculture',
  marketLinkage: 'Market Linkage',
  knowledgeBase: 'Knowledge Base',
  financialServices: 'Financial Services',
  systemHealth: 'System Health',
  userFeedback: 'User Feedback & A/B Testing',
};

const Header: React.FC<HeaderProps> = ({ currentView }) => {
  return (
    <header className="h-16 bg-surface border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
      <h2 className="text-xl font-semibold text-text-primary">{viewTitles[currentView]}</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
          <BellIcon className="h-6 w-6 text-text-secondary" />
        </button>
        <div className="flex items-center space-x-2 cursor-pointer">
          <img className="h-9 w-9 rounded-full" src="https://picsum.photos/id/237/36/36" alt="User" />
          <span className="text-sm font-medium text-text-primary hidden md:block">Admin</span>
          <ChevronDownIcon className="h-5 w-5 text-text-secondary hidden md:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;
