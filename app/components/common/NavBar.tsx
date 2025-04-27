import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import EventIcon from '@mui/icons-material/Event';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import InsightsIcon from '@mui/icons-material/Insights';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PeopleIcon from '@mui/icons-material/People';
import PortraitIcon from '@mui/icons-material/Portrait';
import SearchIcon from "@mui/icons-material/Search";
import SourceIcon from '@mui/icons-material/Source';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TocIcon from '@mui/icons-material/Toc';
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import type { PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router";
import a4 from "../../assets/images/Ellipse 11.png";

type navContentType = {
    Icon: any,
    title: string,
    link: string,
}

const NavBar = ({ }: PropsWithChildren) => {
    const { pathname } = useLocation();
    let navBarContent, navBarContentList: navContentType[] = [];
    switch (true) {
        case pathname.includes("fans"):

            navBarContentList = [
                { Icon: HomeFilledIcon, title: "HOME", link: "/fans/home" },
                { Icon: SearchIcon, title: "EXPLORE", link: "/fans/explore" },
                { Icon: MusicNoteIcon, title: "ARTISTS", link: "/fans/artistprofile" },
                { Icon: StorefrontIcon, title: "SHOP MERCH", link: "/fans/shop_merch" },
                // { Icon: ChatBubbleOutlineIcon, title: "MESSAGES", link: "#" }
            ]
            navBarContent = (
                <div className="pt-40 flex  h-full flex-col items-center justify-between">
                    <div className="flex flex-col pl-6 space-y-4 w-full">
                        {navBarContentList.map((menu, i) => (<NavLink to={menu.link} key={menu.title} className={`font-medium text-base ${menu.link === pathname ? "text-[#FF3939]" : "text-[#858585]"}`}>
                            {menu.title}
                        </NavLink>)
                        )}
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
                </div >
            );
            break;
        case pathname.includes("artist"): {

            navBarContentList = [
                { Icon: DynamicFeedIcon, title: "FEED", link: "/artist/feeds" },
                { Icon: SourceIcon, title: "CONTENT", link: "/artist/contents" },
                { Icon: EventIcon, title: "EVENTS", link: "/artist/events" },
                { Icon: InsightsIcon, title: "ANALYTICS", link: "/artist" }
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
                        {navBarContentList.map(({ title, link }) => <NavLink
                            to={link}
                            className={`${link === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-sm sm:text-base mb-3 sm:mb-4`}
                        >
                            {title}
                        </NavLink>)}
                    </div>
                </>
            );
            break;
        }
        case pathname.includes("admin"): {

            navBarContentList = [
                { Icon: HomeFilledIcon, title: "DASHBOARD", link: "/admin" },
                { Icon: TocIcon, title: "CONTENET MANAGEMENT", link: "/admin/content-management" },
                { Icon: PortraitIcon, title: "ARTIST ACCOUNTS", link: "/admin/artist-accounts" },
                { Icon: PeopleIcon, title: "FANS ACCOUNTS", link: "/admin/follower-accounts" },
                { Icon: EventIcon, title: "EVENT MANAGEMENT", link: "/admin/event-management" },
                { Icon: MonetizationOnIcon, title: "REVENUE MANAGEMENT", link: "/admin/revenue-management" },
                { Icon: SupportAgentIcon, title: "SUPPORT TICKETS", link: "/admin/support-tickets" },
                { Icon: SyncAltIcon, title: "ACTIVITY LOGS", link: "/admin/activity-log" }
            ]
            navBarContent = (
                <>
                    <div className="  flex-col flex px-5">
                        {navBarContentList.slice(0, -2).map(({ title, link }) => <NavLink
                            to={link}
                            className={`${link === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-base mb-4`}
                        >
                            {title}
                        </NavLink>)}
                    </div>
                    <div className="  flex flex-col px-5">
                        {navBarContentList.slice(-2).map(({ title, link }) => <NavLink
                            to={link}
                            className={`${link === pathname ? "text-[#FF3939]" : "text-[#858585]"} font-medium text-base mb-4`}
                        >
                            {title}
                        </NavLink>)}
                    </div></>
            )
            break;
        }

        default:
            navBarContent = <></>;
            break;
    }
    return (<>
        <div className="bg-[#292929]  flex-col justify-between rounded-2xl m-6 flex-2/12 w-xs py-5 hidden md:flex">
            <div className='flex flex-col justify-between h-full overflow-y-auto sleek-scrollbar'>
                {navBarContent}
            </div>
        </div>
        <MobileWraper navBarContentList={navBarContentList}>
            {navBarContentList.map(({ link, title, Icon }) => {
                const active = link === pathname;
                return <NavLink to={link} className='flex flex-col items-center py-3'>
                    <Icon sx={{ color: active ? "#FF3939" : "#AAAAAA" }} />
                    <div className={`text-xs !max-w-20 overflow-ellipsis overflow-hidden whitespace-nowrap text-center font-medium text-[${active ? "#FF3939" : "#AAAAAA"}]`}>{title}</div>
                </NavLink>
            })}
        </MobileWraper>
    </>
    );
}

const MobileWraper = ({ children, navBarContentList }: { navBarContentList: any[] } & PropsWithChildren) => {
    if (navBarContentList.length <= 5)
        return <nav style={{ gridTemplateColumns: `repeat(${navBarContentList.length}, minmax(0, 1fr))` }} className={`fixed md:hidden bottom-0 right-0 bg-[#292929] rounded-2xl grid left-0 m-2 z-10`}>{children}</nav>
    return <nav className={`fixed md:hidden bottom-0 right-0 bg-[#292929] px-2 overflow-auto rounded-2xl flex gap-2 sleek-scrollbar left-0 m-2 z-10`}>{children}</nav>
}

export default NavBar;