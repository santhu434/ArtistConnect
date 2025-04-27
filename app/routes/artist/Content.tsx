import { useState } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface AudioContent {
  id: number;
  title: string;
  src: string;
  img: string;
  duration: string;
}

interface VideoContent {
  id: number;
  title: string;
  src: string;
  thumbnail: string;
  duration: string;
  type: "youtube" | "video"; // NEW: type field
}

const mockAudioContent: AudioContent[] = [
  {
    id: 1,
    title: "My Hit Song",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=300&q=80",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Chill Vibes",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=300&q=80",
    duration: "4:20"
  },
  {
    id: 3,
    title: "Night Drive",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80",
    duration: "2:58"
  },
  {
    id: 4,
    title: "Dreamscape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
    duration: "5:10"
  }
];

const mockVideoContent: VideoContent[] = [
  {
    id: 1,
    title: "Live Concert",
    src: "https://www.youtube.com/embed/k0Ka-deab1s?si=oHlWc8AM87Qb82JQ",
    thumbnail: "https://images.unsplash.com/photo-1581320545123-8033f1f75e42?w=300&q=80",
    duration: "10:24",
    type: "youtube"
  },
  {
    id: 2,
    title: "Behind the Scenes",
    src: "https://www.youtube.com/embed/szjhe5SdWYY?si=wuvpQnSt7fWf5yh3",
    thumbnail: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=300&q=80",
    duration: "6:17",
    type: "youtube"
  },
  {
    id: 3,
    title: "Music Video",
    src: "https://www.youtube.com/embed/YrJ6OZ7VVWc?si=_MKvX07_ywpxaCuu",
    thumbnail: "https://images.unsplash.com/photo-1532777946379-3ff1413c8f16?w=300&q=80",
    duration: "4:05",
    type: "youtube"
  },
  {
    id: 4,
    title: "Studio Session",
    src: "https://www.youtube.com/embed/qARrn7G067w?si=X5BUCWzdsHpKMyeP",
    thumbnail: "https://images.unsplash.com/photo-1525286116112-b59af11adad1?w=300&q=80",
    duration: "7:42",
    type: "youtube"
  }
];

export default function ArtistContentPage() {
  const [currentAudio, setCurrentAudio] = useState<AudioContent | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Audio Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">🎵 My Audios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockAudioContent.map(audio => (
            <div 
              key={audio.id} 
              className="group relative rounded-lg overflow-hidden bg-[#1f1f1f] p-4 hover:bg-[#292929] cursor-pointer transition-all duration-300"
              onClick={() => setCurrentAudio(audio)}
            >
              <img src={audio.img} alt={audio.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{audio.title}</h3>
                  <PlayCircleOutlineIcon className="w-6 h-6 opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-gray-400">{audio.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-white">🎥 My Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockVideoContent.map(video => (
            <div key={video.id} className="rounded-lg overflow-hidden bg-[#1f1f1f] hover:bg-[#292929] transition-all duration-300">
              <div className="relative">
                {video.type === "youtube" ? (
                  <iframe
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-40"
                  ></iframe>
                ) : (
                  <video 
                    src={video.src}
                    poster={video.thumbnail}
                    controls
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Audio Player */}
      {currentAudio && (
        <div className="fixed bottom-16 left-0 right-0 mx-auto bg-[#292929] text-white flex items-center space-x-3 px-4 py-2 rounded-2xl shadow-lg z-50 max-w-md md:max-w-fit">
          <img src={currentAudio.img} alt={currentAudio.title} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">{currentAudio.title}</span>
          </div>
          <audio src={currentAudio.src} controls autoPlay className="w-full md:w-60" />
        </div>
      )}
    </div>
  );
}
