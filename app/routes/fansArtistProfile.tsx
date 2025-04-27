
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import a2 from '../assets/images/Ellipse 3-2.png';
import e1 from '../assets/images/image-1.png';
import e2 from '../assets/images/image-2.png';
import e0 from '../assets/images/imageArt.png';
import audio from '../assets/music/one.mp3';



const MusicCard = ({
  title,
  img,
  time,
  audio,
  onPlay,
}: {
  title: string;
  img: string;
  time: string;
  audio: string;
  onPlay: (audioSrc: string, title: string, img: string) => void;
}) => (
  <div className="max-w-[200px] min-w-48 w-full relative group">
    <img src={img} alt={title} className="w-48 h-24 rounded md:h-36 object-cover" />
    <div className="p-2">
      <p className="text-sm md:text-base font-normal md:font-semibold text-[#D8D8D8] truncate">{title}</p>
      <p className="text-xs md:text-sm text-[#A2A2A2]">{time}</p>
    </div>
    {/* Play Button */}
    <button
      onClick={() => onPlay(audio, title, img)}
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition"
    >
      <PlayArrowIcon sx={{ fontSize: 40, color: '#ffffff' }} />
    </button>
  </div>
);

const ShopCard = ({ title, img, price }: { title: string; img: string; price: string }) => (
  <div className="bg-[#2B2C31] rounded min-w-40">
    <img src={img} alt={title} className="h-36 w-full object-cover" />
    <div className="p-3">
      <p className="text-base truncate font-semibold text-[#F3F4F6]">{title}</p>
      <p className="text-xs font-normal truncate text-[#F3F4F6]">RM {price}</p>
    </div>
  </div>
);

