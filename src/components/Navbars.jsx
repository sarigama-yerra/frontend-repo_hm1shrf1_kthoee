import React from 'react';
import { Icon } from './Icons';
import { useTheme } from './ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

export function DesktopTopNav() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-30 w-full backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-bluePrimary-500 to-bluePrimary-300 text-white grid place-items-center font-bold shadow-glass">
              f
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">facebook</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <Link className="hover:text-bluePrimary-500 flex items-center gap-2" to="/groups">
              <Icon name="UsersRound" className="w-4 h-4" />
              Groups
            </Link>
            <Link className="hover:text-bluePrimary-500 flex items-center gap-2" to="/threads">
              <Icon name="Hash" className="w-4 h-4" />
              Threads
            </Link>
            <Link className="hover:text-bluePrimary-500 flex items-center gap-2" to="/reels">
              <Icon name="PlayCircle" className="w-4 h-4" />
              Reels
            </Link>
            <Link className="hover:text-bluePrimary-500 flex items-center gap-2" to="/games">
              <Icon name="Gamepad2" className="w-4 h-4" />
              Games
            </Link>
            <Link className="hover:text-bluePrimary-500 flex items-center gap-2" to="/music">
              <Icon name="Music" className="w-4 h-4" />
              Music
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center px-3 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10">
            <Icon name="Search" className="w-4 h-4 text-slate-400" />
            <input placeholder="Search" className="bg-transparent px-2 outline-none text-sm text-slate-700 dark:text-slate-200" />
          </div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center">
            {theme === 'dark' ? <Icon name="Sun" className="w-5 h-5 text-yellow-300" /> : <Icon name="Moon" className="w-5 h-5 text-slate-700" />}
          </button>
          <button className="relative w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center">
            <Icon name="Bell" className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-bluePrimary-500 text-white text-[10px] grid place-items-center">3</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function MobileBottomNav() {
  const location = useLocation();
  const items = [
    { to: '/', icon: 'Home', label: 'Home' },
    { to: '/reels', icon: 'PlayCircle', label: 'Reels' },
    { to: '/games', icon: 'Gamepad2', label: 'Games' },
    { to: '/music', icon: 'Music', label: 'Music' },
    { to: '/profile', icon: 'User', label: 'Profile' },
  ];
  return (
    <div className="fixed bottom-4 left-0 right-0 z-30">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur border border-black/5 dark:border-white/10 shadow-soft flex items-center justify-between px-2 py-2">
          {items.map(i => {
            const active = location.pathname === i.to;
            return (
              <Link key={i.to} to={i.to} className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl ${active ? 'bg-bluePrimary-500/10 text-bluePrimary-600 dark:text-bluePrimary-300' : 'text-slate-600 dark:text-slate-300'}`}>
                <Icon name={i.icon} className={`w-5 h-5 ${active ? 'text-bluePrimary-500' : ''}`} />
                <span className="text-[11px]">{i.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
