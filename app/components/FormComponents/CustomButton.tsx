import React from "react";
import { Button, type ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      className="!bg-orange-600 !text-white !rounded-md !py-2 !px-4 hover:!bg-orange-700 w-full"
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
