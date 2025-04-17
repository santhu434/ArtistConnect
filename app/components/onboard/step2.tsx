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
    width: '100%',
    border: '1px solid #6B7280',
    background: '#1B1C21',
    // borderRadius: '50px',
    marginBottom: theme.spacing(3),
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
        padding: theme.spacing(1.5, 1, 1.5, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        fontSize: '0.95rem',
    },
}));

const Step2 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#1B1C21] text-white">
            {/* Left Panel */}
            <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-6 sm:px-10 py-10">
                <div className="flex flex-col max-w-96">
                    <h2 className="text-3xl sm:text-4xl font-bold text-left mb-2">Welcome</h2>
                    <p className="text-gray-400 text-sm sm:text-base font-normal text-left max-w-80">
                        Let’s personalize your experience.
                        <div className="mt-3">1/2</div>
                    </p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="md:w-1/2 flex justify-center items-center px-6 py-10">
                <div className="w-full max-w-md bg-[#292929] text-center border-2 border-[#6B7280] rounded-2xl p-6 sm:p-8">
                    <h1 className="text-2xl font-bold mb-1">Genre Selection</h1>
                    <h2 className="text-base font-normal text-[#A2A2A2] mb-6">Choose 5 or more genres you love!</h2>

                    {/* Search Bar */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color="primary" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search genres…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    {/* Genre List */}
                    <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
                        {[
                            { name: "Pop", from: "#FF6FD8", to: "#3813C2" },
                            { name: "Hip-Hop", from: "#D43030", to: "#434343" },
                            { name: "Rock", from: "#FF4E50", to: "#F9D423" },
                            { name: "R&B", from: "#8E2DE2", to: "#4A00E0" },
                            { name: "Electronic", from: "#00F260", to: "#0575E6" },
                            { name: "Indie", from: "#F7971E", to: "#FFD200" },
                            { name: "EDM", from: "#FC466B", to: "#3F5EFB" },
                            { name: "Afrobeat", from: "#FDC830", to: "#F37335" },
                        ].map((genre, idx) => (
                            <div
                                key={idx}
                                className={`w-20 h-20 sm:w-24 sm:h-24 relative border-[3px] border-[#6B7280] rounded-full bg-gradient-to-b from-[${genre.from}] to-[${genre.to}]`}
                            >
                                <span className="font-semibold text-sm sm:text-base absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                                    {genre.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => navigate("/onboard/3")}
                        sx={{
                            paddingY: "10px",
                            backgroundColor: "#C7643D",
                            color: "#fff",
                            marginTop: "1.5rem",
                            "&:hover": {
                                boxShadow: "0 0 10px #C7643D",
                            },
                        }}
                    >
                        NEXT
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
