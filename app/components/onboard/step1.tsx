import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";

const Step1 = () => {
    const navigate = useNavigate();
    const inputs = Array.from({ length: 5 }, () => useRef<HTMLInputElement>(null));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            if (value && index < inputs.length - 1) {
                inputs[index + 1].current?.focus();
            }
        }
    };

    const handleKeyDown = (e: any, index: number) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputs[index - 1].current?.focus();
        }
    };

    return (
        <div className="relative bg-black flex flex-col items-center justify-center px-4">
            {/* Center card */}
            <div className="w-full max-w-md bg-[#292929] border border-[#6B7280] rounded-2xl p-6 sm:p-8 mt-32 sm:mt-36">
                <h1 className="text-xl sm:text-2xl font-bold mb-1 text-white">Verify your Email</h1>
                <p className="text-sm sm:text-base text-[#A2A2A2] mb-6">
                    A verification email with a 6-digit OTP or a verification link is sent to the entered email address.
                </p>

                <Box className="mb-6" display="flex" justifyContent="space-between">
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
                                    textAlign: "center",
                                    fontSize: "24px",
                                    color: "white",
                                    fontWeight: 600,
                                },
                            }}
                            sx={{
                                width: 48,
                                height: "56px",
                                borderRadius: "12px",
                                backgroundColor: "#6B7280",
                                input: { color: "white" },
                            }}
                        />
                    ))}
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/onboard/2")}
                    sx={{
                        paddingY: "10px",
                        backgroundColor: "#C7643D",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "16px",
                        borderRadius: "8px",
                        "&:hover": {
                            boxShadow: "0 0 10px #C7643D",
                            backgroundColor: "#b95732",
                        },
                    }}
                >
                    VERIFY
                </Button>

                <div className="text-center mt-4">
                    <button className="text-[#A2A2A2] underline text-sm sm:text-base font-medium">
                        Resend Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step1;
