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
    return (<>
        <div className="min-h-screen flex flex-col bg-[#1B1C21] text-white">
            {/* header */}
            <div className="h-[88px] bg-gradient-to-r w-full from-[#650077] to-[#AE008E]">
                <div className="flex flex-row justify-center h-full gap-4 mb-8 items-center">
                    <img src={logowhite} className="w-[32px] h-[32px]" alt="Logo" />
                    <h1 className="font-inter text-4xl font-semibold text-[#F9FAFB] flex items-center justify-center">
                        ArtistConnect
                    </h1>
                </div>
            </div>

            {/* left navigation */}
            <div className="flex-1 flex">
                <div className="bg-[#292929] flex flex-col justify-between rounded-2xl m-6 flex-2/12 w-xs">
                    <div className="  flex flex-col pt-40 pl-5">
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>HOME</NavLink>
                        <NavLink to={"/fans/explore"} className={"text-[#FF3939] font-medium text-base mb-4"}>EXPLORE</NavLink>
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>ARTISTS</NavLink>
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>SHOP MERCH</NavLink>
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>MESSAGES</NavLink>

                    </div>
                    <div className="p-8">
                        <NavLink to={"/fans/profile"} className={"flex justify-center items-center"}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar>
                            <span className="text-[#858585] font-medium text-base ml-3">Tharik Akbar</span>
                        </NavLink>
                    </div>
                </div>

                {/* Right content */}
                <div className="mt-4 ml-2  flex-10/12 w-xs">
                    {/* Live Now */}
                    <div>
                        <h3 className="text-[#FF3939] font-bold text-xl">Live Now</h3>
                        <span className="text-white font-normal text-lg">Real-time live broadcasts happening</span>
                        <div className="my-3  flex ">

                            <div className=' mx-1 text-center'>
                                <span className='relative text-center gap-2'>
                                    <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={a1} alt="Artist 1" />
                                    <div className='bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal w-min flex px-1 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='small' />LIVE</div>
                                </span>
                                <span className='text-[#D8D8D8] text-center relative w-full font-normal text-sm'>Taylor Swift</span>
                            </div>
                            <div className=' mx-1 text-center'>
                                <span className='relative text-center gap-2'>
                                    <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={a2} alt="Artist 1" />
                                    <div className='bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal w-min flex px-1 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='small' />LIVE</div>
                                </span>
                                <span className='text-[#D8D8D8] text-center relative w-full font-normal text-sm'>The Weeknd</span>
                            </div>
                            <div className=' mx-1 text-center'>
                                <span className='relative text-center gap-2'>
                                    <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={a3} alt="Artist 1" />
                                    <div className='bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal w-min flex px-1 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='small' />LIVE</div>
                                </span>
                                <span className='text-[#D8D8D8] text-center relative w-full font-normal text-sm'>BTS</span>
                            </div>
                            <div className=' mx-1 text-center'>
                                <span className='relative text-center gap-2'>
                                    <img className="w-16 h-16 mx-auto border-[#AE008E] border-2 rounded-full" src={a4} alt="Artist 1" />
                                    <div className='bg-[#FF3939] absolute -mt-5 -translate-x-[50%] top-[80%] left-[50%] text-[10.6px] font-normal w-min flex px-1 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='small' />LIVE</div>
                                </span>
                                <span className='text-[#D8D8D8] text-center relative w-full font-normal text-sm'>Bruno Mars</span>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10'>
                        <div className='flex justify-between items-center'>
                            <h3 className="text-[#FF3939] font-bold text-xl">Popular Artists</h3>
                            <span className='text-[#858585] text-base font-medium'>Show all</span>
                        </div>
                        <div className='flex'>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a0} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Billie Eilish</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a1} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Taylor Swift</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a2} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>The Weeknd</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a3} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>BTS</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a4} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Bruno Mars</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a5} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Lady Gaga</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a6} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Taylor Swift</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                            <div className=' px-2 flex flex-col items-start'>
                                <img className='m-w-36 m-h-36' src={a7} alt="Artist 1" />
                                <span className='text-[#D8D8D8] text-center font-normal text-lg'>Billie Eilish</span>
                                <span className='font-normal text-[#A2A2A2] text-base'>Artist</span>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 mt-5'>
                        <div className='flex justify-between items-center'>
                            <h3 className="text-[#FF3939] font-bold text-xl">Upcoming Events</h3>
                            <span className='text-[#858585] text-base font-medium'>Show all</span>
                        </div>
                        <div className='flex  mt-3'>
                            <div className='p-2 rounded-sm bg-[#292929] w-max mx-2'>
                                <img className='w-56 h-44' src={e0} alt="Event" />
                                <div className='font-semibold text-lg text-white mt-2'>Neon Dreams Tour - ZYRA</div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    Pulse Theatre,<br />
                                    Singapore
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    November 10 ,2025
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    RM 150.00
                                </div>
                            </div>

                            <div className='p-2 rounded-sm bg-[#292929] w-max mx-2'>
                                <img className='w-56 h-44' src={e0} alt="Event" />
                                <div className='font-semibold text-lg text-white mt-2'>Cosmic Flow - AURA Live </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    Moonlight Dome, <br />
                                    KL
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    November 10 ,2025
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    RM 150.00
                                </div>
                            </div>
                            <div className='p-2 rounded-sm bg-[#292929] w-max mx-2'>
                                <img className='w-56 h-44' src={e1} alt="Event" />
                                <div className='font-semibold text-lg text-white mt-2'>Skyline Beats - DJ VONN</div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    Pulse Theatre,<br />
                                    Singapore
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    November 10 ,2025
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    RM 150.00
                                </div>
                            </div>
                            <div className='p-2 rounded-sm bg-[#292929] w-max mx-2'>
                                <img className='w-56 h-44' src={e2} alt="Event" />
                                <div className='font-semibold text-lg text-white mt-2'>Skyline Beats - DJ VONN</div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    Pulse Theatre,<br />
                                    Singapore
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    November 10 ,2025
                                </div>
                                <div className='font-normal text-sm text-[#D8D8D8] mt-2'>
                                    RM 150.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default FansExplore;