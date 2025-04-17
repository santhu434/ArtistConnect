import SearchIcon from '@mui/icons-material/Search';
import { alpha, Button, styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";

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

const Step2 = () => {
    let navigate = useNavigate();

    return (<div className="min-h-screen flex flex-col md:flex-row bg-[#1B1C21] text-white">
        {/* Left Panel */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-10">
            <div className="flex flex-col max-w-96">
                <div className="flex flex-row gap-4 mb-8 items-center">
                    <img src={logo} className="w-[64px] h-[64px]" alt="Logo" />
                    <h1 className="font-inter text-4xl font-semibold text-[#B700D8] flex items-center justify-center">
                        ArtistConnect
                    </h1>
                </div>
                <h2 className="text-4xl font-bold text-left mb-2">Welcome</h2>
                <p className="text-gray-400 text-base font-normal text-left max-w-80">
                    Let’s personalize your experience.
                    <div className="mt-3">1/2</div>
                </p>
            </div>
        </div>

        {/* Right Panel - Form */}
        <div className="md:w-1/2 flex justify-center items-center px-6 py-10 rounded-3xl ">
            <div className="w-full max-w-md bg-[#292929] text-center border-2 border-[#6B7280] rounded-2xl p-6">
                {/* {selectedComponent === "signup" ? <SignUp /> : <Login />} */}
                <h1 className="text-2xl font-bold mb-1">Genre Selection</h1>
                <h2 className="text-base font-normal text-[#A2A2A2] mb-5">Choose 5 or more genre you love!</h2>

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

                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#FF6FD8] to-[#3813C2]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>Pop</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#D43030] to-[#434343]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2 !whitespace-nowrap'>Hip-Hop</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#FF4E50] to-[#F9D423]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>Rock</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#8E2DE2] to-[#4A00E0]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>R&B</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#00F260] to-[#0575E6]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>Electronic</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#F7971E] to-[#FFD200]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>Indie</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#FC466B] to-[#3F5EFB]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>EDM</span>
                    </div>
                    <div className='w-24 h-24 relative border-[#6B7280] border-[3px] rounded-full bg-gradient-to-b from-[#FDC830] to-[#F37335]'>
                        <span className='font-semibold text-base absolute top-[50%] left-[50%] -translate-1/2'>Afrobeat</span>
                    </div>
                </div>





                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/onboard/3")
                    }}
                    sx={{
                        paddingY: "10px",
                        backgroundColor: "#C7643D",
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

export default Step2;