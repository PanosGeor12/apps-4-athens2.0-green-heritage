import { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { ItineraryStop, Stop } from './ItineraryStop';
import { Button } from './ui/button';

interface Day {
  date: string;
  dayName: string;
  stops: Stop[];
}

export function ItineraryPanel() {
  const [days, setDays] = useState<Day[]>([
    {
      date: 'Nov 15, 2025',
      dayName: 'Saturday',
      stops: [
        {
          id: '1',
          time: '09:00',
          title: 'Breakfast at Corner Café',
          location: 'Downtown',
          duration: '1 hour',
          category: 'Food',
          image: 'https://images.unsplash.com/photo-1633573681374-2ebfb24658d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjYWZlJTIwbW9ybmluZ3xlbnwxfHx8fDE3NjI4NTI0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Start your day with fresh pastries and artisan coffee',
        },
        {
          id: '2',
          time: '10:30',
          title: 'Modern Art Museum',
          location: 'Arts District',
          duration: '2 hours',
          category: 'Culture',
          image: 'https://images.unsplash.com/photo-1706665714936-3211c96474c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9uJTIwYXJ0fGVufDF8fHx8MTc2Mjc2Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Explore contemporary art exhibitions and installations',
        },
        {
          id: '3',
          time: '13:00',
          title: 'Lunch at La Maison',
          location: 'Old Town',
          duration: '1.5 hours',
          category: 'Food',
          image: 'https://images.unsplash.com/photo-1663861623497-2151b2bb21fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdW5jaCUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc2Mjg1MjQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Traditional local cuisine with seasonal ingredients',
        },
        {
          id: '4',
          time: '15:00',
          title: 'Historic Cathedral',
          location: 'City Center',
          duration: '1 hour',
          category: 'Culture',
          image: 'https://images.unsplash.com/photo-1760042825915-2889e5285fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMG1vbnVtZW50JTIwbGFuZG1hcmt8ZW58MXx8fHwxNzYyODUyNDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Gothic architecture and panoramic city views',
        },
        {
          id: '5',
          time: '17:00',
          title: 'Sunset Viewpoint',
          location: 'West Hill',
          duration: '1 hour',
          category: 'Nature',
          image: 'https://images.unsplash.com/photo-1663791377312-f2c8aa91af21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3cG9pbnQlMjBzdW5zZXR8ZW58MXx8fHwxNzYyODUyNDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Perfect spot for sunset photography and reflection',
        },
        {
          id: '6',
          time: '19:30',
          title: 'Dinner at Riverside',
          location: 'Waterfront',
          duration: '2 hours',
          category: 'Food',
          image: 'https://images.unsplash.com/photo-1695619959552-9fa4a90ad1e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5uZXIlMjBkaW5pbmclMjBldmVuaW5nfGVufDF8fHx8MTc2Mjg1MjQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
          description: 'Fine dining with river views and live music',
        },
      ],
    },
  ]);

  const handleRemoveStop = (dayIndex: number, stopId: string) => {
    setDays((prevDays) =>
      prevDays.map((day, index) =>
        index === dayIndex
          ? { ...day, stops: day.stops.filter((stop) => stop.id !== stopId) }
          : day
      )
    );
  };

  return (
    <div className="h-full overflow-y-auto p-4">
      <div className="space-y-6">
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="space-y-4">
            {/* Day Header */}
            <div className="sticky top-0 z-10 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 shadow-md">
              <Calendar className="h-5 w-5 text-white" />
              <div className="text-white">
                <h3 className="text-white">{day.dayName}</h3>
                <p className="text-sm text-white/90">{day.date}</p>
              </div>
              <div className="ml-auto text-sm text-white/90">
                {day.stops.length} stops
              </div>
            </div>

            {/* Stops */}
            <div className="space-y-3">
              {day.stops.map((stop) => (
                <ItineraryStop
                  key={stop.id}
                  stop={stop}
                  onRemove={(id) => handleRemoveStop(dayIndex, id)}
                />
              ))}
            </div>

            {/* Add Stop Button */}
            <Button
              variant="outline"
              className="w-full rounded-2xl border-dashed"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New Stop
            </Button>
          </div>
        ))}

        {/* Add Day Button */}
        <Button
          variant="outline"
          className="w-full rounded-2xl border-2 border-dashed"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Another Day
        </Button>
      </div>
    </div>
  );
}