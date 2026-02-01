import React from 'react';
import { Document } from '../types';

const docs: Document[] = [
    { id: '1', name: 'Q3 Financial Report.pdf', type: 'pdf', editedBy: 'Sarah', editedTime: '2h ago', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT0BBmbaoe-8vFhyD9chwHuljOyaQYzBbllqVj0hCixL6RA53nxMF_K9mVx5vjzN5FqoObvGIwnEx9FsI7aeejQlJ9dXpqa4S-x-8Gskr9sxgsr7XUOt4i0GB7mWxm-8oAn-XorEr6R9G0kMvG_xGx3S8TUtVVr_3reFFnP0bUghcaG_SAVMPZZEWYCigGjgHnm9U2h2zLSPFWg3Jw0GI7coIWWLaeqdCoYxeSxu9d8guGVJRiXQWaOv1aXvOwHbT9WXL_Hxz1w05k' },
    { id: '2', name: 'Marketing Strategy.docx', type: 'doc', editedBy: 'You', editedTime: '5m ago', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP0_BwKKRee4oQQIuggMtKg2GVfOuntyS1FMZ8VLGL26SMIPuFROqr5arrJvEac0zp0wIYyBUBC_kWC0Ct2gVEP3odjy9VXbvk2QW9iZDRkxPMfv_FAAEjPoL69Iim2AUmEHD2DrLhr4_XTE_o22LNI9SzPGq2HX7g1GbiGmgWhZcqEJXgSc26hEVbcV0xCxiZnVCdLHbTpNlU1K0Kpx1seL27T0uqELfM72xwjJtZYdI3W0aDVbzTF4P8LLanHMFdjRatuwsamp7n', selected: true },
    { id: '3', name: 'UX Research.pptx', type: 'ppt', editedBy: 'Mike', editedTime: 'Yesterday', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgoEOP5tMcwDGi0fUq1nOCjBEe9YIoxRjyf1CljrBjDOupiH9lZo0OnU2ZD6tJpxvKD_-XQnS3oOnhBf439o-c7IhFArHCR1u8PsTdHKQYu8BvSKZuLh2ctGZQkh2tTxrcxJodxFG_YEyZAavWhO02rH3CHB-QmdvS0ueAFcKlATE8sEjtYVfybnzsLG5BlDQWjnoZrGtU5lIu_aSV4G1F2_44RL4Zkm_D3yqNXm1K2sz1_Xz4RomR42eqjuyX2_lFk3xSqdQSo6O' },
    { id: '4', name: 'Q4 Projection.xlsx', type: 'xls', editedBy: 'Alex', editedTime: '2d ago', thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcuERN3L8gkquwBvzi7bM6QRJY5OIsVJRQXmpusgZqtBYlqRS7xTq_KG1W_yBvB4C8-30JNvYccTqWISL3GoaeaWCHHQsvK5Jkmqnr2p3emdjRkfgksziBzLi7UelwS9A9foiyqcS-9PxfrSLimDT0K6KX_pFwG3PNtS-AY0ObZGeN5nTwgUIbn-H3MH7xfxdcWeruSQDuQJFwBj-hkxzP0klfHoXtoSdmZGB3qv5IxqNkrvmUGCzwRUDBWNYPqCpA0FomDWKjt5Cj' },
];

export const Documents: React.FC = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
            <header className="flex flex-col gap-4 p-6 md:p-8 bg-background pb-0 shrink-0 z-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Document Management</h2>
                        <p className="text-slate-400 mt-1">Manage, track, and version your team's assets</p>
                    </div>
                    <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        New Document
                    </button>
                </div>
                 <div className="flex gap-4 mt-4 pb-4 border-b border-border items-center">
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-500">search</span>
                        </div>
                        <input type="text" className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-surface text-white placeholder-slate-500 focus:ring-2 focus:ring-primary text-sm" placeholder="Search documents..." />
                    </div>
                 </div>
            </header>

            <main className="flex-1 overflow-y-auto p-6 md:p-8">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {docs.map(doc => (
                         <div key={doc.id} className={`group relative flex flex-col bg-surface rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 ${doc.selected ? 'ring-2 ring-primary shadow-lg shadow-primary/10' : 'border border-transparent hover:border-border'}`}>
                             {doc.selected && (
                                <div className="absolute top-3 right-3 z-10">
                                    <button className="bg-primary text-white rounded-full p-1 shadow-md">
                                        <span className="material-symbols-outlined text-[20px]">check</span>
                                    </button>
                                </div>
                             )}
                            <div className="h-40 bg-cover bg-center relative" style={{backgroundImage: `url('${doc.thumbnail}')`}}>
                                {doc.selected && <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>}
                            </div>
                            <div className={`p-4 flex flex-col gap-1 ${doc.selected ? 'bg-primary/5' : ''}`}>
                                <div className="flex items-center gap-2">
                                     <span className={`material-symbols-outlined text-[20px] ${
                                         doc.type === 'pdf' ? 'text-red-400' : 
                                         doc.type === 'doc' ? 'text-blue-400' :
                                         doc.type === 'ppt' ? 'text-orange-400' : 'text-green-400'
                                     }`}>
                                         {doc.type === 'pdf' ? 'picture_as_pdf' : doc.type === 'doc' ? 'description' : doc.type === 'ppt' ? 'slideshow' : 'table_chart'}
                                     </span>
                                     <h3 className="text-white font-medium text-sm truncate">{doc.name}</h3>
                                </div>
                                <p className={`text-xs pl-7 ${doc.selected ? 'text-primary font-medium' : 'text-slate-400'}`}>
                                    {doc.selected ? `Selected • Edited ${doc.editedTime}` : `Edited ${doc.editedTime} by ${doc.editedBy}`}
                                </p>
                            </div>
                         </div>
                    ))}
                    <div className="group relative flex flex-col bg-surface rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-border">
                        <div className="h-40 bg-cover bg-center flex items-center justify-center bg-[#2d3a48]">
                             <span className="material-symbols-outlined text-6xl text-[#4a5f75]">folder_zip</span>
                        </div>
                        <div className="p-4 flex flex-col gap-1">
                             <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-400 text-[20px]">folder_zip</span>
                                <h3 className="text-white font-medium text-sm truncate">Brand Assets.zip</h3>
                             </div>
                             <p className="text-slate-400 text-xs pl-7">Edited 1w ago by Design Team</p>
                        </div>
                    </div>
                 </div>
            </main>
        </div>

        <aside className="w-80 shrink-0 bg-surface border-l border-border flex flex-col h-full shadow-2xl hidden lg:flex">
             <div className="p-6 border-b border-border">
                <h3 className="text-white font-bold text-lg">Version History</h3>
                <p className="text-slate-400 text-xs">Marketing Strategy.docx</p>
             </div>
             <div className="flex-1 overflow-y-auto p-6">
                <div className="relative pl-4 border-l-2 border-border space-y-8">
                    {/* Current */}
                    <div className="relative">
                        <div className="absolute -left-[23px] top-1 w-5 h-5 rounded-full border-4 border-surface bg-primary shadow-sm shadow-primary/50"></div>
                        <div>
                             <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary mb-1">CURRENT</span>
                             <h4 className="text-white text-sm font-semibold">v3.2 - Final Review</h4>
                             <p className="text-slate-400 text-xs mt-1">Edited by <span className="text-white">You</span> • Now</p>
                        </div>
                    </div>
                    {/* Previous */}
                    <div className="relative group">
                         <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-slate-500 z-10 group-hover:bg-white transition-colors"></div>
                         <div className="p-3 rounded-lg hover:bg-border transition-colors cursor-pointer border border-transparent hover:border-white/5">
                            <div className="flex justify-between items-start">
                                <h4 className="text-white text-sm font-medium">v3.1 - Copy Updates</h4>
                                <span className="text-slate-500 text-xs">2h ago</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">"Updated the introduction paragraph and corrected Q3 metrics."</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-5 w-5 rounded-full bg-slate-700"></div>
                                <p className="text-xs text-slate-500">Sarah K.</p>
                            </div>
                         </div>
                    </div>
                     <div className="relative group">
                         <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-slate-500 z-10 group-hover:bg-white transition-colors"></div>
                         <div className="p-3 rounded-lg hover:bg-border transition-colors cursor-pointer border border-transparent hover:border-white/5">
                            <div className="flex justify-between items-start">
                                <h4 className="text-white text-sm font-medium">v3.0 - Draft</h4>
                                <span className="text-slate-500 text-xs">Yesterday</span>
                            </div>
                             <div className="flex items-center gap-2 mt-2">
                                <div className="h-5 w-5 rounded-full bg-slate-700"></div>
                                <p className="text-xs text-slate-500">Mike R.</p>
                            </div>
                         </div>
                    </div>
                </div>
             </div>
        </aside>
    </div>
  );
};
