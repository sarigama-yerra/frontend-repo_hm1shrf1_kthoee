import React from 'react';
import { Home, Compass, UsersRound, User, Bell, MessageSquare, Plus, Sun, Moon, Search, Music, Play, PlayCircle, Gamepad2, Hash } from 'lucide-react';

export const Icon = ({ name, className }) => {
  const map = { Home, Compass, UsersRound, User, Bell, MessageSquare, Plus, Sun, Moon, Search, Music, Play, PlayCircle, Gamepad2, Hash };
  const C = map[name] || Home;
  return <C className={className} />;
};
