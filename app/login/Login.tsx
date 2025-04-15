import { Button } from "@mui/material";
import appleLogo from "../assets/icons/apple.svg";
import facebookLogo from "../assets/icons/facebook.svg";
import googleLogo from "../assets/icons/google.svg";
import logo from "../assets/icons/logo.svg";
import CustomTextField from "../components/FormComponents/CustomTextField.js";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1B1C21] text-white">
      {/* Left Panel */}
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-10">
        <div className="flex flex-col max-w-96">
          <div className="flex flex-row gap-4 mb-8">
            <img src={logo} className="w-[64px] h-[64px]" alt="Logo" />
            <h1 className="font-inter text-4xl font-semibold text-[#B700D8] mb-4 flex items-center justify-center">
              ArtistConnect
            </h1>
          </div>
          <h2 className="text-4xl font-bold text-left mb-8">Find your favorite Artists...</h2>
          <p className="text-gray-400 text-base font-normal text-left max-w-80">
            Step into a space where music meets meaning. ArtistConnect brings you closer to your favorite creators with unique content, real-time fan interactions, and live events — all on one beautifully crafted platform.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="md:w-1/2 flex justify-center items-center px-6 py-10 rounded-3xl">
        <div className="w-full max-w-md bg-[#292929] rounded-md p-6">
          <h2 className="text-base font-normal text-[#A2A2A2] mb-2">LET'S GET YOU STARTED</h2>
          <h1 className="text-2xl font-bold mb-6">Create Fan Account</h1>

          <form>
            <CustomTextField label="Name" />
            <CustomTextField label="Email" />
            <CustomTextField label="Password" type="password" />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C7643D",
                color: "#fff",
                "&:hover": {
                  boxShadow: "0 0 10px #C7643D",
                },
              }}
              className={" w-full "}
            >
              SIGN UP
            </Button>
          </form>

          {/* OR Divider */}
          <div className="my-6 text-center relative border-b-[#ffffff] border-[1px]">
            <span className="font-normal absolute text-sm text-[#D8D8D8] bg-[#292929] translate-[-50%] px-5">Or</span>
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#1B1C21",
                color: "#fff",
                paddingY: "10px",
                marginBottom: "9px",
                "&:hover": {
                  boxShadow: "0 0 10px #fff",
                },
                position: 'relative',
                '& .MuiButton-startIcon': {
                  position: 'absolute',
                  left: 50, // or whatever padding you want
                  marginRight: 0,
                },
                textTransform: 'none'
              }}
              startIcon={<img src={googleLogo} />}
            >
              Log In with Google
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1B1C21",
                color: "#fff",
                paddingY: "10px",
                marginBottom: "9px",
                "&:hover": {
                  boxShadow: "0 0 10px #fff",
                }, position: 'relative',
                '& .MuiButton-startIcon': {
                  position: 'absolute',
                  left: 50, // or whatever padding you want
                  marginRight: 0,
                },
                textTransform: 'none'
              }} fullWidth
              startIcon={<img src={facebookLogo} />}
            >
              Log In with Facebook
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1B1C21",
                color: "#fff",
                paddingY: "10px",
                marginBottom: "9px",
                "&:hover": {
                  boxShadow: "0 0 10px #fff",
                }, position: 'relative',
                '& .MuiButton-startIcon': {
                  position: 'absolute',
                  left: 50, // or whatever padding you want
                  marginRight: 0,
                },
                textTransform: 'none'
              }}
              fullWidth
              startIcon={<img src={appleLogo} />}
            >
              Log In with Apple
            </Button>

          </div>

          <p className="text-center font-normal text-sm text-[#D8D8D8] mt-6">
            Already have an account? <button className="underline font-semibold cursor-pointer">LOGIN HERE</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
