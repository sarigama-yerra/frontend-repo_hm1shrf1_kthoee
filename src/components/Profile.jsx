import React from 'react';
import { Card, Button } from './ComponentsLibrary';

export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <div className="relative rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" className="h-48 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex items-end gap-4">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=you`} className="w-24 h-24 rounded-2xl border-4 border-white dark:border-slate-900" />
            <div>
              <div className="text-2xl font-bold text-white">You</div>
              <div className="text-white/80 text-sm">Designer • 1.2k friends</div>
            </div>
          </div>
          <div className="backdrop-blur bg-white/20 rounded-xl p-2 border border-white/30">
            <div className="flex items-center gap-2">
              <Button variant="ghost">Edit Profile</Button>
              <Button>Message</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {[1,2].map(i => (
            <Card key={i} className="p-4">
              <div className="font-semibold text-slate-900 dark:text-white">Post #{i}</div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">A recent update with photos and thoughts.</div>
              <img src={`https://picsum.photos/seed/${i}/1200/600`} className="mt-3 rounded-xl" />
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="font-semibold text-slate-900 dark:text-white">Highlights</div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[1,2,3,4,5,6].map(i => <img key={i} src={`https://picsum.photos/seed/h${i}/200/200`} className="rounded-xl" />)}
            </div>
          </Card>
          <Card className="p-4">
            <div className="font-semibold text-slate-900 dark:text-white">Friends</div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[1,2,3,4,5,6].map(i => <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="rounded-xl" />)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
