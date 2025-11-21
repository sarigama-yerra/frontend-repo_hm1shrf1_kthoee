import React from 'react';
import { Card } from './ComponentsLibrary';

export default function Reels() {
  const reels = [
    { id: 1, title: 'Weekend Vibes', views: '1.2M' },
    { id: 2, title: 'UI Speedrun', views: '486k' },
    { id: 3, title: 'Street Photography', views: '233k' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Reels</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reels.map((r) => (
          <Card key={r.id} className="p-4 h-64 rounded-2xl bg-gradient-to-b from-slate-100/60 to-white/40 dark:from-slate-800/50 dark:to-slate-900/40 border border-black/5 dark:border-white/10 flex flex-col justify-between">
            <div className="text-slate-900 dark:text-white font-medium">{r.title}</div>
            <div className="text-sm text-slate-500">{r.views} views</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
