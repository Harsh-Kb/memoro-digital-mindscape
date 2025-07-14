import React from 'react';
import { Note } from '@/types';
import { NoteCard } from './note-card';
import { cn } from '@/lib/utils';

interface NotesGridProps {
  notes: Note[];
  onNoteClick: (note: Note) => void;
  className?: string;
}

export const NotesGrid = ({ notes, onNoteClick, className }: NotesGridProps) => {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-primary/10 flex items-center justify-center mb-4">
          <span className="text-3xl">📝</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No notes yet</h3>
        <p className="text-muted-foreground max-w-sm">
          Start capturing your thoughts and memories. Tap the + button to create your first note.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        "auto-rows-max",
        className
      )}
      style={{
        // Create staggered masonry-like layout
        gridTemplateRows: 'masonry'
      }}
    >
      {notes.map((note, index) => (
        <div
          key={note.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <NoteCard
            note={note}
            onClick={() => onNoteClick(note)}
          />
        </div>
      ))}
    </div>
  );
};