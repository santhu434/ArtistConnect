import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import a2 from '../assets/images/Ellipse 3-2.png';
import e1 from '../assets/images/image-1.png';
import e2 from '../assets/images/image-2.png';
import e0 from '../assets/images/imageArt.png';

const MusicCard = ({ title, img, time }: { title: string; img: string; time: string }) => (
  <div className="max-w-[200px] w-full">
    <img src={img} alt={title} className="w-48 h-36 object-cover" />
    <div className="p-2">
      <p className="text-base font-semibold text-[#D8D8D8] truncate">{title}</p>
      <p className="text-sm text-[#A2A2A2]">{time}</p>
    </div>
  </div>
);

const ShopCard = ({ title, img, price }: { title: string; img: string; price: string }) => (
  <div className="bg-[#2B2C31] rounded ">
    <img src={img} alt={title} className="h-36 w-full object-cover" />
    <div className="p-3">
      <p className="text-base truncate font-semibold text-[#F3F4F6]">{title}</p>
      <p className="text-xs font-normal truncate text-[#F3F4F6]">RM {price}</p>
    </div>
  </div>
);

const ArtistProfile: React.FC = () => {
  const topHits = [
    { img: e2, title: 'Locked out of Heaven', duration: '2:49' },
    { img: e1, title: 'Just the way you are.', duration: '2:49' },
    { img: e2, title: "That's What I like", duration: '2:49' },
    { img: e1, title: 'APT.', duration: '2:49' },
    { img: e2, title: 'ROSE', duration: '2:49' },
  ];



  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Cover */}
        <img src={e0} alt="cover" className="w-full h-52 object-cover" />

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 -mt-18">
          <img src={a2} alt="artist" className=" w-40 h-40 rounded-full" />
          <div>
            <h2 className="sm:text-4xl text-2xl font-bold">Bruno Mars</h2>
            <p className='text-base font-medium text-[#D8D8D8] mt-5 opacity-50'>American singer-songwriter and musician</p>
            <p className="text-base font-medium underline text-[#D8D8D8] opacity-50">bio.to/BrunoMars</p>
            <button className="mt-2 px-4 py-2  rounded bg-gradient-to-r font-medium from-[#650077] to-[#AE008E] text-[#D9D9D9] text-sm">
              Become a Fan
            </button>
            <button className='ml-5'>
              <MoreHorizIcon />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className=" bg-[#2B2C31] flex gap-1 overflow-x-auto whitespace-nowrap">
          {['Overview', 'Feed', 'Shop', 'Community', 'Events'].map((tab, i) => (
            <button
              key={i}
              className={`text-[#858585] cursor-pointer flex-1/5 px-4 py-2 text-base font-normal border-b-2 ${tab === "Overview" ? "border-[#FF3939] font-semibold text-[#FF3939]" : "border-transparent"} hover:border-[#FF3939]`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Music & Shop Sections */}
        <div className="flex flex-col lg:flex-row gap-8 p-4">
          {/* Recent Releases */}
          <section className="flex-3/5">
            <h3 className="text-lg text-[#D8D8D8] font-semibold mb-3">Recent Releases</h3>
            <div className="grid grid-cols-3 gap-4">
              <MusicCard title="APT." img={e1} time="2:49" />
              <MusicCard title="Just the way you are" img={e2} time="3:40" />
              <MusicCard title="Locked out of Heaven" img={e0} time="3:53" />
            </div>
          </section>

          {/* Shop */}
          <section className="flex-2/5">
            <h3 className="text-lg text-[#D8D8D8] font-semibold mb-3">Shop</h3>
            <div className="flex flex-wrap gap-4">
              <ShopCard title="Vintage Denim Jacket" img={e2} price="350.00" />
              <ShopCard title="Cityscape Blazer" img={e1} price="350.00" />
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#1E1E1E] text-white pl-4 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Hits */}
          <section className="md:col-span-2">
            <h2 className="text-lg text-[#D8D8D8] font-semibold mb-3">Top Hits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
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

          {/* Exclusive Contents */}
          <section className='mb-5'>
            <h2 className="text-lg text-[#D8D8D8] font-semibold mb-3">Exclusive Contents</h2>
            <div className="grid grid-cols-1 space-y-4">
              <img src={e0} alt={`Exclusive baner`} className="h-36 w-md object-cover rounded-xl" />
              <p className="text-base font-semibold truncate text-[#D8D8D8]">Live Q&A- May 10 2025</p>
              <button className=" px-4 py-2 w-min truncate rounded bg-transparent font-normal border-[#D1D5DB] border  text-[#D1D5DB] text-base">
                Set Reminder
              </button>
              <p className="text-lg font-semibold truncate text-[#D8D8D8]">Community</p>
              <div className='flex space-x-2'>
                <img src={a2} className='w-12 h-12' />
                <div>
                  <p className='text-base font-normal text-[#D8D8D8]'>Excited  to share that I'll be performing some new songs at my next live sessions!</p>
                  <div className='mt-2'>
                    <span className='mr-2 text-[#A2A2A2] text-sm font-normal underline'>5 Likes</span>
                    <span className='mr-2 text-[#A2A2A2] text-sm font-normal underline'>2 Comments</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
