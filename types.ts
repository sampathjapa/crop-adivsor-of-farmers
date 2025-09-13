
export type ViewType = 
  | 'dashboard'
  | 'precisionAgri'
  | 'marketLinkage'
  | 'knowledgeBase'
  | 'financialServices'
  | 'systemHealth'
  | 'userFeedback';

export interface NavItem {
  id: ViewType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum AlertLevel {
  Info = 'Info',
  Warning = 'Warning',
  Critical = 'Critical',
}

export interface Alert {
  id: string;
  level: AlertLevel;
  title: string;
  message: string;
  timestamp: string;
}

export interface MarketPrice {
  crop: string;
  price: number;
  change: number;
}

export interface SystemService {
  name: string;
  status: 'Operational' | 'Degraded' | 'Offline';
  details: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  type: 'Video' | 'Infographic' | 'Quiz';
  author: string;
  date: string;
}

export interface Feedback {
  id: string;
  user: string;
  rating: number;
  comment: string;
  timestamp: string;
}
