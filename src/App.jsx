import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { DesktopTopNav, MobileBottomNav } from './components/Navbars'
import Login from './components/Login'
import Home from './components/Home'
import Communities from './components/Communities'
import Profile from './components/Profile'
import NotificationsMessages from './components/NotificationsMessages'
import Dashboard from './components/Dashboard'
import Palette from './components/Palette'
import Music from './components/Music'

function AppShell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bluePrimary-50 to-white dark:from-slate-900 dark:to-slate-950">
      <DesktopTopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Home />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inbox" element={<NotificationsMessages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/music" element={<Music />} />
        <Route path="/style" element={<div className='max-w-6xl mx-auto px-6 py-6 space-y-6'><Palette /></div>} />
      </Routes>
      <MobileBottomNav />
      <Link to="/inbox" className="fixed left-6 bottom-24 md:bottom-8 z-30 h-14 w-14 rounded-2xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center shadow-soft">
        <span className="sr-only">Messenger</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      </Link>
      <Link to="/music" className="fixed right-6 bottom-24 md:bottom-8 z-30 h-14 w-14 rounded-2xl bg-white/70 dark:bg-white/10 border border-black/5 dark:border-white/10 grid place-items-center shadow-soft">
        <span className="sr-only">Music</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </Link>
      <button className="fixed right-6 bottom-44 md:bottom-24 z-30 h-14 w-14 rounded-2xl bg-bluePrimary-500 hover:bg-bluePrimary-600 text-white grid place-items-center shadow-glass">
        +
      </button>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}
