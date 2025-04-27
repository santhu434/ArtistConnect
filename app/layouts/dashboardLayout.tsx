import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from "@mui/icons-material/Search";
import TocIcon from '@mui/icons-material/Toc';
import VideocamIcon from "@mui/icons-material/Videocam";
import { alpha, Avatar, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { NavLink, Outlet, useLocation } from "react-router";
import Header from "~/components/common/Header";
import NavBar from "~/components/common/NavBar";
import a4 from "../assets/images/Ellipse 11.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
    boxShadow: "0px 0px 2px #1B1C21",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();

  let rightSideHeaderContent, navBarContent;
  console.log(pathname);
  switch (true) {
    case pathname.includes("fans"):
      rightSideHeaderContent = (
        <>
          <div className="block md:hidden">
            <NavLink to="/fans/profile" className="flex items-center">
              <Avatar src={a4} sx={{}} />

              <span className="text-[#858585] font-medium text-base ml-3 hidden md:inline">
                Tharik Akbar
              </span>
            </NavLink>
          </div>
        </>
      );
      navBarContent = (
        <>
          {" "}
          <div className="pt-40 flex  h-full flex-col items-center justify-between">
            <div className="flex flex-col pl-6 space-y-4 w-full">
              {[
                { name: "HOME", link: "/fans/home", active: pathname.includes("home") },
                {
                  name: "EXPLORE",
                  link: "/fans/explore",
                  active: pathname.includes("explore"),
                },
                {
                  name: "ARTISTS",
                  link: "/fans/artistprofile",
                  active: pathname.includes("artistprofile"),
                },
                { name: "SHOP MERCH", link: "/fans/shop_merch", active: pathname.includes("shop_merch") }
              ].map((menu, i) => {
                return (
                  <NavLink
                    to={menu.link}
                    key={menu.name}
                    className={`font-medium text-base ${menu.active ? "text-[#FF3939]" : "text-[#858585]"
                      }`}
                  >
                    {menu.name}
                  </NavLink>
                );
              })}
            </div>
            <div className="">
              <NavLink to="/fans/profile" className="flex items-center">
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar> */}
                <Avatar src={a4} sx={{}} />

                <span className="text-[#858585] font-medium text-base ml-3 hidden md:inline">
                  Tharik Akbar
                </span>
              </NavLink>
            </div>
          </div>
        </>
      );
      break;
    case pathname.includes("admin"): {
      rightSideHeaderContent = (
        <div className="flex items-center">
          <div>
            <div className="p-8 flex items-center">
              <NotificationsIcon />
              <NavLink
                to={"/admin"}
                className={"flex ml-3 justify-center items-center"}
              >
                <Avatar src={a4} sx={{}} />
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>TA</Avatar> */}
                <div className="hidden sm:flex flex-col ml-2">
                  <span className="text-white font-medium text-base">
                    Tharik Akbar
                  </span>
                  <span className="text-white font-normal text-xs">
                    Songwriter
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
          <nav className="fixed md:hidden bottom-0 right-0 bg-[#292929] grid grid-cols-5 left-0">
            <div className="flex flex-col items-center px-5 py-3">
              <DashboardIcon sx={{ color: "#FF3939" }} />
              <div className="text-xs font-medium text-[#FF3939]">DASHBOARD</div>
            </div>
            <div
              // onClick={() => navigate("/fans/explore/")}
              className="flex flex-col items-center px-5 py-3"
            >
              <TocIcon sx={{ color: "#AAAAAA" }} />
              <div className="text-xs font-medium text-[#AAAAAA]">CONTENT</div>
            </div>
            <div className="flex flex-col items-center px-5 py-3">
              <MusicNoteIcon sx={{ color: "#AAAAAA" }} />
              <div className="text-xs font-medium text-[#AAAAAA]">ARTIST</div>
            </div>
            <div className="flex flex-col items-center px-5 py-3">
              <PeopleAltIcon sx={{ color: "#AAAAAA" }} />
              <div className="text-xs font-medium text-[#AAAAAA]">FANS</div>
            </div>
            <div className="flex flex-col items-center px-5 py-3">
              <EventNoteIcon sx={{ color: "#AAAAAA" }} />
              <div className="text-xs font-medium text-[#AAAAAA]">EVENT</div>
            </div>
          </nav>
        </div>
      );
      const navBarContentList = [
        { title: "DASHBOARD", to: "/admin" },
        { title: "CONTENET MANAGEMENT", to: "/admin/content-management" },
        { title: "ARTIST ACCOUNTS", to: "/admin/artist-accounts" },
        { title: "FANS ACCOUNTS", to: "/admin/follower-accounts" },
        { title: "EVENT MANAGEMENT", to: "/admin/event-management" },
        { title: "REVENUE MANAGEMENT", to: "/admin/revenue-management" },
        { title: "SUPPORT TICKETS", to: "/admin/support-tickets" },
        { title: "ACTIVITY LOGS", to: "/admin/activity-log" }
      ]
      navBarContent = (
        <div className='flex flex-col justify-between h-full overflow-y-auto sleek-scrollbar'>
          <div className="  flex-col flex px-5">
            {navBarContentList.slice(0, -2).map(({ title, to }) => <NavLink
              to={to}
              className={`${to === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-base mb-4`}
            >
              {title}
            </NavLink>)}
          </div>
          <div className="  flex flex-col px-5">
            {navBarContentList.slice(-2).map(({ title, to }) => <NavLink
              to={to}
              className={`${to === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-base mb-4`}
            >
              {title}
            </NavLink>)}
          </div>
        </div>
      )
      break;
    }
    case pathname.includes("artist"): {
      rightSideHeaderContent = (
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:flex">
            <Search
              sx={{
                border: "1px solid #6B7280",
                backgroundColor: "#1B1C21",
                borderRadius: "50px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Menus.."
                inputProps={{
                  "aria-label": "search",
                  style: { minWidth: "16rem" },
                }}
              />
            </Search>
          </div>

          {/* Notifications and Profile */}
          <div className="flex items-center gap-3">
            <NotificationsIcon sx={{ color: "white" }} />
            <NavLink
              to={"/artist"}
              className="flex items-center ml-2 gap-2"
            >
              <Avatar src={a4} />
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-medium text-sm sm:text-base">
                  Tharik Akbar
                </span>
                <span className="text-white font-normal text-xs">
                  Songwriter
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      );
      const navBarContentList = [
        { title: "FEED", to: "/artist/feeds" },
        { title: "CONTENT", to: "/artist/contents" },
        { title: "EVENTS", to: "/artist/events" },
        { title: "MY STUDIO ANALYTICS", to: "/artist" }
      ]
      navBarContent = (
        <>
          {/* Nav Links */}
          <div className="flex flex-col pt-24 sm:pt-32 pl-3 sm:pl-5">
            {/* GO LIVE NOW Button inside nav */}
            <div className="flex justify-center mb-8 cursor-pointer ">
              <div className="bg-[#FF3939] text-white text-sm sm:text-lg font-normal flex p-2 sm:px-4 sm:py-2 rounded-full justify-center items-center">
                <VideocamIcon fontSize="small" className="mr-1" />
                GO LIVE NOW
              </div>
            </div>

            {/* Other nav links */}
            {navBarContentList.map(({ title, to }) => <NavLink
              to={to}
              className={`${to === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-sm sm:text-base mb-3 sm:mb-4`}
            >
              {title}
            </NavLink>)}
          </div>
        </>
      );
      break;
    }
    default:
      rightSideHeaderContent = <></>;
      navBarContent = <></>;
      break;
  }

  return (
    <div className="min-h-screen h-screen max-h-screen flex flex-col bg-[#1B1C21] text-white">
      <Header>{rightSideHeaderContent}</Header>
      <div className="flex-1 flex h-[88vh]">
        <NavBar>{navBarContent}</NavBar>
        <div className="mt-4 mx-2 overflow-y-auto hide-scrollbar max-h-min flex-10/12 w-xs md:pr-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
