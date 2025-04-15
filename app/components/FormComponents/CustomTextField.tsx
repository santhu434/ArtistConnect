import React from "react";
import { TextField, type TextFieldProps } from "@mui/material";

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
      className="!mb-4 bg-[#1E1E1E] rounded-md"
      InputLabelProps={{ style: { color: "#9CA3AF" } }}
      InputProps={{
        style: { color: "#fff" },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
