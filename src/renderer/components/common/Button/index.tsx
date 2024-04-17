import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ButtonProps {
  children: React.ReactNode;
  bg?: string;
  border?: string;
  width?: string;
  onClick?: () => void;
  borderRadius?: string;
  backgroundColor?: string;
  height?: string;
  padding?: string;
  position?: string;
  top?: string;
  right?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  leftIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  size?:
    | "small"
    | "medium"
    | "large"
    | {
        base?: string;
        md?: string;
        lg?: string;
      };
}

const CommonButton = ({
  type,
  bg,
  border,
  width,
  height,
  onClick,
  borderRadius,
  backgroundColor,
  padding,
  position,
  top,
  right,
  fontSize,
  fontWeight,
  children,
  color,
  leftIcon,
  isLoading,
  loadingText,
  disabled,
  size,
}: ButtonProps) => {
  return (
    <Box>
      <Button
        variant="contained"
        style={{
          border: border,
          backgroundPosition: position,
          padding: padding || "8px 24px",
          borderRadius: borderRadius || "6px",
          fontSize: "14px",
          backgroundColor: bg || "white",
          color: color || "white",
          width: width,
          height: height,
          top: top,
          right: right,
        }}
        onClick={onClick}
        disabled={disabled}
        size={size || "medium"}
        type={type || "submit"}
        startIcon={leftIcon}
        isLoading={isLoading || false}
        loadingText={loadingText || "In progress"}
      >
        <Typography variant="button" style={{ fontSize, fontWeight }}>
          {children}
        </Typography>
      </Button>
    </Box>
  );
};

export default CommonButton;
