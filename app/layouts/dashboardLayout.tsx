import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import { alpha, Avatar, styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { NavLink, Outlet, useLocation } from "react-router";
import Header from "~/components/common/Header";
import NavBar from "~/components/common/NavBar";
import a4 from '../assets/images/Ellipse 3-4.png';



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

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation()
    let rightSideHeaderContent, navBarContent;
    console.log(pathname)
    switch (true) {
        case pathname.includes("fans"):
            rightSideHeaderContent = <></>
            navBarContent = <div className="pt-40 flex  h-full flex-col items-center justify-between">
                <div className="flex flex-col pl-6 space-y-4 w-full">
                    {[{ name: 'HOME', link: "#", active: false }, { name: 'EXPLORE', link: "/fans/explore", active: pathname.includes("explore") }, { name: 'ARTISTS', link: "/fans/artistprofile", active: pathname.includes("artistprofile") }, { name: 'SHOP MERCH', link: "#", active: false }, { name: 'MESSAGES', link: "#", active: false }].map((menu, i) => {
                        return <NavLink to={menu.link} key={menu.name} className={`font-medium text-base ${menu.active ? "text-[#FF3939]" : "text-[#858585]"}`}>{menu.name}</NavLink>
                    })}
                </div>
                <div className="">
                    <NavLink to="/fans/profile" className="flex items-center">
                        {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar> */}
                        <Avatar src={a4} sx={{}} />

                        <span className="text-[#858585] font-medium text-base ml-3 hidden md:inline">Tharik Akbar</span>
                    </NavLink>
                </div>
            </div>
            break;
        case pathname.includes("admin"):
            rightSideHeaderContent = <div className='flex items-center'>
                <div>
                    <div className="p-8 flex items-center">
                        <NotificationsIcon />
                        <NavLink to={"/fans/profile"} className={"flex ml-3 justify-center items-center"}>
                            <Avatar src={a4} sx={{}} />
                            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar> */}
                            <div className='flex flex-col ml-2'>
                                <span className="text-white font-medium text-base">Tharik Akbar</span>
                                <span className="text-white font-normal text-xs">Songwriter</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            navBarContent = <>
                <div className="  flex flex-col pt-10 pl-5">
                    <NavLink to={"#"} className={"text-[#FF3939] font-medium text-base mb-4"}>DASHBOARD</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>Content Management</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>ARTIST ACCOUNTS</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>FANS ACCOUNTS</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>EVENT Management</NavLink>


                </div>
                <div className="  flex flex-col pt-40 pl-5">
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>USERS</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>SUPPORT TICKETS</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>Activity Logs</NavLink>


                </div>
            </>
            break;

        case pathname.includes("artist"):
            rightSideHeaderContent = <div className='flex items-center'>
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
                        <NotificationsIcon sx={{ color: "white" }} />
                        <NavLink to={"/fans/profile"} className={"flex ml-3 justify-center items-center"}>
                            <Avatar src={a4} sx={{}} />
                            <div className='flex flex-col ml-2'>
                                <span className="text-white font-medium text-base">Tharik Akbar</span>
                                <span className="text-white font-normal text-xs">Songwriter</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            navBarContent = <>
                <div className='bg-[#FF3939] absolute text-lg font-normal self-center flex p-2 mx-auto rounded-full justify-center items-center'> <VideocamIcon fontSize='medium' />GO LIVE NOW</div>
                <div className="  flex flex-col pt-40 pl-5">
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>FEED</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>CONTENT</NavLink>
                    <NavLink to={"#"} className={"text-[#858585] font-medium text-base mb-4"}>EVENTS</NavLink>
                    <NavLink to={"/fans/explore"} className={"text-[#FF3939] font-medium text-base mb-4"}>MY STUDIO ANALYTICS</NavLink>
                </div>
            </>
            break;

        default:
            rightSideHeaderContent = <></>
            navBarContent = <></>
            break;

    }

    return (

        <div className="min-h-screen h-screen max-h-screen flex flex-col bg-[#1B1C21] text-white">
            <Header>
                {rightSideHeaderContent}
            </Header>
            <div className="flex-1 flex h-[88vh]">
                <NavBar >
                    {navBarContent}
                </NavBar>
                <div className="mt-4 ml-2 overflow-y-auto hide-scrollbar max-h-min flex-10/12 w-xs pr-24">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}