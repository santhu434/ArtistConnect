import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    banner: "https://images.unsplash.com/photo-1521574778337-d962ef81733d?w=500&q=80",
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
    banner: "https://plus.unsplash.com/premium_photo-1682595143526-061978d507cf?w=500&q=80",
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

const exclusiveReleases = [
  {
    title: "Moonlight Rhapsody",
    artist: "Aria Nova",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    title: "Echoes of Silence",
    artist: "Liam Stone",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    title: "Golden Hour Groove",
    artist: "Zara Lane",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    title: "Velvet Skies",
    artist: "Sophie Ember",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    title: "Waves of Nostalgia",
    artist: "Echo Drift",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&h=300&q=80"
  }
];


const meetAndGreets = [
  {
    location: "Cafe Harmony, LA",
    date: "2025-06-10",
    details: "Coffee and acoustic performance followed by a Q&A.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&h=300&q=80",
    type: "offline"
  },
  {
    location: "The Artist Lounge, NY",
    date: "2025-06-11",
    details: "Meet, greet, and jam session with the fans.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&h=300&q=80",
    type: "online"
  },
  {
    location: "Vibe House, SF",
    date: "2025-06-12",
    details: "An exclusive fan meetup with behind-the-scenes stories.",
    image: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=500&h=300&q=80",
    type: "offline"
  },
  {
    location: "Rhythm Café, Seattle",
    date: "2025-06-14",
    details: "Cozy chat and photo session with fans.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&h=300&q=80",
    type: "online"
  },
  {
    location: "Melody Hub, Chicago",
    date: "2025-06-16",
    details: "Interactive meet and performance preview.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&h=300&q=80",
    type: "offline"
  }
];



const qnaSessions = [
  {
    question: "Do you write your own lyrics?",
    answer: "Yes, every song is a piece of my personal journal.",
    artist: "Jayden Flux",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&h=300&q=80",
    date: "2025-05-12",
    location: "Live Stream on YouTube",
    likes: 320,
    tags: ["lyrics", "songwriting", "personal"],
    videoLink: "https://www.youtube.com/watch?v=abcdef12345",
  },
  {
    question: "Any artists you dream to collaborate with?",
    answer: "Definitely Billie Eilish and Ed Sheeran.",
    artist: "Orion Black",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=500&h=300&q=80",
    date: "2025-04-28",
    location: "Podcast Episode #42",
    likes: 487,
    tags: ["collaboration", "dreams", "artists"],
    videoLink: null,
  },
  {
    question: "What genre defines your style best?",
    answer: "A blend of alt-pop, synthwave, and emotional ballads.",
    artist: "Ava Lux",
    image:
      "https://images.unsplash.com/photo-1544785349-c4a5301826fd?auto=format&fit=crop&w=500&h=300&q=80",
    date: "2025-06-01",
    location: "Virtual AMA Session",
    likes: 289,
    tags: ["alt-pop", "synthwave", "ballads"],
    videoLink: "https://www.youtube.com/watch?v=xyz987654",
  },
];


const liveEvents = [
  {
    id: 0,
    title: "Live in Tokyo",
    banner: "https://images.unsplash.com/photo-1629276301625-8c74f25c0abd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpdmUlMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    isActive: true
  },
  {
    id: 1,
    title: "Berlin Beats",
    banner: "https://media.istockphoto.com/id/1375827268/photo/audience-waving-hand-for-dj-player-music-at-music-concert-concept-of-nightclub-entertainment.jpg?s=612x612&w=0&k=20&c=ftoHbX46QqgN0Ty6eGuqhcAcEM6hb2xZxHYLCu1xWMM=",
    isActive: false
  },
  {
    id: 2,
    title: "Paris Pulse",
    banner: "https://media.istockphoto.com/id/1181403265/photo/close-up-of-woman-holding-mobile-phone-screen-to-camera-as-she-arrives-at-entrance-to-music.jpg?s=612x612&w=0&k=20&c=EADjXtTvtzEAboqwUqcIcIwBrYihL4MSg-AYQTQ6Vac=",
    isActive: false
  },
  {
    id: 3,
    title: "London Vibes",
    banner: "https://media.istockphoto.com/id/1387389124/photo/acoustic-guitar-on-an-empty-stage.jpg?s=612x612&w=0&k=20&c=nWBG5mlSh03q-jDvdRA42Nu0Uk_oLyyLWPtRCryUr8g=",
    isActive: false
  },
  {
    id: 5,
    title: "Mumbai Melodies",
    banner: "https://media.istockphoto.com/id/1412850434/photo/music-festival.jpg?s=612x612&w=0&k=20&c=cNZrg8ReX1cH27WRi4yAFYhZm2VgSImImkhfNYwoZyc=",
    isActive: false
  },
  {
    id: 6,
    title: "Sydney Sunset Sessions",
    banner: "https://media.istockphoto.com/id/1227545308/photo/stage-for-live-concert-online-transmission-business-concept-for-a-concert-online-production.jpg?s=612x612&w=0&k=20&c=VdwVzNir08FTw3Oe0tvzCIuBCb25ZdVYogFd2kOZUEA=",
    isActive: false
  }
];


