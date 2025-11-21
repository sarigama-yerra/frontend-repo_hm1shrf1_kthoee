import React from 'react';
import { Card, Button, Input } from './ComponentsLibrary';
import { Icon } from './Icons';
import ChatBox from './ChatBox';

function StoryAvatar({ name }) {
  return (
    <div className="w-20">
      <div className="relative mx-auto">
        <div className="rounded-2xl p-0.5 bg-gradient-to-tr from-bluePrimary-400 to-bluePrimary-600">
          <div className="rounded-[18px] p-1 bg-white dark:bg-slate-900">
            <img alt={name} src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${name}`} className="w-16 h-24 object-cover rounded-xl" />
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-700 dark:text-slate-300">{name}</div>
      </div>
    </div>
  );
}

function FeedCard({ author, text, media }) {
  return (
    <Card className="p-4 md:p-6">
      <div className="flex items-center gap-3">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${author}`} className="w-10 h-10 rounded-full" />
        <div>
          <div className="font-medium text-slate-900 dark:text-white">{author}</div>
          <div className="text-xs text-slate-500">2h • Public</div>
        </div>
      </div>
      <div className="mt-3 text-slate-800 dark:text-slate-200">{text}</div>
      {media && <img src={media} className="mt-3 rounded-xl" alt="media" />}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Like','Comment','Save'].map(a => (
          <button key={a} className="h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:shadow-soft transition">
            {a}
          </button>
        ))}
      </div>
    </Card>
  );
}

export default function Home() {
  const posts = [
    { author: 'Alex', text: 'Enjoying the new design language — glassy, calm and focused.', media: 'https://images.unsplash.com/photo-1520975922284-5f708ec5b9c3?q=80&w=1200&auto=format&fit=crop' },
    { author: 'Maya', text: 'Bento grids are perfect for quick overviews.', media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_340px] gap-6 py-6">
      <div className="hidden lg:flex flex-col gap-4">
        <Card className="p-4">
          <div className="font-semibold text-slate-900 dark:text-white mb-3">Quick Tools</div>
          <div className="grid grid-cols-2 gap-2">
            {['Create','Story','Reel','Event'].map(x => <Button key={x} variant="ghost" className="h-10">{x}</Button>)}
          </div>
        </Card>
        <Card className="p-4">
          <div className="font-semibold text-slate-900 dark:text-white mb-3">Communities</div>
          <div className="space-y-2">
            {['Designers','Photographers','Tech News','Local Meetups'].map(x => (
              <div key={x} className="flex items-center justify-between">
                <div className="text-sm text-slate-700 dark:text-slate-300">{x}</div>
                <Button size="sm" variant="outline">Join</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=you`} className="w-10 h-10 rounded-full" />
            <Input placeholder="Share something..." />
            <Button><Icon name="Plus" className="w-4 h-4 mr-2" />Post</Button>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <div className="font-semibold text-slate-900 dark:text-white">Stories</div>
          <a className="text-bluePrimary-600 dark:text-bluePrimary-300 text-sm">See all</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {['You','Alex','Maya','Jordan','Priya','Chen','Sara'].map(n => <StoryAvatar key={n} name={n} />)}
        </div>

        <div className="grid gap-4">
          {posts.map((p, i) => <FeedCard key={i} {...p} />)}
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-4">
        <Card className="p-4">
          <div className="font-semibold text-slate-900 dark:text-white mb-3">Sponsored</div>
          <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="rounded-xl" />
        </Card>
        <Card className="p-4">
          <div className="font-semibold text-slate-900 dark:text-white mb-3">Events</div>
          <div className="grid gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="p-3 rounded-xl bg-white/60 dark:bg-white/10 border border-black/5 dark:border-white/10">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Design Meetup #{i}</div>
                <div className="text-xs text-slate-500">Tomorrow • 6 PM</div>
              </div>
            ))}
          </div>
        </Card>
        {/* Chat box under Events */}
        <ChatBox embedded className="" />
      </div>
    </div>
  );
}
