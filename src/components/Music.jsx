import React from 'react';
import { Icon } from './Icons';
import { Card } from './ComponentsLibrary';

export default function Music() {
  const playlists = [
    { title: 'Focus Flow', desc: 'Deep work electronic', color: 'from-bluePrimary-500 to-bluePrimary-300' },
    { title: 'Chill Vibes', desc: 'Lo-fi and mellow beats', color: 'from-sky-500 to-cyan-300' },
    { title: 'Trending Now', desc: 'What’s hot this week', color: 'from-fuchsia-500 to-pink-300' },
    { title: 'Morning Energy', desc: 'Upbeat pop to start the day', color: 'from-amber-500 to-orange-300' },
    { title: 'Late Night', desc: 'Ambient and downtempo', color: 'from-indigo-500 to-violet-300' },
    { title: 'Workout Hits', desc: 'High-BPM motivation', color: 'from-rose-500 to-red-300' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
          <span className="inline-flex h-10 w-10 rounded-xl bg-gradient-to-tr from-bluePrimary-500 to-bluePrimary-300 text-white items-center justify-center shadow-glass">
            <Icon name="Music" className="w-5 h-5" />
          </span>
          Music
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((p) => (
          <Card key={p.title} className="group overflow-hidden p-0">
            <div className={`h-32 w-full bg-gradient-to-tr ${p.color}`} />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                </div>
                <button className="h-10 w-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center text-slate-700 dark:text-slate-200">
                  <Icon name="Play" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
