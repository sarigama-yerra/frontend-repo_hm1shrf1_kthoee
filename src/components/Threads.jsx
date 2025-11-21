import React from 'react';
import { Card } from './ComponentsLibrary';

export default function Threads() {
  const threads = [
    { title: 'What’s your go‑to design token naming?', replies: 42 },
    { title: 'Show your desk setup (2025)', replies: 128 },
    { title: 'Web perf tips for complex React apps', replies: 76 },
  ];
  return (
    <div className="max-w-3xl mx-auto px-6 py-6 grid gap-4">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Threads</h1>
      {threads.map((t, idx) => (
        <Card key={idx} className="p-4 flex items-center justify-between hover:shadow-soft transition">
          <div className="text-slate-900 dark:text-white">{t.title}</div>
          <div className="text-sm text-slate-500">{t.replies} replies</div>
        </Card>
      ))}
    </div>
  );
}
