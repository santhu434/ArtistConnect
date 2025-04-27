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
                        {/* Live Now */}
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

        </>
    );
}

export default FansExplore;
