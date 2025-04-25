import { alpha, styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { Artists } from "~/components/admin/Artists";
import { Content } from "~/components/admin/Content";
import { Fans } from "~/components/admin/Fans";


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

        {/* header */}


        {/* left navigation */}

        {/* Right content */}
        <div className="mt-4 ml-2 ">
            {/* Live Now */}
            <div>
                <h3 className="text-[#FF3939] font-bold text-3xl">Admin Analytics</h3>
                <span className="text-white font-normal text-sm">Unified insights from Artist and Fan apps</span>

            </div>
            <div className='mr-14 mt-4 w-full'>
                <Artists />
                <Fans />
                <Content />
            </div>


        </div >
    </>);
}

export default Artist;