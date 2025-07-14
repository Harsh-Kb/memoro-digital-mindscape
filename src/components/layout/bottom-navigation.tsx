import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { FileText, Bot, User, Settings } from 'lucide-react';

const navigationItems = [
  {
    name: 'Notes',
    path: '/notes',
    icon: FileText,
    emoji: '📝'
  },
  {
    name: 'Assistant',
    path: '/assistant',
    icon: Bot,
    emoji: '🤖'
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: User,
    emoji: '👤'
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    emoji: '⚙️'
  }
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-300",
                "min-w-[64px] relative",
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {/* Icon with animation */}
              <div className={cn(
                "transition-all duration-300",
                isActive && "scale-110"
              )}>
                <Icon className="h-5 w-5" />
              </div>
              
              {/* Label */}
              <span className={cn(
                "text-xs font-medium mt-1 transition-all duration-300",
                isActive ? "opacity-100" : "opacity-70"
              )}>
                {item.name}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};