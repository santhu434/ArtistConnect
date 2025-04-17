import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";


const Step1 = () => {
    let navigate = useNavigate();

    const inputs = Array.from({ length: 5 }, () => useRef<HTMLInputElement>(null));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            if (value && index < inputs.length - 1) {
                inputs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (e: any, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            inputs[index - 1].current?.focus();
        }
    };

    return (<>
        <div className="relative h-screen">


            {/* header */}
            <div className="flex absolute left-[50%] top-4 -translate-x-1/2 max-w-max flex-row gap-4 mb-8 items-center">
                <img src={logo} className="w-[64px] h-[64px]" alt="Logo" />
                <h1 className="font-inter text-4xl font-semibold text-[#B700D8] flex items-center justify-center">
                    ArtistConnect
                </h1>
            </div>

            {/* body center */}
            <div className="w-full max-w-md left-[50%] top-[50%] absolute translate-[-50%]  bg-[#292929] border-2 border-[#6B7280] rounded-2xl p-6">

                <h1 className="text-2xl font-bold mb-1 text-white">Verify your Email</h1>
                <h2 className="text-base font-normal text-[#A2A2A2] mb-4">A verification email with a 6-digit OTP or a verification link is sent to the entered email address.</h2>
                <Box className="mb-4" display="flex" justifyContent="space-evenly" >

                    {inputs.map((ref, index) => (
                        <TextField
                            key={index}
                            inputRef={ref}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            variant="outlined"
                            inputProps={{
                                maxLength: 1,
                                style: {
                                    textAlign: 'center',
                                    fontSize: '30px',
                                    color: 'white',
                                    fontWeight: 500,
                                    height: "min-content"
                                },
                            }}
                            sx={{ width: 50, height: "min-content", borderRadius: "12px", color: "white", background: "#6B7280" }}
                        />
                    ))}
                </Box>

                <Button
                    variant="contained"
                    onClick={() => {
                        navigate("/onboard/2")
                    }}
                    sx={{
                        paddingY: "10px",
                        backgroundColor: "#C7643D",
                        color: "#fff",
                        "&:hover": {
                            boxShadow: "0 0 10px #C7643D",
                        },
                    }}
                    className={" w-full "}
                >
                    VERIFY
                </Button>
                <div className="text-center mt-4">
                    <button className="text-[#A2A2A2] underline text-sm font-medium mx-auto" >Resend Code</button>
                </div>
            </div>
        </div>
    </>);
}

export default Step1;