import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle'; // Optional Floating Button Icon

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  banner: string;
  artistName: string;
}

const myEvents: Event[] = [
  {
    id: 1,
    title: "Live at Sunset Arena",
    date: "2025-05-10",
    location: "Los Angeles, CA",
    banner: "https://images.unsplash.com/photo-1521574778337-d962ef81733d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxjb25jZXJ0fGVufDB8fDB8fHww",
    artistName: "Myself"
  },
  {
    id: 2,
    title: "Acoustic Night",
    date: "2025-06-18",
    location: "New York, NY",
    banner: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80",
    artistName: "Myself"
  }
];

const otherArtistsEvents: Event[] = [
  {
    id: 3,
    title: "Jazz Festival",
    date: "2025-05-20",
    location: "Chicago, IL",
    banner: "https://plus.unsplash.com/premium_photo-1682595143526-061978d507cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxjb25jZXJ0fGVufDB8fDB8fHww",
    artistName: "Other Artist 1"
  },
  {
    id: 4,
    title: "Rocking Arena",
    date: "2025-07-15",
    location: "Austin, TX",
    banner: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&q=80",
    artistName: "Other Artist 2"
  },
  {
    id: 5,
    title: "Indie Vibes",
    date: "2025-08-05",
    location: "San Francisco, CA",
    banner: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80",
    artistName: "Other Artist 3"
  }
];

export default function ArtistEventsPage() {
  return (
    <div className="relative max-w-7xl mx-auto p-4 pb-24">
      {/* My Events Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-white">🎤 My Events</h2>
        {myEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {myEvents.map(event => (
              <div
                key={event.id}
                className="relative group rounded-xl overflow-hidden bg-[#1f1f1f] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={event.banner}
                  alt={event.title}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  My Event
                </div>
                <div className="p-4 text-white space-y-2">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No events created yet.</p>
        )}
      </div>

      {/* Other Artists' Events Section */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-white">🎶 Other Artists Events</h2>
        {otherArtistsEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherArtistsEvents.map(event => (
              <div
                key={event.id}
                className="relative group rounded-xl overflow-hidden bg-[#1f1f1f] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={event.banner}
                  alt={event.title}
                  className="w-full h-52 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {event.artistName}
                </div>
                <div className="p-4 text-white space-y-2">
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.date} • {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No events available.</p>
        )}
      </div>

      {/* Optional Floating Create Button */}
      <button
        className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center animate-bounce z-50"
        onClick={() => alert('Create Event Clicked')}
      >
        <AddCircleIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
