import React from 'react';
import Spline from '@splinetool/react-spline';
import { Card, Input, Button } from './ComponentsLibrary';

export default function Login() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] grid lg:grid-cols-2">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 p-8 md:p-16 flex items-center">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Welcome back</h1>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Log in to continue</p>
          </div>
          <Card className="p-6 md:p-8 bg-white/60 dark:bg-white/10">
            <div className="space-y-4">
              <Input placeholder="Email" type="email" aria-label="Email" />
              <Input placeholder="Password" type="password" aria-label="Password" />
              <Button className="w-full">Log In</Button>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="ghost">Create Account</Button>
                <Button variant="ghost">Guest</Button>
                <Button variant="outline">Google</Button>
              </div>
            </div>
          </Card>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-4">By continuing you agree to our Terms and Privacy Policy.</div>
        </div>
      </div>
      <div className="hidden lg:block" />
    </div>
  );
}
