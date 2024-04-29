import { Button } from "@mui/material";

type Variant = "large" | "medium";
type TextTransform = "capitalize" | "uppercase" | "lowercase" | "full-width";
interface SecondaryButtonProps {
  variant: Variant;
  text: string;
  onClick: VoidFunction;
  width: string;
  textTransform: TextTransform;
}
const defaultWidth = "96px";
export const SecondaryButton = ({
  variant,
  text,
  onClick,
  width,
  textTransform,
}: SecondaryButtonProps) => {
  return (
    <>
      {variant === "large" ? (
        <Button
          sx={{
            minWidth: width || defaultWidth,
            maxHeight: "40px",
            textTransform: textTransform,
            padding: "10px 12px",
            color: "#EAEAEA",
            borderRadius: "4px",
            border: "2px solid #FA6F15",
            "&:hover": {
              border: "2px solid #FF8B40",
            },
          }}
          onClick={onClick}
        >
          {text}
        </Button>
      ) : (
        <Button
          sx={{
            minWidth: width || defaultWidth,
            textTransform: textTransform,
            maxHeight: "32px",
            padding: "6px 12px",
            color: "#EAEAEA",
            borderRadius: "4px",
            border: "2px solid #FA6F15",
            "&:hover": {
              border: "2px solid #FF8B40",
            },
          }}
          onClick={onClick}
        >
          {text}
        </Button>
      )}
    </>
  );
};
