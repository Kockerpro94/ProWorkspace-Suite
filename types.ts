export type View = 'dashboard' | 'tasks' | 'calendar' | 'documents' | 'analytics';

export interface User {
  name: string;
  avatar: string;
  role?: string;
}

export interface Task {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  priority: 'High' | 'Medium' | 'Low';
  assignees: string[];
  comments: number;
  attachments: number;
  dueDate?: string;
  status: 'todo' | 'progress' | 'review' | 'done';
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'ppt' | 'xls' | 'zip';
  editedBy: string;
  editedTime: string;
  thumbnail: string;
  selected?: boolean;
}

export interface KPICard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  colorClass: string;
}
