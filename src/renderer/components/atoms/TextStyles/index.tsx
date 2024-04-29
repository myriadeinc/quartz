import React from "react";
import { Typography as MuiTypography } from "@mui/material";

const VARIANTS = {
  label: "label",
  caption: "caption",
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
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
}
export enum LineHeight {
  H1 = "32px",
  H2 = "28px",
  Body1 = "24px",
  Body2 = "24px",
  Body3 = "20px",
  Caption = "16px",
}
interface TypographyProps {
  variant?: Variant;
  uppercase?: boolean;
  primary?: boolean;
  color?: string;
  centered?: boolean;
  weight?: FontWeight | "inherit";
  children?: React.ReactNode;
}

function Typography({
  variant = "body",
  uppercase = false,
  primary = false,
  weight,
  color,
  children,
  centered,
  ...props
}: TypographyProps) {
  let styleProps: React.ComponentProps<typeof MuiTypography> = {};

  switch (variant) {
    case "headingXXL":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h1",
        fontSize: "72px",
        fontWeight: "bold",
      };
      break;
    case "headingXL":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h1",
        fontSize: "60px",
        fontWeight: "bold",
      };
      break;
    case "heading1":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h1",
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: FontWeight.Regular,
        lineHeight: LineHeight.H1,
      };
      break;
    case "heading2":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h2",
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: FontWeight.Medium,
        lineHeight: LineHeight.H2,
      };
      break;
    case "heading3":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h3",
        fontSize: "30px",
        fontFamily: "Poppins",
        fontWeight: "bold",
      };
      break;
    case "heading4":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "h4",
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "bold",
      };
      break;
    case "heading5":
      styleProps = {
        ...styleProps,
        variant: "h5",
        fontSize: "16px",
        fontFamily: "Poppins",
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
        color: color,
        variant: "body1",
        fontSize: "18px",
        fontFamily: "Poppins",
        fontWeight: FontWeight.Regular,
        lineHeight: LineHeight.Body1,
      };
      break;
    case "body":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "body1",
        fontSize: "16px",
        fontWeight: FontWeight.Regular,
        lineHeight: LineHeight.Body2,
        fontFamily: "Poppins",
      };
      break;
    case "bodySmall":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "body2",
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: FontWeight.Regular,
        lineHeight: LineHeight.Body3,
      };
      break;
    case "caption":
      styleProps = {
        ...styleProps,
        color: color,
        variant: "caption",
        fontSize: "12px",
        fontFamily: "Poppins",
        fontWeight: FontWeight.Regular,
        lineHeight: LineHeight.Caption,
      };
      break;
    case "button":
      styleProps = {
        ...styleProps,
        variant: "button",
        fontSize: "14px",
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
        fontFamily: "Poppins",
        fontWeight: FontWeight.Regular,
      };
  }

  if (uppercase) {
    styleProps = {
      ...styleProps,
      textTransform: "uppercase",
      fontFamily: "Poppins",
    };
  }
  if (centered) {
    styleProps = { ...styleProps, textAlign: "center", fontFamily: "Poppins" };
  }
  if (primary) {
    styleProps = { ...styleProps, color: "#EAEAEA", fontFamily: "Poppins" };
  }
  if (weight) {
    styleProps = { ...styleProps, fontWeight: weight, fontFamily: "Poppins" };
  }

  return (
    <MuiTypography {...styleProps} {...props}>
      {children}
    </MuiTypography>
  );
}

export default Typography;
