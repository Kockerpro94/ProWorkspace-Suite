import React from 'react';

export const Calendar: React.FC = () => {
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Offset to start previous month
    return day;
  });

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background shrink-0">
            <div className="flex items-center flex-1 max-w-lg">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500 group-focus-within:text-white">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input type="text" className="block w-full p-2 pl-10 text-sm bg-surface border-none rounded-lg text-white placeholder-slate-500 focus:ring-1 focus:ring-primary" placeholder="Search events..." />
                </div>
            </div>
            <div className="flex items-center gap-4 ml-6">
                 <button className="flex items-center gap-3 cursor-pointer p-1 pr-3 rounded-full hover:bg-surface transition-colors">
                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-8" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxLdNiMZ1TQfR2CEaoI3qRFGtBW0eSYvdervJiskWMfEclQNgjXf0J2efwH5MCpa_L8GH6H8oeIj_YrDjjxEU4aX-b-oq67rRYtPPtqdkX6syV5GCGr7sXlP4DGowVh5nl0Pl5Ee37Pa6A22jo2OedbhWjwAu7DpgUti8nKkZnJM8c57o1ODQBPtche5cDm5k0DuOtMEsGSmlzIbtVhji_bFBPSLgqgdAMtdThS3Qcun0beJn4f-0YgfTRPfBEsiuwZQ-1cSamYp8b")'}}></div>
                    <span className="text-sm font-medium text-white hidden md:block">Sarah Connor</span>
                </button>
            </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
             <div className="flex-1 flex flex-col p-6 overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-bold tracking-tight">October 2023</h2>
                        <div className="flex items-center bg-surface rounded-lg p-0.5">
                            <button className="p-1.5 hover:bg-background rounded text-white"><span className="material-symbols-outlined">chevron_left</span></button>
                            <button className="p-1.5 hover:bg-background rounded text-white"><span className="material-symbols-outlined">chevron_right</span></button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-surface rounded-lg p-1">
                            <button className="px-3 py-1.5 bg-background shadow-sm text-white text-sm font-medium rounded-md">Month</button>
                            <button className="px-3 py-1.5 text-slate-400 hover:text-white text-sm font-medium rounded-md">Week</button>
                            <button className="px-3 py-1.5 text-slate-400 hover:text-white text-sm font-medium rounded-md">Day</button>
                        </div>
                         <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Add Task</span>
                        </button>
                    </div>
                </div>

                <div className="flex-1 border border-border bg-surface rounded-xl overflow-hidden flex flex-col min-h-0">
                    <div className="grid grid-cols-7 border-b border-border bg-background">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                            <div key={d} className="py-3 text-center text-xs font-semibold uppercase text-slate-500 tracking-wide">{d}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 grid-rows-5 flex-1 bg-surface gap-px">
                        {days.map((d, i) => {
                            const isCurrentMonth = d > 0 && d <= 31;
                            const isToday = d === 24;
                            
                            return (
                                <div key={i} className={`bg-background p-2 min-h-[100px] flex flex-col gap-1 relative group hover:bg-[#15202b] transition-colors ${isToday ? 'ring-1 ring-primary/50 z-10' : ''}`}>
                                    <span className={`text-sm font-medium ml-auto ${isCurrentMonth ? 'text-slate-400' : 'text-slate-700'} ${isToday ? 'w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center -mr-1 -mt-1' : ''}`}>
                                        {d <= 0 ? 30 + d : d > 31 ? d - 31 : d}
                                    </span>
                                    
                                    {d === 3 && (
                                         <div className="px-2 py-1 rounded bg-purple-500/10 border-l-2 border-purple-500 cursor-pointer hover:bg-purple-500/20 transition-colors">
                                            <p className="text-[11px] font-medium text-purple-200 truncate">Q4 Planning</p>
                                        </div>
                                    )}
                                    {d === 10 && (
                                         <div className="px-2 py-1 rounded bg-blue-500/10 border-l-2 border-blue-500 cursor-pointer hover:bg-blue-500/20 transition-colors">
                                            <p className="text-[11px] font-medium text-blue-200 truncate">Design Review</p>
                                        </div>
                                    )}
                                     {d === 24 && (
                                         <div className="px-2 py-1 rounded bg-blue-500/20 border-l-2 border-blue-500 cursor-move hover:bg-blue-500/30 transition-colors shadow-sm">
                                            <p className="text-[11px] font-medium text-blue-100 truncate">Q3 Analytics Review</p>
                                        </div>
                                    )}
                                     {d === 25 && (
                                         <div className="px-2 py-1 rounded bg-purple-500/20 border-l-2 border-purple-500 cursor-move hover:bg-purple-500/30 transition-colors shadow-sm">
                                            <p className="text-[11px] font-medium text-purple-100 truncate">Content Strategy</p>
                                        </div>
                                    )}
                                     {d === 27 && (
                                         <div className="px-2 py-1 rounded bg-red-500/20 border-l-2 border-red-500 cursor-move hover:bg-red-500/30 transition-colors shadow-sm">
                                            <p className="text-[11px] font-medium text-red-100 truncate">Launch Deadline</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
             </div>

             <aside className="w-80 border-l border-border bg-background flex flex-col overflow-y-auto shrink-0 hidden xl:flex">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Oct 24, Tuesday</h3>
                        <span className="text-xs font-medium text-slate-400 bg-surface px-2 py-1 rounded">Today</span>
                    </div>
                    
                    <div className="space-y-6 relative pl-4 border-l border-surface">
                        <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background"></div>
                            <p className="text-xs text-slate-500 mb-1">09:00 AM</p>
                            <div className="p-3 bg-surface rounded-lg border border-transparent hover:border-primary/50 transition-colors cursor-pointer group">
                                <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Team Standup</h4>
                                <span className="text-xs text-slate-500 block mt-1">Zoom</span>
                            </div>
                        </div>

                         <div className="relative">
                            <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background"></div>
                            <p className="text-xs text-slate-500 mb-1">11:30 AM</p>
                            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30 cursor-pointer">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-semibold text-blue-100">Review Drafts</h4>
                                    <span className="material-symbols-outlined text-[16px] text-blue-300">edit_document</span>
                                </div>
                                <p className="text-xs text-blue-200/70 mt-1">Marketing copy Q4</p>
                            </div>
                        </div>
                        
                         <div className="absolute -left-[5px] top-[45%] w-full flex items-center pointer-events-none">
                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full -ml-1.5 ring-4 ring-background z-10"></div>
                            <div className="h-px bg-red-500 w-full flex-1 ml-2 opacity-50"></div>
                        </div>

                        <div className="relative opacity-60">
                            <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-surface bg-surface"></div>
                            <p className="text-xs text-slate-500 mb-1">02:00 PM</p>
                            <div className="p-3 bg-surface rounded-lg">
                                <h4 className="text-sm font-semibold text-white">Client Sync</h4>
                                <p className="text-xs text-slate-500 mt-1">Pending Confirmation</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                         <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Calendars</h3>
                         <div className="space-y-2">
                             {[{c:'blue-500', l:'Work'}, {c:'purple-500', l:'Strategy'}, {c:'red-500', l:'Deadlines'}].map(item => (
                                <label key={item.l} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" defaultChecked className={`form-checkbox h-4 w-4 text-${item.c} rounded bg-surface border-gray-600 focus:ring-offset-gray-900`} />
                                    <span className={`w-2 h-2 rounded-full bg-${item.c}`}></span>
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{item.l}</span>
                                </label>
                             ))}
                         </div>
                    </div>
                </div>
             </aside>
        </div>
    </div>
  );
};
