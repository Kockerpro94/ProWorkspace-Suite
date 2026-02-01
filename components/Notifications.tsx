import React from 'react';

export const Notifications: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pt-20 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div className="w-full max-w-2xl bg-background rounded-2xl shadow-2xl border border-border overflow-hidden" onClick={e => e.stopPropagation()}>
            <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <span className="material-symbols-outlined">notifications_active</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Smart Notifications</h2>
                        <p className="text-xs text-slate-400">Focused View</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="h-8 px-4 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600">Mark all read</button>
                    <button onClick={onClose} className="size-8 flex items-center justify-center rounded-lg hover:bg-border text-slate-400 hover:text-white">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </header>
            
            <div className="max-h-[70vh] overflow-y-auto p-6 bg-background">
                {/* Daily Briefing */}
                 <div className="mb-8 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-purple-900 h-40 flex flex-col justify-center px-8 shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-9xl text-white">auto_awesome</span>
                    </div>
                    <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center justify-center rounded-full bg-white/20 p-1 backdrop-blur-md">
                                <span className="material-symbols-outlined text-white text-xs">auto_awesome</span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-white/80">Daily Briefing</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-1">Good morning, Alex</h1>
                        <p className="text-white/90 text-sm">You have <span className="font-bold underline decoration-primary decoration-2 underline-offset-4">3 urgent deadlines</span> today.</p>
                    </div>
                 </div>

                 {/* Urgent */}
                 <div className="mb-6">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-red-500 filled text-lg">warning</span>
                        Urgent Deadlines
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-red-500/30 transition-all group">
                             <div className="flex items-center gap-4">
                                <div className="size-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Q3 Analytics Report</p>
                                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5"><span className="material-symbols-outlined text-[14px]">schedule</span> Due in 2 hours</p>
                                </div>
                             </div>
                             <button className="px-4 py-2 bg-background border border-border rounded-lg text-xs font-bold hover:bg-border">Open Project</button>
                        </div>
                    </div>
                 </div>

                 {/* Mentions */}
                 <div className="mb-6">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">alternate_email</span>
                        Mentioned You
                    </h3>
                     <div className="space-y-3">
                        <div className="flex items-start justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-primary/30 transition-all">
                             <div className="flex items-start gap-4">
                                <div className="relative">
                                    <div className="size-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-pptLYTrKem77WBBa9a1DL3vNWh5MYjrpROqjqs2vDtgyAGjXsaM5TT0GCRnhWWU3O0DPlz-QhQUEmW2X7B6cRPifxJ3ZenZkFyyvi8AShRuSpMFPNN-_Xh7S1AD6NMlR6YPVJXaxQ6vXqzDeLN4WWRy_LPRq0sJfZtkN_USe1a5A4YOdfXJyqWsLgarPNFS9b1_L2k1aFehlyQLtYtz1uIFQX0l0KM37mE9ZzZwUomVUBOFyb08uVzgmIKbi_5yoX74IsFSsZsPN")'}}></div>
                                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5 border-2 border-surface"><span className="material-symbols-outlined text-[10px] text-white block">chat_bubble</span></div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400"><span className="font-bold text-white">Sarah Chen</span> commented on <span className="text-primary font-medium">Content Strategy</span></p>
                                    <p className="text-sm text-white mt-1">"Can you review the new section on user personas? I think we need more data."</p>
                                    <p className="text-xs text-slate-500 mt-2">15 mins ago</p>
                                </div>
                             </div>
                             <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20"><span className="material-symbols-outlined text-sm">reply</span></button>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
};
