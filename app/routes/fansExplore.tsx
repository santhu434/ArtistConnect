import VideocamIcon from '@mui/icons-material/Videocam';
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { NavLink } from "react-router";
import logowhite from "../assets/icons/logowhite.svg";
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
    return (
        <div className="min-h-screen flex flex-col bg-[#1B1C21] text-white">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row flex-1">
                {/* Left Nav */}
                <div className="bg-[#292929] md:rounded-2xl m-2 md:m-6 w-full md:w-3/12 lg:w-2/12 p-4 md:p-4 md:pt-40 flex flex-col justify-between">
                    <div className="flex flex-col space-y-4">
                        <NavLink to="#" className="text-[#858585] font-medium text-base">HOME</NavLink>
                        <NavLink to="/fans/explore" className="text-[#FF3939] font-medium text-base">EXPLORE</NavLink>
                        <NavLink to="/fans/artistprofile" className="text-[#858585] font-medium text-base">ARTISTS</NavLink>
                        <NavLink to="#" className="text-[#858585] font-medium text-base">SHOP MERCH</NavLink>
                        <NavLink to="#" className="text-[#858585] font-medium text-base">MESSAGES</NavLink>
                    </div>
                    <div className="mt-10 md:p-8">
                        <NavLink to="/fans/profile" className="flex items-center">
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar>
                            <span className="text-[#858585] font-medium text-base ml-3 hidden md:inline">Tharik Akbar</span>
                        </NavLink>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 mt-4 md:ml-2 px-4 md:px-0">
                    {/* Live Now */}
                    <div>
                        <h3 className="text-[#FF3939] font-bold text-xl">Live Now</h3>
                        <p className="text-white font-normal text-lg">Real-time live broadcasts happening</p>
                        <div className="my-3 flex flex-wrap gap-3">
                            {[a1, a2, a3, a4].map((img, idx) => {
                                const names = ["Taylor Swift", "The Weeknd", "BTS", "Bruno Mars"];
                                return (
                                    <div key={idx} className="text-center">
                                        <div className="relative">
                                            <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={img} alt={`Artist ${idx}`} />
                                            <div className="bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal flex px-1 rounded-full items-center">
                                                <VideocamIcon fontSize='small' /> LIVE
                                            </div>
                                        </div>
                                        <span className="text-[#D8D8D8] text-sm block mt-1">{names[idx]}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Popular Artists */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center">
                            <h3 className="text-[#FF3939] font-bold text-xl">Popular Artists</h3>
                            <span className="text-[#858585] text-base font-medium md:hidden">Show all</span>
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
                            <span className="text-[#858585] text-base font-medium md:hidden">Show all</span>
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
    );
}

export default FansExplore;
