import { MapPin as MapPinIcon } from 'lucide-react';

interface MapPinProps {
  color: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function MapPin({ color, isActive, onClick }: MapPinProps) {
  return (
    <button
      onClick={onClick}
      className={`relative transition-transform ${isActive ? 'scale-125' : 'hover:scale-110'}`}
    >
      <MapPinIcon
        className={`h-8 w-8 drop-shadow-lg transition-all ${
          isActive ? 'animate-bounce' : ''
        }`}
        style={{ color }}
        fill={color}
        strokeWidth={1.5}
      />
    </button>
  );
}