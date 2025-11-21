import React from 'react';
import { Card } from './ComponentsLibrary';

export default function NotificationsMessages() {
  const items = [
    { type: 'Notification', text: 'Alex liked your post', time: '2m' },
    { type: 'Message', text: 'Maya: Love this design!', time: '12m' },
    { type: 'Notification', text: 'Jordan mentioned you in a comment', time: '1h' },
  ];
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-6 grid gap-4">
      {items.map((it, idx) => (
        <Card key={idx} className="p-4 flex items-center justify-between hover:shadow-soft transition">
          <div>
            <div className="font-medium text-slate-900 dark:text-white">{it.type}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{it.text}</div>
          </div>
          <div className="text-xs text-slate-500">{it.time}</div>
        </Card>
      ))}
    </div>
  );
}
