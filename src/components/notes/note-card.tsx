import React from 'react';
import { Note } from '@/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface NoteCardProps {
  note: Note;
  onClick: () => void;
  className?: string;
}

export const NoteCard = ({ note, onClick, className }: NoteCardProps) => {
  const truncateText = (text: string, maxLines: number = 3) => {
    const words = text.split(' ');
    const maxWords = maxLines * 12; // Approximate words per line
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <Card
      className={cn(
        "cursor-pointer group",
        "hover:shadow-card hover:shadow-lg",
        "transition-all duration-300",
        "hover:scale-[1.02] hover:-translate-y-1",
        "bg-gradient-card border border-border/50",
        "animate-fade-in",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {note.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {formatDistanceToNow(note.updatedAt, { addSuffix: true })}
        </p>
      </CardHeader>
      {note.content && (
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {truncateText(note.content)}
          </p>
        </CardContent>
      )}
    </Card>
  );
};