"use client";
import { useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import a1 from "../../assets/images/Ellipse 3-1.png";
import a2 from "../../assets/images/Ellipse 3-2.png";
import a3 from "../../assets/images/Ellipse 3-3.png";
import a4 from "../../assets/images/Ellipse 3-4.png";
import VideocamIcon from '@mui/icons-material/Videocam';
interface FavoriteSong {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
  audioSrc: string;
}

interface MyPlaylist {
  id: number;
  name: string;
  songsCount: number;
  cover: string;
}

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  cover: string;
  description: string;
}

const mockFavoritePlaylist: FavoriteSong[] = [
  {
    id: 1,
    title: "Sunset Drive",
    artist: "DJ Nova",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    duration: "3:58",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 2,
    title: "Chill Nights",
    artist: "Luna Waves",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80",
    duration: "4:22",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: 3,
    title: "Heartbeat",
    artist: "Electric Pulse",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80",
    duration: "3:15",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
];

const mockMyPlaylist: MyPlaylist[] = [
  {
    id: 1,
    name: "Workout Beats",
    songsCount: 12,
    cover: "https://media.istockphoto.com/id/1210735036/photo/close-up-portrait-of-a-caucasian-young-man-with-earphones-in-his-ears-drinking-water-after.webp?a=1&b=1&s=612x612&w=0&k=20&c=hGIW67y9hewemNgllC1RejrVSLpWIuDYCKBgpE12-B0=",
  },
  {
    id: 2,
    name: "Chill Sunday",
    songsCount: 8,
    cover: "https://plus.unsplash.com/premium_photo-1687832783477-7ba6a0412328?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Party Mix",
    songsCount: 20,
    cover: "https://images.unsplash.com/photo-1621623207386-54450400f7cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const mockUpcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: "Virtual Live Party",
    date: "2025-05-15",
    time: "8:00 PM",
    cover: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=300&q=80",
    description: "Join an exclusive live virtual concert with DJ Nova!",
  },
  {
    id: 2,
    title: "Acoustic Session",
    date: "2025-06-02",
    time: "6:00 PM",
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&q=80",
    description: "An intimate acoustic show with Luna Waves 🎸",
  },
  {
    id: 3,
    title: "Behind the Beats",
    date: "2025-06-20",
    time: "7:30 PM",
    cover: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=300&q=80",
    description: "Meet & greet with Electric Pulse + Q&A session!",
  },
];

export default function FansHomePage() {
  const [currentAudio, setCurrentAudio] = useState<FavoriteSong | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-12">
      <div>
        <h3 className="text-[#FF3939] font-bold text-xl">Live Now</h3>
        <p className="text-white font-normal text-lg">Real-time live broadcasts happening</p>
        <div className="my-3 flex flex-nowrap overflow-auto gap-3">
          {[a1, a2, a3, a4].map((img, idx) => {
            const names = ["Taylor Swift", "The Weeknd", "BTS", "Bruno Mars"];
            return (
              <div className='min-w-20 mx-1 text-center'>
                <span className='relative text-center gap-2'>
                  <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={img} alt="Artist 1" />
                  <div className='bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal w-min flex px-1 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='small' />LIVE</div>
                </span>
                <span className='text-[#D8D8D8] text-center relative w-full font-normal text-sm'>{names[idx]}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Favorite Playlist Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">🎵 My Favorite Playlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockFavoritePlaylist.map((song) => (
            <div
              key={song.id}
              className="group relative bg-[#1f1f1f] rounded-xl overflow-hidden hover:bg-[#292929] cursor-pointer p-4 transition-all duration-300"
              onClick={() => setCurrentAudio(song)}
            >
              <img src={song.cover} alt={song.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{song.title}</h3>
                  <PlayCircleOutlineIcon className="w-7 h-7 opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-gray-400">{song.artist} • {song.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Playlist Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">🎶 My Playlists</h2>
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {mockMyPlaylist.map((playlist) => (
            <div
              key={playlist.id}
              className="min-w-[200px] bg-[#1f1f1f] rounded-xl hover:bg-[#292929] transition-all duration-300 cursor-pointer p-4"
            >
              <img src={playlist.cover} alt={playlist.name} className="w-full h-32 object-cover rounded-md mb-3" />
              <div className="text-white">
                <h3 className="font-semibold">{playlist.name}</h3>
                <p className="text-sm text-gray-400">{playlist.songsCount} Songs</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">🎤 Exclusive Online Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockUpcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#1f1f1f] rounded-xl hover:bg-[#292929] transition-all duration-300 overflow-hidden"
            >
              <img src={event.cover} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4 text-white space-y-2">
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.date} • {event.time}</p>
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom Audio Player */}
      {currentAudio && (
        <div className="fixed bottom-16 left-0 right-0 mx-auto bg-gradient-to-r from-[#650077] to-[#AE008E] text-white flex items-center space-x-3 px-4 py-2 rounded-2xl shadow-lg z-50 max-w-md md:max-w-fit">
          <img src={currentAudio.cover} alt={currentAudio.title} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">{currentAudio.title}</span>
            <span className="text-xs text-gray-400">{currentAudio.artist}</span>
          </div>
          <audio src={currentAudio.audioSrc} controls autoPlay className="w-full md:w-60" />
        </div>
      )}
    </div>
  );
}
