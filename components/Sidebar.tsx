
import React from 'react';
import type { ViewType, NavItem } from '../types';
import { DashboardIcon, LeafIcon, ChartBarIcon, BookOpenIcon, CreditCardIcon, ChipIcon, ChatAlt2Icon } from './Icons';

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
  { id: 'precisionAgri', label: 'Precision Agri', icon: LeafIcon },
  { id: 'marketLinkage', label: 'Market Linkage', icon: ChartBarIcon },
  { id: 'knowledgeBase', label: 'Knowledge Base', icon: BookOpenIcon },
  { id: 'financialServices', label: 'Financial Services', icon: CreditCardIcon },
  { id: 'systemHealth', label: 'System Health', icon: ChipIcon },
  { id: 'userFeedback', label: 'User Feedback', icon: ChatAlt2Icon },
];

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  return (
    <aside className="w-64 bg-surface flex-shrink-0 border-r border-slate-200 flex flex-col">
      <div className="h-16 flex items-center justify-center px-4 border-b border-slate-200">
        <LeafIcon className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold ml-2 text-text-primary">AgriSphere</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
              currentView === item.id
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:bg-slate-100 hover:text-text-primary'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center">
            <img src="https://picsum.photos/40" alt="Admin" className="rounded-full h-10 w-10"/>
            <div className="ml-3">
                <p className="text-sm font-semibold text-text-primary">Admin User</p>
                <p className="text-xs text-text-secondary">admin@agrisphere.io</p>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