export default function ArtistEventsPage() {
  const [liveNow, setLiveNow] = useState(liveEvents);

  const toggleActive = (id: number) => {
    setLiveNow(prev =>
      prev.map(e =>
        e.id === id ? { ...e, isActive: !e.isActive } : e
      )
    );
  };

  const [likedSessions, setLikedSessions] = useState({});

  const toggleLike = (index) => {
    setLikedSessions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  return (
    <div className="relative max-w-7xl mx-auto p-4 pb-32">
      {/* Live Now */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-white">🔴 Live Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {liveNow.map(event => (
            <div key={event.id} className="flex flex-col items-center space-y-2">
              {/* Circular Image Card */}
              <div
                className="relative w-40 h-40 rounded-full overflow-hidden bg-[#1f1f1f] shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => toggleActive(event.id)}
              >
                <img
                  src={event.banner}
                  className="w-full h-full object-cover rounded-full"
                  alt={event.title}
                />
                <div
                  className={`absolute top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-full shadow text-[10px] text-white ${event.isActive ? 'bg-green-600' : 'bg-red-600'
                    }`}
                >
                  {event.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
              {/* Title below the image */}
              <h3 className="text-white text-sm font-medium text-center truncate w-40">{event.title}</h3>
            </div>
          ))}
        </div>



      </div>

      {/* Exclusive Release */}
      <div className="py-8 px-4 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">🎧 Exclusive Releases</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {exclusiveReleases.map((release, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-gray-700 shadow-md mb-4">
                <img
                  src={release.image}
                  alt={release.artist}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold text-center">{release.artist}</h3>
              <p className="text-sm text-gray-400 text-center">{release.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet and Greet */}
      <div className="bg-gray-950  py-10 px-4 md:px-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
          🎤 Meet & Greet Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meetAndGreets.map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-700 transition-all group"
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 shadow-md flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.location}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm">
                    {event.location}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${event.type === "online"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                      }`}
                  >
                    {event.type.toUpperCase()}
                  </span>
                </div>

                <p className="text-gray-400 text-xs">
                  {new Date(event.date).toDateString()}
                </p>

                <p className="text-gray-300 text-xs mt-1 group-hover:text-white transition duration-300">
                  {event.details.length > 50
                    ? event.details.slice(0, 50) + "..."
                    : event.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Q&A */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
          🎤 Q&A
        </h2>
        {qnaSessions.map((session, i) => (
          <div
            key={i}
            className="flex gap-5 bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Small round artist image */}
            <img
              src={session.image}
              alt={session.artist}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />

            <div className="flex flex-col flex-grow">
              {/* Artist name and date/location */}
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {session.artist}
                </h3>
                <div className="text-sm text-gray-500 whitespace-nowrap">
                  {new Date(session.date).toLocaleDateString()} • {session.location}
                </div>
              </div>

              {/* Question */}
              <p className="text-gray-800 font-medium mb-2">{session.question}</p>

              {/* Answer */}
              <p className="text-gray-600 mb-3">{session.answer}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {session.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full cursor-pointer hover:bg-indigo-200 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Likes and Video link */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                {/* Like button */}
                <button
                  onClick={() => toggleLike(i)}
                  className={`flex items-center gap-1 focus:outline-none ${likedSessions[i] ? "text-red-500" : "text-gray-400"
                    } hover:text-red-500 transition`}
                  aria-label="Like"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={likedSessions[i] ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>{likedSessions[i] ? session.likes + 1 : session.likes}</span>
                </button>

                {/* Video link if available */}
                {session.videoLink && (
                  <a
                    href={session.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 15l5.19-3L10 9v6z" />
                      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* My Events */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          🎶  My Events
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {myEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.banner}
                alt={event.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(event.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Artist:</span> {event.artistName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Other Artists */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
          🎶Other Artists' Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {otherArtistsEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl dark:bg-gray-800 bg-white"
            >
              <img
                src={event.banner}
                alt={event.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {event.date} • {event.location}
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-400 italic">
                  Artist: {event.artistName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full shadow-xl overflow-hidden"
            >
              <img
                src={selectedEvent.banner}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedEvent.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Date:</strong> {selectedEvent.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                  Artist: {selectedEvent.artistName}
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Floating Button */}
      <button
        className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center animate-bounce z-50"
        onClick={() => alert('Create Event Clicked')}
      >
        <AddCircleIcon className="w-8 h-8" />
      </button>
    </div>
  );
}




