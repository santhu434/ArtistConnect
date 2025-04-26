import { Check, CloudUpload } from "@mui/icons-material";
import { Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/icons/logo.svg";
import CustomTextField from "../FormComponents/CustomTextField";

const ArtistInfo = () => {
    const navigation = useNavigate()
    const [file, setFile] = useState<File | null>(null);
    const [isCompany, setIsCompany] = useState("false");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null)

    return (
        <div className="relative h-screen">

            {
                isPopupOpen && <div className="fixed inset-0 bg-[#0008] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#292929] border-2 border-[#6B7280] rounded-2xl p-6 max-w-sm w-full mx-4">
                        <Check sx={{ color: '#4CAF50', marginX: "auto", display: "block", fontSize: 60 }} />
                        <Typography className="text-white !text-2xl !font-bold text-center !mb-6">
                            We will get back to you soon...
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => { navigation("/"); setIsPopupOpen(false) }}
                            sx={{
                                paddingY: "10px",
                                backgroundColor: "#C7643D",
                                color: "#fff",
                                "&:hover": {
                                    boxShadow: "0 0 10px #C7643D",
                                },
                            }}
                            className="w-full"
                        >
                            Done
                        </Button>
                    </div>
                </div>}
            {/* header */}
            <div className="flex absolute left-[50%] top-4 -translate-x-1/2 max-w-max flex-row gap-4 mb-8 items-center">
                <img src={logo} className="w-[64px] h-[64px]" alt="Logo" />
                <h1 className="font-inter text-4xl font-semibold text-[#B700D8] flex items-center justify-center">
                    ArtistConnect
                </h1>
            </div>

            {/* body center */}
            <div className="w-full max-w-md left-[50%] top-[50%] absolute translate-[-50%] max-h-3/4 hide-scrollbar overflow-y-scroll  bg-[#292929] border-2 border-[#6B7280] rounded-2xl p-6">

                <h1 className="text-2xl font-bold mb-1 text-white">Profile Info</h1>
                <h2 className="text-base font-normal text-[#A2A2A2] mb-4">Please fill these details</h2>

                <CustomTextField label="Age" />
                <Typography className="text-xl font-semibold !mb-3 text-white">Address</Typography>
                <CustomTextField label="Building, Street.." />
                <CustomTextField label="City" />
                <CustomTextField label="Country" />
                <CustomTextField label="Postal Code" />
                <RadioGroup value={isCompany} onChange={(e) => setIsCompany(e.target.value)} row defaultValue="fan" sx={{ mb: 3, display: "flex", gap: 2 }}>
                    <FormControlLabel
                        value="false"
                        control={
                            <Radio
                                sx={{
                                    color: "#C7643D",
                                    '&.Mui-checked': {
                                        color: "#C7643D",
                                    },
                                }}
                            />
                        }
                        label={<Typography className="text-white text-xl font-semibold">Individual</Typography>}
                        sx={{
                            border: '1px solid #C7643D',
                            borderRadius: '4px',
                            flex: 1,
                            padding: '8px 16px',
                            '&.MuiFormControlLabel-root': {
                                margin: 0
                            },
                            '.MuiFormControlLabel-label': {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            '&:has(input:checked)': {
                                backgroundColor: 'rgba(199, 100, 61, 0.1)'
                            }
                        }}
                    />
                    <FormControlLabel
                        value="true"
                        control={
                            <Radio
                                sx={{
                                    color: "#C7643D",
                                    '&.Mui-checked': {
                                        color: "#C7643D",
                                    },
                                }}
                            />
                        }
                        label={<Typography className="text-white text-xl font-semibold">Company</Typography>}
                        sx={{
                            border: '1px solid #C7643D',
                            borderRadius: '4px',
                            flex: 1,
                            padding: '8px 16px',
                            '&.MuiFormControlLabel-root': {
                                margin: 0
                            },
                            '.MuiFormControlLabel-label': {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            '&:has(input:checked)': {
                                backgroundColor: 'rgba(199, 100, 61, 0.1)'
                            }
                        }}
                    />
                </RadioGroup>
                {isCompany === "true" && <CustomTextField label="Company Name (Optional)" />}
                <CustomTextField label="Phone number" />


                <Typography className="text-xl font-semibold !mb-3 text-white">Upload ID</Typography>
                <Button
                    className="!mb-4"
                    startIcon={<CloudUpload />}
                    onClick={() => fileRef.current?.click()}
                >
                    {file ? file.name : "Upload files"}
                    <input type="file" ref={fileRef} className="hidden" onChange={(e) => setFile(e.target.files?.item(0) || null)} />
                </Button>

                <Button
                    variant="contained"
                    onClick={() => {
                        setIsPopupOpen(true)
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
                    Next
                </Button>
                <div className="text-center mt-4">
                    <button className="text-[#A2A2A2] underline text-sm font-medium mx-auto" >Resend Code</button>
                </div>
            </div>
        </div >
    );
}

export default ArtistInfo;