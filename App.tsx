
import React, { useState } from 'react';
import type { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import PrecisionAgriView from './components/PrecisionAgriView';
import MarketLinkageView from './components/MarketLinkageView';
import KnowledgeBaseView from './components/KnowledgeBaseView';
import FinancialServicesView from './components/FinancialServicesView';
import SystemHealthView from './components/SystemHealthView';
import UserFeedbackView from './components/UserFeedbackView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'precisionAgri':
        return <PrecisionAgriView />;
      case 'marketLinkage':
        return <MarketLinkageView />;
      case 'knowledgeBase':
        return <KnowledgeBaseView />;
      case 'financialServices':
        return <FinancialServicesView />;
      case 'systemHealth':
        return <SystemHealthView />;
      case 'userFeedback':
        return <UserFeedbackView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentView={currentView} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 md:p-8 lg:p-10">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
