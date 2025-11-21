import React from 'react';
import { Card, Button } from './ComponentsLibrary';

export default function Communities() {
  const blocks = [
    { size: 'xl', title: 'UX Designers', desc: 'Share patterns, critiques, jobs', cta: 'Join' },
    { size: 'm', title: 'Local Happenings', desc: 'What’s on this week', cta: 'Explore' },
    { size: 's', title: 'Topics', desc: 'AI • Photography • Travel', cta: 'Browse' },
    { size: 'm', title: 'Events', desc: 'Meetups & Workshops', cta: 'Attend' },
  ];

  const sizeClass = {
    xl: 'col-span-2 row-span-2 min-h-[240px]',
    m: 'min-h-[180px]',
    s: 'min-h-[140px]'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Communities</h2>
          <p className="text-slate-600 dark:text-slate-300">Discover groups, topics and events around you</p>
        </div>
        <Button variant="outline">Create Community</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr] gap-4">
        {blocks.map((b, i) => (
          <Card key={i} className={`p-5 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/10 dark:to-white/5 ${sizeClass[b.size]}`}>
            <div className="flex flex-col h-full">
              <div className="text-lg font-semibold text-slate-900 dark:text-white">{b.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1 flex-1">{b.desc}</div>
              <div>
                <Button className="mt-3">{b.cta}</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
