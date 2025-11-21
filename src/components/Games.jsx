import React from 'react';
import { Card } from './ComponentsLibrary';

export default function Games() {
  const games = [
    { name: 'Word Blitz', players: '23k online' },
    { name: '8 Ball Pool', players: '12k online' },
    { name: 'Chess Arena', players: '7k online' },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Games</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((g) => (
          <Card key={g.name} className="p-4 bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-black/5 dark:border-white/10 rounded-2xl hover:shadow-soft transition">
            <div className="font-medium text-slate-900 dark:text-white">{g.name}</div>
            <div className="text-sm text-slate-500 mb-2">{g.players}</div>
            <button className="mt-auto px-3 py-1.5 rounded-xl bg-bluePrimary-500 text-white text-sm">Play</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
