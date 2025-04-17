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
            {/* Header */}
            <div className="h-[88px] bg-gradient-to-r w-full flex flex-col md:flex-row justify-between from-[#650077] to-[#AE008E]">
                <div className='flex flex-col md:flex-row items-center justify-between md:justify-end px-4 md:px-6'>
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        <Search className='mx-auto md:mx-0' sx={{ border: "1px solid #6B7280", backgroundColor: "#1B1C21", borderRadius: "50px" }}>
                            <SearchIconWrapper>
                                <SearchIcon color='primary' />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search Menus.."
                                inputProps={{ 'aria-label': 'search', style: { minWidth: "200px", maxWidth: "100%" } }}
                            />
                        </Search>
                    </div>
                    <div className="p-4 md:p-8 flex items-center">
                        <NotificationsIcon className="mr-2" />
                        <NavLink to={"/fans/profile"} className="flex items-center">
                            <Avatar sx={{ bgcolor: deepOrange[500], width: 32, height: 32 }}>TA</Avatar>
                            <div className='flex flex-col ml-2'>
                                <span className="text-white font-medium text-sm md:text-base">Tharik Akbar</span>
                                <span className="text-white font-normal text-xs">Songwriter</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:flex-row">
                {/* Left Navigation */}
                <div className="bg-[#292929] flex flex-col justify-between rounded-2xl m-4 md:m-6 w-full md:w-64 py-5">
                    <div className='bg-[#FF3939] text-sm md:text-lg font-normal self-center flex p-2 mx-auto rounded-full justify-center items-center'>
                        <VideocamIcon fontSize='medium' className="mr-2" />GO LIVE NOW
                    </div>
                    <div className="flex flex-col pt-20 md:pt-40 pl-4 md:pl-5">
                        {['FEED', 'CONTENT', 'EVENTS', 'MY STUDIO ANALYTICS'].map((link, index) => (
                            <NavLink 
                                key={link}
                                to={"#"} 
                                className={`text-[#858585] font-medium text-sm md:text-base mb-4 ${index === 3 ? 'text-[#FF3939]' : ''}`}
                            >
                                {link}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="mt-4 ml-2 flex-1 px-4 md:px-0">
                    {/* Metrics Grid */}
                    <div>
                        <h3 className="text-[#FF3939] font-bold text-2xl md:text-3xl">Studio Analytics</h3>
                        <span className="text-white font-normal text-xs md:text-sm">Track your performance. Understand your fans. Grow your impact.</span>

                        <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: <VisibilityIcon />, title: 'Total Fans', value: '50.8K' },
                                { icon: <AddCircleIcon />, title: 'Audio Listeners', value: '20K' },
                                { icon: <StarIcon />, title: 'Video Watch Time', value: '100h' },
                                { icon: <StarIcon />, title: 'Total Revenue', value: 'RM 100.3K' }
                            ].map((metric, index) => (
                                <div key={index} className='p-4 rounded-2xl bg-[#003754] border-[#343B4F] border-2'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center'>
                                            {metric.icon}
                                            <span className='text-[#AEB9E1] font-normal text-xs ml-2'>{metric.title}</span>
                                        </div>
                                        <span>...</span>
                                    </div>
                                    <div className='flex my-3 items-center'>
                                        <span className='text-xl md:text-2xl font-semibold text-white'>{metric.value}</span>
                                        <div className='ml-2 bg-[#05C16838] border-[#05C16838] border-2 flex items-center rounded-sm p-0'>
                                            <span className='text-[10px] text-[#14CA74]'>28.4%</span>
                                            <ArrowOutwardIcon className='w-3 h-3' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className='flex flex-col lg:flex-row mr-0 md:mr-14 gap-6'>
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Audio Section */}
                            <div className='mb-8'>
                                <div className='flex justify-between items-center mb-4'>
                                    <h3 className="text-[#FF3939] font-bold text-xl">Content Performance</h3>
                                    <TuneIcon sx={{ color: "#FF3939" }} />
                                </div>
                                {['Top Performing Audio', 'Top Performing Video'].map((title, index) => (
                                    <div key={index}>
                                        <h3 className='text-white font-semibold text-base'>{title}</h3>
                                        <div className='text-[11px] font-normal text-white my-2'>(Last 28 Days)</div>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                                            {[sp1, sp4, sp2, sp3].map((img, imgIndex) => (
                                                <div key={imgIndex} className='flex items-start p-2 bg-[#1B1C21] rounded-lg'>
                                                    <img className='w-20 h-20 md:w-24 md:h-24 object-cover rounded' src={img} alt="Content" />
                                                    <div className='ml-3 flex-1'>
                                                        <div className='font-medium text-white text-base'>Lost in the Vibe</div>
                                                        <div className='text-[#D8D8D8] text-[10px]'>Audio</div>
                                                        <div className='text-[#D8D8D8] text-[10px]'>23.4K Plays | 1.2K Likes | 328 Comments</div>
                                                        <div className='text-[#D8D8D8] text-[10px] mb-2'>82% Completion</div>
                                                        <Button variant='outlined' sx={{
                                                            border: "1px solid #C7643D",
                                                            padding: "2px 8px",
                                                            fontSize: "10px",
                                                            fontWeight: 600,
                                                            textTransform: "none",
                                                            '&:hover': { borderColor: '#C7643D' },
                                                            color: "#C7643D"
                                                        }}>
                                                            View
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-96">
                            <div className='mb-8'>
                                <h3 className="text-[#FF3939] font-bold text-xl mb-4">Monetization</h3>
                                <div className='bg-[#1B1C21] p-4 rounded-lg'>
                                    <h3 className='text-white font-semibold text-base'>Total Earnings Breakdown</h3>
                                    <div className='text-[11px] text-white my-2'>(Last 28 Days)</div>
                                    {['Subscriptions', 'Event Tickets', 'Merch'].map((item, index) => (
                                        <div key={index} className='flex justify-between py-2 border-b border-[#343B4F] last:border-0'>
                                            <span className='text-xs text-white'>{item}</span>
                                            <span className='text-xs font-semibold text-white'>
                                                RM {[2500, 1200, 560][index].toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[#FF3939] font-bold text-xl mb-4">Audience</h3>
                                <div className='bg-[#1B1C21] p-4 rounded-lg'>
                                    <h3 className='text-white font-semibold text-base'>Top Geographies</h3>
                                    <div className='text-[11px] text-white my-2'>(Last 28 Days)</div>
                                    <img src={geographyImg} className='w-full h-auto object-contain' alt='Geography' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Artist;