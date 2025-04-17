import React from 'react';
import logowhite from '../assets/icons/logowhite.svg';
import a0 from '../assets/images/Ellipse 3.png';
import a1 from '../assets/images/Ellipse 3-1.png';
import a2 from '../assets/images/Ellipse 3-2.png';
import a3 from '../assets/images/Ellipse 3-3.png';
import a4 from '../assets/images/Ellipse 3-4.png';
import e0 from '../assets/images/imageArt.png';
import e1 from '../assets/images/image-1.png';
import e2 from '../assets/images/image-2.png';

const MusicCard = ({ title, img, time }: { title: string; img: string; time: string }) => (
  <div className="bg-[#2a2a2a] text-white w-full max-w-[150px] rounded overflow-hidden">
    <img src={img} alt={title} className="h-36 w-full object-cover" />
    <div className="p-2">
      <p className="text-sm truncate">{title}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

const ShopCard = ({ title, img, price }: { title: string; img: string; price: string }) => (
  <div className="bg-[#2a2a2a] text-white w-full max-w-[150px] rounded overflow-hidden">
    <img src={img} alt={title} className="h-36 w-full object-cover" />
    <div className="p-2">
      <p className="text-sm truncate">{title}</p>
      <p className="text-xs text-gray-400">RM {price}</p>
    </div>
  </div>
);

const ArtistProfile: React.FC = () => {
  const topHits = [
    { img: a0, title: 'Locked out of Heaven', duration: '2:49' },
    { img: a1, title: 'Just the way you are.', duration: '2:49' },
    { img: a2, title: "That's What I like", duration: '2:49' },
    { img: a3, title: 'APT.', duration: '2:49' },
    { img: a4, title: 'ROSE', duration: '2:49' },
  ];

  const exclusiveContents = [e0];

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col justify-between w-52 bg-[#1e1e1e] h-screen p-4">
          <div>
            <h2 className="text-lg font-semibold mb-6">MENU</h2>
            {['HOME', 'EXPLORE', 'ARTISTS', 'SHOP MERCH', 'MESSAGES'].map((item, i) => (
              <p key={i} className={`mb-3 ${item === 'ARTISTS' ? 'text-[#ff3377]' : ''}`}>{item}</p>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <img src={a0} alt="avatar" className="w-10 h-10 rounded-full" />
            <p>Tharik Akbar</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          {/* Cover */}
          <img src={e0} alt="cover" className="w-full h-52 object-cover" />

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4">
            <img src={a1} alt="artist" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">Bruno Mars</h2>
              <p>American singer-songwriter and musician</p>
              <p className="text-sm text-gray-400">bio.to/BrunoMars</p>
              <button className="mt-2 px-4 py-1 rounded bg-[#a100ff] hover:bg-[#8700cc] text-white text-sm">
                Become a Fan
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 px-4 overflow-x-auto whitespace-nowrap">
            {['Overview', 'Feed', 'Shop', 'Community', 'Events'].map((tab, i) => (
              <button
                key={i}
                className="text-white px-4 py-2 text-sm border-b-2 border-transparent hover:border-white"
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Music & Shop Sections */}
          <div className="flex flex-col lg:flex-row gap-8 p-4">
            {/* Recent Releases */}
            <section className="flex-1">
              <h3 className="text-lg font-semibold mb-3">Recent Releases</h3>
              <div className="flex flex-wrap gap-4">
                <MusicCard title="APT." img={e1} time="2:49" />
                <MusicCard title="Just the way you are" img={e2} time="3:40" />
                <MusicCard title="Locked out of Heaven" img={e0} time="3:53" />
              </div>
            </section>

            {/* Shop */}
            <section className="flex-1">
              <h3 className="text-lg font-semibold mb-3">Shop</h3>
              <div className="flex flex-wrap gap-4">
                <ShopCard title="Vintage Denim Jacket" img={a2} price="350.00" />
                <ShopCard title="Cityscape Blazer" img={a3} price="350.00" />
              </div>
            </section>
          </div>

          {/* Bottom Section */}
          <div className="bg-[#1E1E1E] text-white p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Hits */}
            <section className="md:col-span-2">
              <h2 className="text-sm font-semibold mb-3">Top Hits</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {topHits.map((item, index) => (
                  <div key={index} className="flex flex-col items-start space-y-1">
                    <img src={item.img} alt={item.title} className="w-full rounded-md" />
                    <p className="text-sm truncate">{item.title}</p>
                    <span className="text-xs text-gray-400">{item.duration}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Exclusive Contents */}
            <section>
              <h2 className="text-sm font-semibold mb-3">Exclusive Contents</h2>
              <div className="flex flex-col space-y-4">
                {exclusiveContents.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Exclusive ${index}`}
                    className="rounded-md w-full object-cover"
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArtistProfile;
