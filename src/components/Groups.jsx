import React from 'react';
import { Card } from './ComponentsLibrary';

export default function Groups() {
  const groups = [
    { name: 'Designers Hub', members: '52k', desc: 'UI/UX, product, and visual design' },
    { name: 'Next.js Builders', members: '31k', desc: 'Full‑stack React and edge runtimes' },
    { name: 'Music Producers', members: '18k', desc: 'Beats, mixes, mastering, gear' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Groups</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <Card key={g.name} className="p-4 bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl hover:shadow-soft transition">
            <div className="font-medium text-slate-900 dark:text-white">{g.name}</div>
            <div className="text-sm text-slate-500 mb-2">{g.members} members</div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{g.desc}</p>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1.5 rounded-xl bg-bluePrimary-500 text-white text-sm">Join</button>
              <button className="px-3 py-1.5 rounded-xl border border-black/5 dark:border-white/10 text-sm text-slate-700 dark:text-slate-200">View</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
