import { TextField, type TextFieldProps } from "@mui/material";
import React from "react";

type CustomTextFieldProps = TextFieldProps & {
  label: string;
  type?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type = "text",
  ...props
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#BDBDBD', // default
          },
          '&:hover fieldset': {
            borderColor: '#ffffff', // on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#B700D8', // on focus
          },
        },
      }}
      className="!mb-4 border-amber-50  bg-[#292929] rounded-lg"
      InputLabelProps={{ style: { color: "#757575" } }}
      InputProps={{
        style: { color: "#fff" },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
