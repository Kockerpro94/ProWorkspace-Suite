import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { KPICard } from '../types';

const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 55 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 80 },
  { name: 'Sat', value: 65 },
  { name: 'Sun', value: 75 },
];

const cards: KPICard[] = [
  { title: 'Total Views', value: '124,500', change: '+12%', isPositive: true, icon: 'visibility', colorClass: 'text-primary' },
  { title: 'Active Tasks', value: '45', change: '98%', isPositive: true, icon: 'task_alt', colorClass: 'text-emerald-500' },
  { title: 'Efficiency', value: '92%', change: '+5%', isPositive: true, icon: 'speed', colorClass: 'text-purple-500' },
  { title: 'Revenue', value: '$12,450', change: '+8%', isPositive: true, icon: 'attach_money', colorClass: 'text-amber-500' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics Overview</h2>
          <p className="text-slate-400 mt-1">Real-time insights for your professional workflows</p>
        </div>
        <div className="flex gap-3">
             <div className="hidden md:flex items-center bg-surface border border-border rounded-lg h-10 px-3">
                <span className="material-symbols-outlined text-slate-400 text-xl mr-2">calendar_today</span>
                <span className="text-sm font-medium text-slate-300">Oct 14 - Nov 14</span>
                <span className="material-symbols-outlined text-slate-400 text-xl ml-2">arrow_drop_down</span>
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white font-medium h-10 px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
                <span className="material-symbols-outlined text-xl">download</span>
                Export Report
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
            <div key={idx} className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className={`material-symbols-outlined text-8xl ${card.colorClass}`}>{card.icon}</span>
                </div>
                <div className="relative z-10">
                    <p className="text-slate-400 text-sm font-medium mb-1">{card.title}</p>
                    <h3 className="text-3xl font-bold mb-2">{card.value}</h3>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-emerald-500">trending_up</span>
                        <span className="text-sm font-bold text-emerald-500">{card.change}</span>
                        <span className="text-xs text-slate-500 ml-1">vs last month</span>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface border border-border rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold">Traffic vs Engagement</h3>
                    <p className="text-sm text-slate-400">Comparing views against interactions</p>
                </div>
                <div className="flex bg-background rounded-lg p-1 gap-1">
                    <button className="px-3 py-1 text-xs font-medium bg-surfaceHighlight text-white rounded shadow-sm">30 Days</button>
                    <button className="px-3 py-1 text-xs font-medium text-slate-400 hover:text-white">7 Days</button>
                </div>
            </div>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#137fec" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#2a3b4c" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                        <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#182430', border: '1px solid #2a3b4c', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold mb-6">Device Traffic</h3>
                <div className="relative w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path className="text-surfaceHighlight" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                        <path className="text-primary drop-shadow-[0_0_8px_rgba(19,127,236,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="4"></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-xs text-slate-400">Mobile</span>
                        <span className="text-2xl font-bold text-white">70%</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-slate-300">Mobile</span>
                    </div>
                    <span className="font-bold">70%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        <span className="text-slate-300">Desktop</span>
                    </div>
                    <span className="font-bold">30%</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
