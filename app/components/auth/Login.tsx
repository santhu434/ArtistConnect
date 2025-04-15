import { Button } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router";
import CustomTextField from "../FormComponents/CustomTextField.js";

const Login = () => {
  return (<div>
    <h2 className="text-base font-normal text-[#A2A2A2] mb-2">LET'S GET YOU STARTED</h2>
    <h1 className="text-2xl font-bold mb-6">Log In as Fan</h1>
    <form>
      <CustomTextField label="Email" />
      <CustomTextField label="Password" type="password" />
      <div className="flex justify-between items-center">
        <FormControlLabel sx={{ fontFamily: "Zen Kaku", fontWeight: "400", color: "#FFFFFF", fontSize: "12.8px" }} control={<CheckBox sx={{ color: "#656565", ":checked": "#656565" }} defaultChecked />} label="Remember me" />
        <Link className="text-[#D8D8D8] text-[12.8px] font-medium" to={"#"}>Forgot Password?</Link>
      </div>
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
        LOGIN
      </Button>
    </form>
  </div>

  );
};

export default Login;
