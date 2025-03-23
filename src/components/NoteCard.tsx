
import React from 'react';
import { FileText, Tag, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  category: string;
}

interface NoteCardProps {
  note: Note;
  onClick?: () => void;
  className?: string;
}

export const NoteCard = ({ note, onClick, className }: NoteCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer animate-scale-in",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="p-4 pb-2 space-y-2">
        <div className="flex items-start justify-between">
          <Badge variant="outline" className="bg-primary/5 text-xs font-normal">
            {note.category}
          </Badge>
          <Clock size={14} className="text-muted-foreground" />
        </div>
        <CardTitle className="text-base line-clamp-1">{note.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-3">{note.content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex gap-2 flex-wrap">
        {note.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};