const ArtistProfile: React.FC = () => {
  const navigate = useNavigate();
  const [currentAudio, setCurrentAudio] = useState<{ src: string; title: string; img: string } | null>(null);

  const topHits = [
    { img: e2, title: 'Locked out of Heaven', duration: '2:49' },
    { img: e1, title: 'Just the way you are.', duration: '2:49' },
    { img: e2, title: "That's What I like", duration: '2:49' },
    { img: e1, title: 'APT.', duration: '2:49' },
    { img: e2, title: 'ROSE', duration: '2:49' },
  ];

  const handlePlay = (audioSrc: string, title: string, img: string) => {
    setCurrentAudio({ src: audioSrc, title, img });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <main className="flex-1 w-full">
        <img src={e0} alt="cover" className="w-full h-20 md:h-52 object-fill md:object-cover" />

        {/* Profile Header */}
        <div className="flex flex-row items-start gap-4 p-2 -mt-12 md:-mt-16">
          <img src={a2} alt="artist" className="w-24 h-24 md:w-40 md:h-40 rounded-full" />
          <div>
            <h2 className="sm:text-4xl text-2xl font-bold">Bruno Mars</h2>
            <p className='text-xs md:text-base font-medium text-[#D8D8D8] mt-5 opacity-50'>American singer-songwriter and musician</p>
            <p className="text-xs md:text-base font-medium underline text-[#D8D8D8] opacity-50">bio.to/BrunoMars</p>
            <button className="mt-2 md:px-4 px-2 md:py-2 py-1 rounded bg-gradient-to-r font-medium from-[#650077] to-[#AE008E] text-[#D9D9D9] text-[10px] md:text-sm">
              Become a Fan
            </button>
            <button className='ml-2 md:ml-5'>
              <MoreHorizIcon />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#2B2C31] flex gap-1 overflow-x-auto whitespace-nowrap">
          {['Overview', 'Feed', 'Shop', 'Community', 'Events'].map((tab, i) => (
            <button
              key={i}
              className={`text-[#858585] cursor-pointer flex-1/5 px-2 md:px-4 py-2 text-[13px] md:text-base font-normal border-b-2 ${tab === "Overview" ? "border-[#FF3939] font-semibold text-[#FF3939]" : "border-transparent"} hover:border-[#FF3939]`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Music & Shop Sections */}
        <div className="flex flex-col lg:flex-row gap-8 p-4">
          {/* Recent Releases */}
          <section className="flex-3/5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base md:text-lg text-[#D8D8D8] font-semibold">Recent Releases</h3>
              <button className="md:hidden underline text-xs text-[#FF3939]">View all</button>
            </div>
            <div className="flex overflow-auto md:grid md:grid-cols-3 gap-4 sleek-scrollbar">
              <MusicCard title="APT." img={e1} time="2:49" audio={audio} onPlay={handlePlay} />
              <MusicCard title="Just the Way You Are" img={e2} time="3:40" audio={audio} onPlay={handlePlay} />
              <MusicCard title="Locked Out of Heaven" img={e0} time="3:53" audio={audio} onPlay={handlePlay} />
            </div>
          </section>

          {/* Shop */}
          <section className="flex-2/5">
            <h3 className="text-lg text-[#D8D8D8] font-semibold mb-3">Shop</h3>
            <div className="flex flex-nowrap overflow-auto gap-4">
              <ShopCard title="Vintage Denim Jacket" img={e2} price="350.00" />
              <ShopCard title="Cityscape Blazer" img={e1} price="350.00" />
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#1E1E1E] text-white pl-4 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <h2 className="text-lg text-[#D8D8D8] font-semibold mb-3">Top Hits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topHits.map((item, index) => (
                <div key={index} className="flex flex-row items-start space-x-2">
                  <img src={item.img} alt={item.title} className="w-20 h-16 rounded-xl" />
                  <div>
                    <p className="text-base font-semibold truncate text-[#D8D8D8]">{item.title}</p>
                    <span className="text-sm text-[#A2A2A2]">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-lg text-[#D8D8D8] font-semibold mb-3">Exclusive Contents</h2>
            <div className="grid grid-cols-1 space-y-4">
              <img src={e0} alt={`Exclusive banner`} className="h-36 w-md object-cover rounded-xl" />
              <p className="text-base font-semibold truncate text-[#D8D8D8]">Live Q&A - May 10 2025</p>
              <button className="px-4 py-2 w-min truncate rounded bg-transparent font-normal border-[#D1D5DB] border text-[#D1D5DB] text-base">
                Set Reminder
              </button>
              <p className="text-lg font-semibold truncate text-[#D8D8D8]">Community</p>
              <div className="flex space-x-2">
                <img src={a2} className="w-12 h-12" />
                <div>
                  <p className="text-base font-normal text-[#D8D8D8]">Excited to share that I'll be performing some new songs at my next live sessions!</p>
                  <div className="mt-2">
                    <span className="mr-2 text-[#A2A2A2] text-sm font-normal underline">5 Likes</span>
                    <span className="mr-2 text-[#A2A2A2] text-sm font-normal underline">2 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed md:hidden bottom-0 right-0 bg-[#292929] grid grid-cols-5 left-0">
        <div className="flex flex-col items-center px-5 py-3">
          <HomeFilledIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">HOME</div>
        </div>
        <div onClick={() => navigate("/fans/explore/")} className="flex flex-col items-center px-5 py-3">
          <SearchIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">EXPLORE</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <MusicNoteIcon sx={{ color: "#FF3939" }} />
          <div className="text-xs font-medium text-[#FF3939]">ARTISTS</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <StorefrontIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">SHOP</div>
        </div>
        <div className="flex flex-col items-center px-5 py-3">
          <ChatBubbleOutlineIcon sx={{ color: "#AAAAAA" }} />
          <div className="text-xs font-medium text-[#AAAAAA]">MESSAGES</div>
        </div>
      </nav>

      {/* Fixed Audio Player */}
      {currentAudio && (
        <div className="fixed bottom-16 left-0 right-0 mx-auto bg-gradient-to-r from-[#650077] to-[#AE008E] text-white flex items-center space-x-3 px-4 py-2 rounded-2xl shadow-lg z-50 max-w-md md:max-w-fit">
          <img src={currentAudio.img} alt={currentAudio.title} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold">{currentAudio.title}</span>
          </div>
          <audio src={currentAudio.src} controls autoPlay className="w-full md:w-60" />
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;

