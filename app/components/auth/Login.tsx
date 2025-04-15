import { Button } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CustomTextField from "../FormComponents/CustomTextField.js";

const Login = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("");
  const navigation = useNavigate()

  const handleSubmit = () => {
    setError("")
    switch (email) {
      case "admin@gmail.com":
        navigation("/admin")
        break;
      case "artist@gmail.com":
        navigation("/artist");
        break;
      case "fan@gmail.com":
        navigation("/fans/explore")
        break;
      default:
        setError("Invalid Email")
    }
  }

  return (<div>
    <h2 className="text-base font-normal text-[#A2A2A2] mb-2">LET'S GET YOU STARTED</h2>
    <h1 className="text-2xl font-bold mb-6">Log In as Fan</h1>
    <form>
      <CustomTextField label="Email" onChange={(e) => setEmail(e.target.value)} />
      <CustomTextField label="Password" type="password" />
      <div className="flex justify-between items-center">
        <FormControlLabel sx={{ fontFamily: "Zen Kaku", fontWeight: "400", color: "#FFFFFF", fontSize: "12.8px" }} control={<CheckBox sx={{ color: "#656565", ":checked": "#656565" }} defaultChecked />} label="Remember me" />
        {error && <p className="text-[#FF0000] text-[12.8px] font-medium">{error}</p>}
        <Link className="text-[#D8D8D8] text-[12.8px] font-medium" to={"#"}>Forgot Password?</Link>
      </div>
      <Button
        onClick={handleSubmit}
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
