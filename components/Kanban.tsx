import React from 'react';
import { Task } from '../types';

interface KanbanProps {
  tasks: Task[];
}

export const Kanban: React.FC<KanbanProps> = ({ tasks }) => {
  const columns = [
    { id: 'todo', label: 'To Do', color: 'bg-slate-500' },
    { id: 'progress', label: 'In Progress', color: 'bg-primary' },
    { id: 'review', label: 'Review', color: 'bg-amber-500' },
    { id: 'done', label: 'Done', color: 'bg-emerald-500' },
  ];

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden p-6">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Sprint 24 Board</h2>
            <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="size-8 rounded-full border-2 border-background bg-surfaceHighlight"></div>
                    ))}
                    <button className="size-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold">+</button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/20">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    New Task
                </button>
            </div>
        </div>

        <div className="flex-1 overflow-x-auto">
            <div className="flex h-full gap-6 min-w-max pb-4">
                {columns.map(col => {
                    const colTasks = tasks.filter(t => t.status === col.id);
                    return (
                        <div key={col.id} className="flex flex-col w-80 shrink-0">
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${col.color}`}></span>
                                    <span className="font-bold text-slate-200">{col.label}</span>
                                    <span className="bg-surfaceHighlight text-slate-400 px-2 py-0.5 rounded-full text-xs font-bold">{colTasks.length}</span>
                                </div>
                                <button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                                {colTasks.map(task => (
                                    <div key={task.id} className="bg-surface border border-border p-4 rounded-xl shadow-sm hover:border-primary/50 cursor-grab group transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-mono text-slate-500">{task.id}</span>
                                            <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white transition-opacity">
                                                <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                                            </button>
                                        </div>
                                        <h3 className="font-medium text-slate-100 mb-3 leading-snug">{task.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${task.tagColor}`}>
                                                {task.tag}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-border mt-1">
                                            <div className="flex -space-x-2">
                                                {task.assignees.map((a, i) => (
                                                    <img key={i} src={a} alt="Assignee" className="size-6 rounded-full border border-surface" />
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-500 text-xs">
                                                {task.comments > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">chat_bubble</span>
                                                        <span>{task.comments}</span>
                                                    </div>
                                                )}
                                                {task.attachments > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">attach_file</span>
                                                        <span>{task.attachments}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full py-2 rounded-lg border border-dashed border-border text-slate-500 text-sm font-medium hover:bg-surfaceHighlight hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Add Task
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};
