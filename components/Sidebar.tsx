import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView }) => {
  const navItems: { id: View; icon: string; label: string }[] = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'tasks', icon: 'view_kanban', label: 'Tasks' },
    { id: 'calendar', icon: 'calendar_today', label: 'Calendar' },
    { id: 'documents', icon: 'folder', label: 'Files' },
    { id: 'analytics', icon: 'bar_chart', label: 'Analytics' },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-border flex-col justify-between hidden md:flex z-20">
      <div>
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
             <span className="material-symbols-outlined text-white">grid_view</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">ProSpace</h1>
            <p className="text-xs text-slate-400">Enterprise</p>
          </div>
        </div>

        <nav className="px-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentView === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-400 hover:bg-surfaceHighlight hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${currentView === item.id ? 'filled' : ''}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
          
          <div className="mt-6 mb-2 px-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Workflows</div>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-surfaceHighlight hover:text-white text-sm font-medium transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Design Sprint
          </button>
           <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-surfaceHighlight hover:text-white text-sm font-medium transition-all">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Mobile App
          </button>
        </nav>
      </div>

      <div className="p-4 border-t border-border">
         <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-400 hover:bg-surfaceHighlight hover:text-white text-sm font-medium transition-all">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
          <div className="mt-4 flex items-center gap-3 p-2 rounded-lg bg-surfaceHighlight/50 border border-border">
            <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9Wk2r3xXVNTdsql-rulD6WFrOrN6DZDYEZ90CnBFJbvd-3cLXC31B_re--lKy0vXQoEoRTibv74xnDGjtKsbsDQxIMIg0Uagdf3fJhq7nn6su9SCbYTxQahThqp4bgjGWhsUm2tphdCdh6rYm3J8lMk2sghJdLmD_6_8eC7CihsLd4BuJKEtU8vDEcL_XDGDWTshn_IOr_QYlGhQkqT5NVHE82lWKtIbRQmpg-wdnpiEIdzUJQ8uGVurMLuR-CHCB1GGjh5F_n56z")'}}></div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Jane Cooper</p>
                <p className="text-xs text-slate-400 truncate">jane@pro.com</p>
            </div>
          </div>
      </div>
    </aside>
  );
};
