import React from 'react';

export function Button({ variant='primary', size='md', children, className='', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  const sizes = {
    sm: 'px-3 h-9 text-sm',
    md: 'px-4 h-11 text-[15px]',
    lg: 'px-6 h-12 text-base',
  };
  const variants = {
    primary: 'bg-bluePrimary-500 hover:bg-bluePrimary-600 text-white shadow-glass focus:ring-bluePrimary-400 focus:ring-offset-white dark:focus:ring-offset-slate-900',
    ghost: 'bg-white/60 dark:bg-white/10 text-slate-900 dark:text-white backdrop-blur border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/15',
    outline: 'border border-bluePrimary-500/40 text-bluePrimary-600 dark:text-bluePrimary-300 hover:bg-bluePrimary-500/10',
  };
  return (
    <button className={[base, sizes[size], variants[variant], className].join(' ')} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className='' }) {
  return (
    <div className={["rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-soft", className].join(' ')}>
      {children}
    </div>
  );
}

export function Input({ className='', ...props }) {
  return (
    <input
      className={["w-full h-11 rounded-xl px-4 bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-bluePrimary-400" , className].join(' ')}
      {...props}
    />
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <span className="text-sm text-slate-600 dark:text-slate-300">{label}</span>
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div className={`w-12 h-7 rounded-full transition-colors ${checked ? 'bg-bluePrimary-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
        <div className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-soft transition-transform ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </label>
  );
}
