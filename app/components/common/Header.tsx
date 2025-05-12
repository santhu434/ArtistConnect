import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, Avatar, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import type { PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router";
import logowhite from '../../assets/icons/logowhite.svg';
import a4 from "../../assets/images/Ellipse 11.png";

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


function Header({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  let rightSideHeaderContent;
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
        </div>
      );

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

      break;
    }
    default:
      rightSideHeaderContent = <></>;
      break;
  }

  return (
    <div className="h-[12vh] bg-gradient-to-r from-[#650077] to-[#AE008E] flex items-center justify-between header px-4">
      <div className="flex items-center gap-3">
        <img src={logowhite} className="w-8 h-8" alt="Logo" />
        <h1 className="text-2xl sm:text-3xl font-semibold text-white">ArtistConnect</h1>
      </div>
      {rightSideHeaderContent}
    </div>
  )
}

export default Header