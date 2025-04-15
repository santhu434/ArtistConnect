import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import VideocamIcon from '@mui/icons-material/Videocam';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { alpha, Avatar, Button, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import InputBase from '@mui/material/InputBase';
import { NavLink } from "react-router";
import logowhite from "../assets/icons/logowhite.svg";
import geographyImg from "../assets/images/geography.png";
import sp1 from "../assets/images/songPic (1).png";
import sp2 from "../assets/images/songPic (2).png";
import sp3 from "../assets/images/songPic (3).png";
import sp4 from "../assets/images/songPic (4).png";


import TuneIcon from '@mui/icons-material/Tune';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        // backgroundColor: alpha(theme.palette.common.white, 0.25),
        boxShadow: "0px 0px 2px #1B1C21"
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Artist = () => {
    return (<>
        <div className="min-h-screen flex flex-col bg-[#1B1C21] text-white">
            {/* header */}
            <div className="h-[88px] bg-gradient-to-r w-full flex justify-between from-[#650077] to-[#AE008E]">
                <div className="flex flex-row justify-center h-full gap-4 mb-8 ml-7 items-center">
                    <img src={logowhite} className="w-[32px] h-[32px]" alt="Logo" />
                    <h1 className="font-inter text-4xl font-semibold text-[#F9FAFB] flex items-center justify-center">
                        ArtistConnect
                    </h1>
                </div>
                <div className='flex items-center'>
                    <div>

                        <Search className='' sx={{ border: "1px solid #6B7280", backgroundColor: "#1B1C21", borderRadius: "50px" }}>
                            <SearchIconWrapper>
                                <SearchIcon color='primary' />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Menus.."
                                inputProps={{ 'aria-label': 'search', style: { minWidth: "24rem" } }}
                            />
                        </Search>
                    </div>
                    <div>
                        <div className="p-8 flex items-center">
                            <NotificationsIcon />
                            <NavLink to={"/fans/profile"} className={"flex ml-3 justify-center items-center"}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar>
                                <div className='flex flex-col ml-2'>
                                    <span className="text-white font-medium text-base">Tharik Akbar</span>
                                    <span className="text-white font-normal text-xs">Songwriter</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* left navigation */}
            <div className="flex-1 flex">
                <div className="bg-[#292929] flex flex-col justify-between rounded-2xl m-6 flex-2/12 w-xs py-5">
                    <div className='bg-[#FF3939] absolute text-lg font-normal self-center flex p-2 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='medium' />GO LIVE NOW</div>
                    <div className="  flex flex-col pt-40 pl-5">
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>FEED</NavLink>
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>CONTENT</NavLink>
                        <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>EVENTS</NavLink>
                        <NavLink to={"/fans/explore"} className={"text-[#FF3939] font-medium text-base mb-4"}>MY STUDIO ANALYTICS</NavLink>


                    </div>

                </div>

                {/* Right content */}
                <div className="mt-4 ml-2  flex-10/12 w-xs">
                    {/* Live Now */}
                    <div>
                        <h3 className="text-[#FF3939] font-bold text-3xl">Studio Analytics</h3>
                        <span className="text-white font-normal text-sm">Track your performance. Understand your fans. Grow your impact.</span>

                        <div className="my-3  flex ">

                            <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                                <div className='flex justify-between items-center'>

                                    <span className=''>
                                        <VisibilityIcon fontSize='small' />
                                        <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Total Fans</span>
                                    </span>
                                    <span>...</span>
                                </div>
                                <div className='flex my-3 items-center'>
                                    <span className='text-2xl font-semibold text-white'>50.8K</span>
                                    <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>28.4% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                                </div>

                            </div>
                            <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                                <div className='flex justify-between items-center'>

                                    <span className=''>
                                        <AddCircleIcon fontSize='small' />
                                        <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Audio Listeners</span>
                                    </span>
                                    <span>...</span>
                                </div>
                                <div className='flex my-3 items-center'>
                                    <span className='text-2xl font-semibold text-white'>20K</span>
                                    <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>3.1% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                                </div>

                            </div>
                            <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                                <div className='flex justify-between items-center'>

                                    <span className=''>
                                        <StarIcon fontSize='small' />
                                        <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Video Watch Time</span>
                                    </span>
                                    <span>...</span>
                                </div>
                                <div className='flex my-3 items-center'>
                                    <span className='text-2xl font-semibold text-white'>100h</span>
                                    <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>11.3% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                                </div>

                            </div>
                            <div className=' px-4 py-2 w-64 rounded-2xl bg-[#003754] border-[#343B4F] border-2 mx-2'>
                                <div className='flex justify-between items-center'>

                                    <span className=''>
                                        <StarIcon fontSize='small' />
                                        <span className='text-[#AEB9E1] font-normal text-xs ml-2'>Total Revenue</span>
                                    </span>
                                    <span>...</span>
                                </div>
                                <div className='flex my-3 items-center'>
                                    <span className='text-2xl font-semibold text-white'>RM 100.3K</span>
                                    <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center h-min rounded-sm p-0'><span className=' text-[10px] text-[#14CA74]'>11.3% </span><ArrowOutwardIcon className='max-w-3 max-h-3' fontSize='small' /></div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='flex mr-14'>
                        <div>
                            <div className='mr-8 flex-8/12'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-[#FF3939] font-bold text-xl">Content Performance</h3>
                                    <span className='text-[#858585] text-base font-medium'>
                                        <TuneIcon sx={{ color: "#FF3939" }} />
                                    </span>
                                </div>
                                <h3 className='text-white font-semibold text-base mt-3'>Top Performing Audio</h3>
                                <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                                <div className='grid grid-cols-2 gap-3 my-4'>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp1} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp4} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp2} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp3} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='mr-8 flex-8/12'>

                                <h3 className='text-white font-semibold text-base mt-3'>Top Performing Video</h3>
                                <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                                <div className='grid grid-cols-2 gap-3 my-4'>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp1} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp4} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp2} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>
                                    <div className=' px-2 flex flex-row items-start min-w-'>
                                        <img className='max-w-24 max-h-24' src={sp3} alt="Artist 1" />
                                        <div className='ml-3'>
                                            <div className='font-medium text-white text-base whitespace-nowrap'>Lost in the Vibe</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>Audio</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                            <div className='text-[#D8D8D8] font-normal text-[10px] whitespace-nowrap'>82% Completion</div>
                                            <Button variant='outlined' sx={{
                                                border: "1px solid #C7643D",
                                                padding: "1px",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "none",
                                                '&:hover': {
                                                    borderColor: '#C7643D',
                                                }, color: "#C7643D"
                                            }}>View</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-4/12 flex-col'>
                            <div>


                                <div className='flex  justify-between items-center'>
                                    <h3 className="text-[#FF3939] font-bold text-xl">Monetization</h3>

                                </div>
                                <h3 className='text-white font-semibold text-base mt-3'>Total Earnings Breakdown</h3>
                                <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                                <div className='flex justify-between'>
                                    <span className='text-xs font-normal text-white my-2'>Subscriptions</span>
                                    <span className='text-xs font-semibold text-white'>RM 2,500</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-xs font-normal text-white my-2'>Event Tickets</span>
                                    <span className='text-xs font-semibold text-white'>RM 1,200</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-xs font-normal text-white my-2'>Merch</span>
                                    <span className='text-xs font-semibold text-white'>RM 560</span>
                                </div>

                            </div>
                            <div>


                                <div className='flex  justify-between items-center'>
                                    <h3 className="text-[#FF3939] font-bold text-xl">Audience</h3>

                                </div>
                                <h3 className='text-white font-semibold text-base mt-3'>Top Geographies</h3>
                                <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                                <img src={geographyImg} className='w-[300px] h-[230px]' alt='GeoGraphy' />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>);
}

export default Artist;