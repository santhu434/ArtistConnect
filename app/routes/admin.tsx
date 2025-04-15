import NotificationsIcon from '@mui/icons-material/Notifications';
import { alpha, Avatar, styled } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import InputBase from '@mui/material/InputBase';
import { NavLink } from "react-router";
import logowhite from "../assets/icons/logowhite.svg";


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
                    <div className="  flex flex-col pt-40 pl-5">
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

                </div>

                {/* Right content */}
                <div className="mt-4 ml-2  flex-10/12 w-xs">
                    {/* Live Now */}
                    <div>
                        <h3 className="text-[#FF3939] font-bold text-3xl">Admin Analytics</h3>
                        <span className="text-white font-normal text-sm">Unified insights from Artist and Fan apps</span>

                    </div>
                    <div className='flex mr-14 mt-4'>
                        <div>
                            <div className='mr-8 flex-8/12'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-[#FF3939] font-bold text-xl">Artist</h3>

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