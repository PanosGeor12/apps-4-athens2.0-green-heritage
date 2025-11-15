import { Star, Navigation } from 'lucide-react';
import { ImageWithFallback } from './helpers/ImageWithFallback';

interface MapHoverCardProps {
  image: string;
  title: string;
  rating: number;
  distance: string;
  category: string;
}

export function MapHoverCard({ image, title, rating, distance, category }: MapHoverCardProps) {
  return (
    <div className="w-64 overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="relative h-32">
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
          <span className="text-xs">{category}</span>
        </div>
      </div>
      <div className="p-3">
        <h4 className="mb-2 line-clamp-1">{title}</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Navigation className="h-4 w-4" />
            <span className="text-sm">{distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}