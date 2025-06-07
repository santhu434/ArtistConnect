import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from 'react-router';
import a1 from "../assets/images/Ellipse 3-1.png";
import a2 from "../assets/images/Ellipse 3-2.png";
import a3 from "../assets/images/Ellipse 3-3.png";
import a4 from "../assets/images/Ellipse 3-4.png";
import a5 from "../assets/images/Ellipse 3-5.png";
import a6 from "../assets/images/Ellipse 3-6.png";
import a7 from "../assets/images/Ellipse 3-7.png";
import a0 from "../assets/images/Ellipse 3.png";
import e1 from "../assets/images/image-1.png";
import e2 from "../assets/images/image-2.png";
import e0 from "../assets/images/image.png";

const FansExplore = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="min-h-screen flex flex-col bg-[#1B1C21] text-white">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row flex-1">
                    {/* Left Nav */}


                    {/* Right Content */}
                    <div className="flex-1 mt-4 md:ml-2 px-4 md:px-0">

                        {/* Popular Artists */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#FF3939] font-bold text-xl">Popular Artists</h3>
                                <span className="text-[#858585] text-base font-medium">Show all</span>
                            </div>
                            <div className="flex overflow-x-auto gap-4 py-4">
                                {[a0, a1, a2, a3, a4, a5, a6, a7].map((img, idx) => {
                                    const names = [
                                        "Billie Eilish", "Taylor Swift", "The Weeknd", "BTS",
                                        "Bruno Mars", "Lady Gaga", "Taylor Swift", "Billie Eilish"
                                    ];
                                    return (
                                        <div key={idx} className="min-w-[100px] flex-shrink-0">
                                            <img className="w-24 h-24 object-cover rounded-full" src={img} alt={`Artist ${idx}`} />
                                            <span className="block text-[#D8D8D8] font-normal text-sm mt-1">{names[idx]}</span>
                                            <span className="text-[#A2A2A2] text-xs">Artist</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-[#FF3939] font-bold text-xl">Upcoming Events</h3>
                                <span className="text-[#858585] text-base font-medium ">Show all</span>
                            </div>
                            <div className="flex overflow-x-auto gap-4 py-4">
                                {[{ img: e0, title: "Neon Dreams Tour - ZYRA", venue: "Pulse Theatre, Singapore" },
                                { img: e0, title: "Cosmic Flow - AURA Live", venue: "Moonlight Dome, KL" },
                                { img: e1, title: "Skyline Beats - DJ VONN", venue: "Pulse Theatre, Singapore" },
                                { img: e2, title: "Skyline Beats - DJ VONN", venue: "Pulse Theatre, Singapore" }
                                ].map((event, idx) => (
                                    <div key={idx} className="bg-[#292929] rounded-md p-3 min-w-[240px]">
                                        <img className="w-full h-44 object-cover rounded" src={event.img} alt="Event" />
                                        <div className="text-white font-semibold text-base mt-2">{event.title}</div>
                                        <div className="text-[#D8D8D8] text-sm mt-1">{event.venue}</div>
                                        <div className="text-[#D8D8D8] text-sm mt-1">November 10, 2025</div>
                                        <div className="text-[#D8D8D8] text-sm mt-1">RM 150.00</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='fixed md:hidden bottom-0 right-0 bg-[#292929] rounded-2xl grid grid-cols-5 left-0 m-2'>
                <div className='flex flex-col items-center px-5 py-3'>
                    <HomeFilledIcon sx={{ color: "#AAAAAA" }} />
                    <div className='text-xs font-medium text-[#AAAAAA]'>HOME</div>
                </div>
                <div className='flex flex-col items-center px-5 py-3'>
                    <SearchIcon sx={{ color: "#FF3939" }} />
                    <div className='text-xs font-medium text-[#FF3939]'>EXPLORE</div>
                </div>
                <div onClick={() => navigate("/fans/artistprofile/")} className='flex flex-col items-center px-5 py-3'>
                    <MusicNoteIcon sx={{ color: "#AAAAAA" }} />
                    <div className='text-xs font-medium text-[#AAAAAA]'>ARTISTS</div>
                </div>
                <div className='flex flex-col items-center px-5 py-3'>
                    <StorefrontIcon sx={{ color: "#AAAAAA" }} />
                    <div className='text-xs font-medium text-[#AAAAAA]'>SHOP</div>
                </div>
                <div className='flex flex-col items-center px-5 py-3'>
                    <ChatBubbleOutlineIcon sx={{ color: "#AAAAAA" }} />
                    <div className='text-xs font-medium text-[#AAAAAA]'>MESSAGES</div>
                </div>
            </nav>
        </>
    );
}

export default FansExplore;
