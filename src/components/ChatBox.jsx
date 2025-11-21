import React, { useState } from 'react';
import { Icon } from './Icons';

export default function ChatBox({ embedded = false, className = '' }) {
  const [open, setOpen] = useState(embedded ? true : false);
  const [messages, setMessages] = useState([
    { from: 'Maya', text: 'Hey! Ready for the launch?' },
    { from: 'You', text: 'Almost there — polishing the UI.' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'You', text: input.trim() }]);
    setInput('');
  };

  if (embedded) {
    return (
      <div className={`rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur shadow-soft ${className}`}>
        <div className="px-3 py-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
          <div className="text-sm font-medium text-slate-900 dark:text-white">Chat</div>
        </div>
        <div className="max-h-64 overflow-auto p-3 space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={`text-sm ${m.from === 'You' ? 'text-right' : ''}`}>
              <div className={`inline-block px-3 py-2 rounded-2xl ${m.from === 'You' ? 'bg-bluePrimary-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'}`}>
                <span className="font-medium mr-2">{m.from}:</span>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-black/5 dark:border-white/10 flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" className="flex-1 bg-transparent border border-black/5 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none" />
          <button onClick={send} className="px-3 py-2 rounded-xl bg-bluePrimary-500 text-white text-sm">Send</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed right-4 bottom-24 md:bottom-8 z-40 w-80">
      <button onClick={() => setOpen(!open)} className="mb-2 w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center">
        <Icon name="MessageSquare" className="w-5 h-5 text-slate-700 dark:text-slate-200" />
      </button>
      {open && (
        <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur shadow-soft">
          <div className="px-3 py-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between">
            <div className="text-sm font-medium text-slate-900 dark:text-white">Chat</div>
            <button onClick={() => setOpen(false)} className="text-xs text-slate-500">Hide</button>
          </div>
          <div className="max-h-64 overflow-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm ${m.from === 'You' ? 'text-right' : ''}`}>
                <div className={`inline-block px-3 py-2 rounded-2xl ${m.from === 'You' ? 'bg-bluePrimary-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'}`}>
                  <span className="font-medium mr-2">{m.from}:</span>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-black/5 dark:border-white/10 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" className="flex-1 bg-transparent border border-black/5 dark:border-white/10 rounded-xl px-3 py-2 text-sm outline-none" />
            <button onClick={send} className="px-3 py-2 rounded-xl bg-bluePrimary-500 text-white text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
