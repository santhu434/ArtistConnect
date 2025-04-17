import SearchIcon from '@mui/icons-material/Search';
import { alpha, Button, styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";
import a1 from "../../assets/images/Ellipse 3-1.png";
import a2 from "../../assets/images/Ellipse 3-2.png";
import a3 from "../../assets/images/Ellipse 3-3.png";
import a4 from "../../assets/images/Ellipse 3-4.png";
import a5 from "../../assets/images/Ellipse 3-5.png";
import a6 from "../../assets/images/Ellipse 3-6.png";
import a7 from "../../assets/images/Ellipse 3-7.png";
import a0 from "../../assets/images/Ellipse 3.png";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
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

const Step3 = () => {
    let navigate = useNavigate();


    return (<div className="min-h-screen flex flex-col md:flex-row bg-[#1B1C21] text-white">
        {/* Left Panel */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-10">
            <div className="flex flex-col max-w-96">
                <h2 className="text-4xl font-bold text-left mb-2">Welcome</h2>
                <p className="text-gray-400 text-base font-normal text-left max-w-80">
                    Let’s personalize your experience.
                    <div className="mt-3">2/2</div>
                </p>
            </div>
        </div>

        {/* Right Panel - Form */}
        <div className="md:w-1/2 flex justify-center items-center px-6 py-10 rounded-3xl ">
            <div className="w-full max-w-md bg-[#292929] text-center border-2 border-[#6B7280] rounded-2xl p-6">
                {/* {selectedComponent === "signup" ? <SignUp /> : <Login />} */}
                <h1 className="text-2xl font-bold mb-1">Artist Selection</h1>
                <h2 className="text-base font-normal text-[#A2A2A2] mb-5">Choose 5 or more artists you love!</h2>

                <Search sx={{ border: "1px solid #6B7280", backgroundColor: "#1B1C21", borderRadius: "50px" }}>
                    <SearchIconWrapper>
                        <SearchIcon color='primary' />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder=""
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                {/* List Genre */}
                <div className="my-4 mt-12 grid gap-2 grid-cols-4 grid-rows-2">

                    <div className=' '>
                        <img src={a0} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Billie Eilish</span>
                    </div>
                    <div className=' '>
                        <img src={a1} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Taylor Swift</span>
                    </div>
                    <div className=' '>
                        <img src={a2} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>The Weeknd</span>
                    </div>
                    <div className=' '>
                        <img src={a3} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>BTS</span>
                    </div>
                    <div className=' '>
                        <img src={a4} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Bruno Mars</span>
                    </div>
                    <div className=' '>
                        <img src={a5} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Lady Gaga</span>
                    </div>
                    <div className=' '>
                        <img src={a6} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Taylor Swift</span>
                    </div>
                    <div className=' '>
                        <img src={a7} alt="Artist 1" />
                        <span className='text-[#D8D8D8] text-center w-full font-normal text-base'>Billie Eilish</span>
                    </div>

                </div>





                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/fans/explore")
                    }}
                    sx={{
                        backgroundColor: "#C7643D",
                        paddingY: "10px",
                        color: "#fff",
                        marginY: "2rem",
                        "&:hover": {
                            boxShadow: "0 0 10px #C7643D",
                        },
                    }}
                    className={" w-full "}
                >
                    NEXT
                </Button>
            </div>
        </div>
    </div>);
}

export default Step3;