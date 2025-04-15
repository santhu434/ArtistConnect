import React from "react";
import CustomButton from "../components/FormComponents/CustomButton.js";
import CustomTextField from "../components/FormComponents/CustomTextField.js";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0F0F0F] text-white">
      {/* Left Panel */}
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 py-10">
        <div>
          <h1 className="text-4xl font-bold text-purple-500 mb-4 flex items-center justify-center">
            <span className="bg-purple-600 rounded-full h-8 w-8 mr-2"></span>
            ArtistConnect
          </h1>
          <h2 className="text-2xl font-semibold mb-2">Find your favorite <span className="text-white">Artists...</span></h2>
          <p className="text-gray-400 text-sm max-w-md">
            Step into a space where music meets meaning. ArtistConnect brings you closer to your favorite creators with unique content, real-time fan interactions, and live events — all on one beautifully crafted platform.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="md:w-1/2 flex justify-center items-center bg-[#1E1E1E] px-6 py-10 rounded-xl">
        <div className="w-full max-w-md bg-gray-200 rounded-md p-6">
          <h2 className="text-lg text-gray-400 mb-2">LET’S GET YOU STARTED</h2>
          <h1 className="text-2xl font-bold mb-6">Create Fan Account</h1>

          <form>
            <CustomTextField label="Name" />
            <CustomTextField label="Email" />
            <CustomTextField label="Password" type="password" />
            <CustomButton>SIGN UP</CustomButton>
          </form>

          {/* OR Divider */}
          <div className="my-6 text-center text-gray-500">— Or —</div>

          {/* Social Logins */}
          <div className="space-x-3">
            <CustomButton startIcon={<GoogleIcon />}>
              Log in with Google
            </CustomButton>
            <CustomButton startIcon={<FacebookIcon />}>
              Log in with Facebook
            </CustomButton>
            <CustomButton startIcon={<AppleIcon />}>
              Log in with Apple
            </CustomButton>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account? <span className="text-white underline cursor-pointer">LOGIN HERE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
