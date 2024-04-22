import { Button } from "@mui/material";

type Variant = "large" | "medium";
interface SecondaryButtonProps {
  variant: Variant;
  text: string;
}

export const SecondaryButton = ({ variant, text }: SecondaryButtonProps) => {
  return (
    <>
      {variant === "large" ? (
        <Button
          sx={{
            minWidth: "96px",
            maxHeight: "40px",
            padding: "10px 12px",
            color: "#EAEAEA",
            borderRadius: "4px",
            border: "2px solid #FA6F15",
            "&:hover": {
              border: "2px solid #FF8B40",
            },
          }}
        >
          {text}
        </Button>
      ) : (
        <Button
          sx={{
            minWidth: "96px",
            maxHeight: "32px",
            padding: "6px 12px",
            color: "#EAEAEA",
            borderRadius: "4px",
            border: "2px solid #FA6F15",
            "&:hover": {
              border: "2px solid #FF8B40",
            },
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
};
