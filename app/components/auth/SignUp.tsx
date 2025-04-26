import { Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import CustomTextField from "../FormComponents/CustomTextField.js";


const SignUp = () => {
    let navigate = useNavigate();
    const [accType, setAccType] = useState("fan");
    return (<div>
        <h2 className="text-base font-normal text-[#A2A2A2] mb-2">LET'S GET YOU STARTED</h2>
        <h1 className="text-2xl font-bold mb-6">REGISTER AS</h1>

        <form onSubmit={(e) => {
            e.preventDefault()
            localStorage.setItem("accType", accType)
            navigate("/onboard/1")
        }}>
            <RadioGroup value={accType} onChange={(e) => setAccType(e.target.value)} row defaultValue="fan" sx={{ mb: 3, display: "flex", gap: 2 }}>
                <FormControlLabel
                    value="artist"
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
                    label={<Typography>Artist</Typography>}
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
                    value="fan"
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
                    label={<Typography>Fan</Typography>}
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
            <CustomTextField label="Name" />
            <CustomTextField label="Email" />
            <CustomTextField label="Password" type="password" />
            <Button
                type="submit"
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
    </div>);
}

export default SignUp;
{/* <h1 className="text-2xl font-bold mb-6">REGISTER</h1>

        <form>
            <RadioGroup row defaultValue="fan" sx={{ mb: 3 }}            >
                <Radio value="artist" sx={{ color: "#C7643D", '&.Mui-checked': { color: "#C7643D", }, }} />
                <Typography sx={{ mr: 3 }}>Artist</Typography>

                <Radio value="fan" sx={{ color: "#C7643D", '&.Mui-checked': { color: "#C7643D", }, }} />
                <Typography>Fan</Typography>
            </RadioGroup>
            <CustomTextField label="Name" />
            <CustomTextField label="Email" />
            <CustomTextField label="Password" type="password" />
            <Button
                variant="contained"
                onClick={() => {
                    navigate("/onboard/1")
                }}
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
    </div >);
}

export default SignUp; */}