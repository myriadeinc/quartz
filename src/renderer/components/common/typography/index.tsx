import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const VARIANTS = {
  label: "label",
  body: "body",
  headingXXL: "headingXL",
  headingXL: "headingXL",
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  heading4: "heading4",
  heading5: "heading5",
  heading6: "heading5",
  bodyLarge: "bodyLarge",
  bodySmall: "bodySmall",
  button: "button",
  buttonSmall: "buttonSmall",
  tabs: "tabs",
  tableHeader: "tableHeader",
};

type Variant = keyof typeof VARIANTS;

export enum FontWeight {
  Light = 300,
  Regular = 400,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
}

interface TypographyProps {
  variant?: Variant;
  uppercase?: boolean;
  primary?: boolean;
  centered?: boolean;
  weight?: FontWeight | "inherit";
  children?: React.ReactNode;
}

function Typography({
  variant = "body",
  uppercase = false,
  primary = false,
  weight,
  children,
  centered,
  ...props
}: TypographyProps) {
  let styleProps: React.ComponentProps<typeof MuiTypography> = {};

  switch (variant) {
    case "headingXXL":
      styleProps = {
        ...styleProps,
        variant: "h1",
        fontSize: "72px",
        fontWeight: "bold",
      };
      break;
    case "headingXL":
      styleProps = {
        ...styleProps,
        variant: "h1",
        fontSize: "60px",
        fontWeight: "bold",
      };
      break;
    case "heading1":
      styleProps = {
        ...styleProps,
        variant: "h1",
        fontSize: "48px",
        fontWeight: "bold",
      };
      break;
    case "heading2":
      styleProps = {
        ...styleProps,
        variant: "h2",
        fontSize: "20px",
        fontWeight: "500",
      };
      break;
    case "heading3":
      styleProps = {
        ...styleProps,
        variant: "h3",
        fontSize: "30px",
        fontWeight: "bold",
      };
      break;
    case "heading4":
      styleProps = {
        ...styleProps,
        variant: "h4",
        fontSize: "20px",
        fontWeight: "bold",
      };
      break;
    case "heading5":
      styleProps = {
        ...styleProps,
        variant: "h5",
        fontSize: "16px",
        fontWeight: "bold",
      };
      break;
    case "heading6":
      styleProps = {
        ...styleProps,
        variant: "h6",
        fontSize: "14px",
        fontWeight: "bold",
      };
      break;
    case "bodyLarge":
      styleProps = {
        ...styleProps,
        variant: "body1",
        fontSize: "16px",
        fontWeight: FontWeight.Regular,
      };
      break;
    case "body":
      styleProps = {
        ...styleProps,
        variant: "body1",
        fontSize: "14px",
        fontWeight: FontWeight.Regular,
      };
      break;
    case "bodySmall":
      styleProps = {
        ...styleProps,
        variant: "body2",
        fontSize: "12px",
        fontWeight: FontWeight.Regular,
      };
      break;
    case "button":
      styleProps = {
        ...styleProps,
        variant: "button",
        fontSize: "1rem",
      };
      break;
    case "buttonSmall":
      styleProps = {
        ...styleProps,
        variant: "button",
        fontSize: "0.875rem",
      };
      break;
    default:
      styleProps = {
        ...styleProps,
        variant: "body1",
        fontSize: "14px",
        fontWeight: FontWeight.Regular,
      };
  }

  if (uppercase) {
    styleProps = { ...styleProps, textTransform: "uppercase" };
  }
  if (centered) {
    styleProps = { ...styleProps, textAlign: "center" };
  }
  if (primary) {
    styleProps = { ...styleProps, color: "primary.main" };
  }
  if (weight) {
    styleProps = { ...styleProps, fontWeight: weight };
  }

  return (
    <MuiTypography {...styleProps} {...props}>
      {children}
    </MuiTypography>
  );
}

export default Typography;
