import { Button } from "@mui/material";
import CustomTextField from "../FormComponents/CustomTextField.js";

const SignUp = () => {
    return (<div>
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
    </div>);
}

export default SignUp;