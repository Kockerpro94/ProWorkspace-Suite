import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Kanban } from './components/Kanban';
import { Calendar } from './components/Calendar';
import { Documents } from './components/Documents';
import { Notifications } from './components/Notifications';
import { View, Task } from './types';

// Mock Tasks for Kanban
const initialTasks: Task[] = [
  { id: 'TSK-124', title: 'Research competitor pricing models for Q4', tag: 'High Priority', tagColor: 'bg-orange-500/20 text-orange-400', priority: 'High', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuB8-fX8HVLzwZ5qzpfCR4AycMZPIe36ZFmPAycv2TEmBMhr-Z2IikA15HqORbgVyT4VIfjJECR4XhUL9TC318E7kvUHeLCP8ucw-qHCr58wf1tillq0rtcR3zZJZ4BCjmGGtCdr6tTv_-3ZIRg0o99kdoGBvvhyaG3tcK_HIB__LVLQfKTTb8kB66hQZ5Wd-wB40QEViThjEbWvuI2ps0IKDJqSRJrJ9zSBW_hXu8wreaVL3Ju886X-qM4QMVVJ57sFB2Yk7dY9MMWs'], comments: 2, attachments: 1, status: 'todo' },
  { id: 'TSK-129', title: 'Update user onboarding flow diagrams', tag: 'Low Priority', tagColor: 'bg-emerald-500/20 text-emerald-400', priority: 'Low', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuATDhXUDBZSNadX0y29WUam5uOSfvze7lULYpOiI-MxxEC2PryZ3fmmbOzOCN8D3-XBql2vkODnE5-sdEgvOWqKuE2hzFjs3NHK_QfAjXhaSjxouANW0P7253mCOSQMj3XxaocU0UWpZWD0o1pd7PLMiCM92TXdOdHsxYHpZoFlSaCNFoletTBX8X9VsP6teG9vRMAF9WOcolLRrE61xL4nYrvycREZlRuVgNC-rNP_4h9gEW5tdpkYiyWXxrjN-TFSfg0Nj_Ganfqb'], comments: 0, attachments: 0, status: 'todo' },
  { id: 'TSK-118', title: 'Fix navigation bug on mobile viewports', tag: 'Bug', tagColor: 'bg-red-500/20 text-red-400', priority: 'High', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDN4cMUEdPOZFf5XN-CRMWVck1mh4lofAjZSYeoGEJQaVQfpEY-8vdSmY2kaQyo2QrziOa99ULrhw4q3p4jWHH4v1Cg26qZ0dsqBW1COzCqqmgJlJLIbskiI6aXITh12jJVlALLDAmrTmrpmGEu96SFNzpCJWXnqnVW_jCIS795bIMZ79Hft5lIytPDC_x935dPrNkATi-4vZu6_gwuOv2KHOspA6YjoHyqFgSOItO5zIz8IbZEJE6T2B7242ueptMKs00klOb2Y1jB'], comments: 3, attachments: 0, status: 'progress' },
  { id: 'TSK-122', title: 'API Integration for Payment Gateway', tag: 'Backend', tagColor: 'bg-purple-500/20 text-purple-400', priority: 'Medium', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBvs2EmyN6SbDgc_lFyEDBHAM_v5VXXOe1ZC6RAc3SermwzawT8MJ7qvAznb_VfaUWVmHg2RnjdSmIZNkTRG43FNfww48bD4Or2SNarXLmEBksE-qLR_nbt5bi7N8ME-tcVCfiL8GQynxrLJmhiBs9ufgYKjKrjGWj8cC8wDXLQxvnLcEH1-P6mU0HcuCaGYnhT28OIKo-JCGuG8q67hshW7XRSAW9Hblo-zsXPFbUZ0IdH9xe0H4ynz-ueFEy-9hSLN50YklL7ypjz'], comments: 0, attachments: 0, status: 'progress' },
  { id: 'TSK-115', title: 'Content review for blog posts', tag: 'Content', tagColor: 'bg-blue-500/20 text-blue-400', priority: 'Medium', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBCrffsJBiselc4bdCcVjXzkbrmjNnIHsxYoAq-hB_CPKhW1Rg_Jox59LHJozE0ukOz0OJBNlyhaHrMBPJlvQV017j2AmpTbP3zMm_M-4FruW_G0_ku3MMfxJZqdJpw3rJKcWSa8WAF3dwFI-a_AzlUNCt85cCQ5wbDdZ37uClPENxSb8ZHcHqi1VWwHSKqsexGJXipi24a7uO4qLvR0RoTiE_ScXmPdifAF1vUR3DTNi5OteuwrN0jtjq7msGhXbl4acr-dFFUyQfN'], comments: 5, attachments: 0, status: 'review' },
  { id: 'TSK-105', title: 'Q3 Marketing Strategy Brainstorm', tag: 'Marketing', tagColor: 'bg-slate-700 text-slate-400', priority: 'Low', assignees: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCI3LQoPLJe4qZo8W8y_iYpIqaYyDzsOHWLD_YNC6Cwk_tuJiTIzxD1KUSKswU2F88h8-Xltphin1pKr2D0pA2Trtl1AF-I2LjZJE7xokdu-QWGRNNDYOIS6WwexEo7lghLQMBABM_7-j6ZZKKlR_-_Z3PaRervmHsprNmSJCaKRFutcMtG0DLWqE49QtnDlNsJvA1PDAonAELsviekobzfuad7WNHabqDH8FNDumnMtyjo476btifzM9x2IMnEWV9j8CvMfZ1edO88'], comments: 1, attachments: 2, status: 'done' },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
      case 'analytics': // Reusing dashboard for simplicity given constraints
        return <Dashboard />;
      case 'tasks':
        return <Kanban tasks={initialTasks} />;
      case 'calendar':
        return <Calendar />;
      case 'documents':
        return <Documents />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-slate-100">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />

      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-surface z-20">
             <div className="flex items-center gap-2">
                <div className="size-8 rounded bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined">grid_view</span></div>
                <h1 className="font-bold">ProSpace</h1>
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
             <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border z-30 shadow-xl">
                 {['dashboard', 'tasks', 'calendar', 'documents', 'analytics'].map((view) => (
                    <button
                        key={view}
                        onClick={() => { setCurrentView(view as View); setIsMobileMenuOpen(false); }}
                        className="block w-full text-left px-6 py-4 text-sm font-medium border-b border-border last:border-0 hover:bg-background"
                    >
                        {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                 ))}
             </div>
        )}

        <div className="flex-1 overflow-hidden flex flex-col relative">
            {/* Top Toolbar overlay (Optional global actions) */}
             <div className="absolute top-6 right-6 z-10 hidden md:flex items-center gap-3">
                 <button 
                    onClick={() => setShowNotifications(true)}
                    className="relative p-2 rounded-full hover:bg-surfaceHighlight transition-colors text-slate-400 hover:text-white"
                 >
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-background"></span>
                 </button>
             </div>

            {renderContent()}
        </div>
      </div>

      {showNotifications && (
        <Notifications onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
};

export default App;
