import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const FloatingActionButton = ({ 
  onClick, 
  className, 
  children = <Plus className="h-6 w-6" /> 
}: FloatingActionButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "h-14 w-14 rounded-full",
        "bg-gradient-primary hover:bg-gradient-primary/90",
        "shadow-fab hover:shadow-glow",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "animate-float",
        className
      )}
      size="icon"
    >
      {children}
    </Button>
  );
};