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
        <Route path="/style" element={<div className='max-w-6xl mx-auto px-6 py-6 space-y-6'><Palette /></div>} />
      </Routes>
      <MobileBottomNav />
      <button className="fixed right-6 bottom-24 md:bottom-8 z-30 h-14 w-14 rounded-2xl bg-bluePrimary-500 hover:bg-bluePrimary-600 text-white grid place-items-center shadow-glass">
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
