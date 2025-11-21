import React from 'react';
import { Card } from './ComponentsLibrary';

function Stat({ label, value, change }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
      <div className={`text-xs mt-1 ${change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{change} this week</div>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Creator Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat label="Reach" value="128k" change="+12%" />
        <Stat label="Engagement" value="8.3%" change="+1.2%" />
        <Stat label="New Followers" value="1,245" change="+6%" />
        <Stat label="Revenue" value="$4,280" change="-3%" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <Card className="lg:col-span-2 h-64 p-5">Planner (week view)</Card>
        <Card className="h-64 p-5">Top posts</Card>
      </div>
    </div>
  );
}
