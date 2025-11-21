import React from 'react';

export default function Palette() {
  const colors = [
    { name: 'Blue 500', hex: '#3B82F6' },
    { name: 'Blue 400', hex: '#66A7FF' },
    { name: 'Blue 600', hex: '#2F6AD9' },
    { name: 'Slate 900', hex: '#0B1220' },
    { name: 'Slate 800', hex: '#111827' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Off White', hex: '#F7FAFC' },
    { name: 'Gray 200', hex: '#E5E7EB' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {colors.map(c => (
        <div key={c.name} className="rounded-xl p-4 bg-white/60 dark:bg-white/5 backdrop-blur border border-black/5 dark:border-white/10 shadow-soft">
          <div className="h-14 rounded-lg mb-3" style={{ backgroundColor: c.hex }} />
          <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{c.name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{c.hex}</div>
        </div>
      ))}
    </div>
  );
}
