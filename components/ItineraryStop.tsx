import { Clock, MapPin, GripVertical, X } from 'lucide-react';
import { ImageWithFallback } from './helpers/ImageWithFallback';
import { Button } from './ui/button';

export interface Stop {
  id: string;
  time: string;
  title: string;
  location: string;
  duration: string;
  category: string;
  image: string;
  description: string;
}

interface ItineraryStopProps {
  stop: Stop;
  onRemove: (id: string) => void;
  isDragging?: boolean;
}

export function ItineraryStop({ stop, onRemove, isDragging }: ItineraryStopProps) {
  return (
    <div
      className={`group flex gap-3 rounded-2xl bg-white p-4 shadow-sm transition-all ${
        isDragging ? 'opacity-50' : 'hover:shadow-md'
      }`}
    >
      {/* Drag Handle */}
      <div className="flex flex-col items-center justify-center">
        <GripVertical className="h-5 w-5 cursor-grab text-muted-foreground active:cursor-grabbing" />
      </div>

      {/* Time */}
      <div className="flex w-16 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-2">
        <span className="text-sm text-cyan-700">{stop.time}</span>
      </div>

      {/* Image */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
        <ImageWithFallback
          src={stop.image}
          alt={stop.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-1 flex items-start justify-between">
          <div>
            <h4 className="mb-1 line-clamp-1">{stop.title}</h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{stop.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{stop.duration}</span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(stop.id)}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        <p className="line-clamp-1 text-sm text-muted-foreground">{stop.description}</p>
      </div>
    </div>
  );
}