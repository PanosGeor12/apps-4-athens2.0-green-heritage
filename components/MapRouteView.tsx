import { MapPin as MapPinIcon, Navigation } from 'lucide-react';
import { Button } from './ui/button';

interface RouteStop {
  id: string;
  title: string;
  position: { x: number; y: number };
  order: number;
}

export function MapRouteView() {
  const stops: RouteStop[] = [
    { id: '1', title: 'Corner Café', position: { x: 25, y: 30 }, order: 1 },
    { id: '2', title: 'Art Museum', position: { x: 40, y: 25 }, order: 2 },
    { id: '3', title: 'La Maison', position: { x: 55, y: 35 }, order: 3 },
    { id: '4', title: 'Cathedral', position: { x: 45, y: 50 }, order: 4 },
    { id: '5', title: 'Viewpoint', position: { x: 70, y: 60 }, order: 5 },
    { id: '6', title: 'Riverside', position: { x: 35, y: 70 }, order: 6 },
  ];

  // Calculate path through all stops
  const pathData = stops
    .map((stop, index) => {
      if (index === 0) return `M ${stop.position.x} ${stop.position.y}`;
      const prev = stops[index - 1];
      const controlX1 = prev.position.x + (stop.position.x - prev.position.x) / 3;
      const controlY1 = prev.position.y;
      const controlX2 = prev.position.x + (2 * (stop.position.x - prev.position.x)) / 3;
      const controlY2 = stop.position.y;
      return `C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${stop.position.x} ${stop.position.y}`;
    })
    .join(' ');

  return (
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      {/* Mock Map Background */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="route-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#route-grid)" />

          {/* Route Path */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <path
              d={pathData}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.3"
              strokeDasharray="1,0.5"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>

          {/* Park areas */}
          <circle cx="15%" cy="20%" r="50" fill="#86efac" opacity="0.15" />
          <circle cx="80%" cy="75%" r="60" fill="#86efac" opacity="0.15" />

          {/* Building blocks */}
          <rect x="30%" y="40%" width="30" height="30" fill="#cbd5e1" opacity="0.2" rx="3" />
          <rect x="60%" y="30%" width="35" height="35" fill="#cbd5e1" opacity="0.2" rx="3" />
          <rect x="20%" y="60%" width="25" height="25" fill="#cbd5e1" opacity="0.2" rx="3" />
        </svg>
      </div>

      {/* Route Stops */}
      {stops.map((stop, index) => (
        <div
          key={stop.id}
          className="absolute"
          style={{
            left: `${stop.position.x}%`,
            top: `${stop.position.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Stop Number */}
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg ring-4 ring-white">
              <span className="text-sm">{stop.order}</span>
            </div>
            {/* Stop Label */}
            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-2 py-1 text-xs shadow-md">
              {stop.title}
            </div>
          </div>

          {/* Connecting Line */}
          {index < stops.length - 1 && (
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2"
              style={{
                width: `${Math.abs(stops[index + 1].position.x - stop.position.x)}%`,
                height: `${Math.abs(stops[index + 1].position.y - stop.position.y)}%`,
              }}
            />
          )}
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute right-4 top-4">
        <Button
          size="sm"
          className="rounded-xl bg-white text-cyan-600 shadow-lg hover:bg-gray-50"
        >
          <Navigation className="mr-2 h-4 w-4" />
          Start Navigation
        </Button>
      </div>

      {/* Route Info */}
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Total Distance</p>
            <p className="text-lg">8.5 km</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Estimated Time</p>
            <p className="text-lg">12 hours</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Stops</p>
            <p className="text-lg">{stops.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}