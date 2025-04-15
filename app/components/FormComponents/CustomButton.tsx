import { Button, type ButtonProps } from "@mui/material";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <Button
      variant="contained"
      className={"!bg-orange-600 !text-white !rounded-md !px-4 hover:!bg-orange-700 w-full " + className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
