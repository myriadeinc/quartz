import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
interface buttonGroupName {
  firstButtonTitle: string;
  SecondButtonTitle: string;
  ThirdButtonTitle: string;
  FourthButtonTitle: string;
  isFourtButtonTextCapital?: boolean;
  length?: number;
  width?: string;
}
export function MiningRangeSelectorButtonGroup({
  firstButtonTitle,
  SecondButtonTitle,
  ThirdButtonTitle,
  FourthButtonTitle,
  isFourtButtonTextCapital,
  length,
  width,
}: buttonGroupName) {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="Basic button group"
      sx={{
        backgroundColor: "#080A0F",
        maxWidth: width,
        maxHeight: "32px",
        color: "#EAEAEA",
        fontSize: "14px",
        lineHeight: "20px",
        textAlign: "center",
        border: "1px solid #3a475d",
        textTransform: "capitalize",
      }}
    >
      <Button
        sx={{
          color: "#8C8C8C",
          borderRadius: "4px 0",
          border: "none",
          textTransform: "capitalize",
          "&:hover": {
            border: "1px solid #8C8C8C",
            color: "#EAEAEA",
          },
        }}
      >
        {firstButtonTitle}
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          border: "none",
          borderRadius: "0",
          textTransform: "capitalize",
          borderLeft: "1px solid #3a475d",
          "&:hover": {
            border: "1px solid #8C8C8C",
            color: "#EAEAEA",
          },
        }}
      >
        {SecondButtonTitle}
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          border: "none",
          textTransform: "capitalize",
          borderRadius: "0 4px 4px 0",
          borderLeft: "1px solid #3a475d",
          "&:hover": {
            border: "1px solid #8C8C8C",
            color: "#EAEAEA",
          },
        }}
      >
        {ThirdButtonTitle}
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          borderRadius: "4px 0",
          border: "none",
          borderLeft: "1px solid #3a475d",
          textTransform: isFourtButtonTextCapital ? "capitalize" : "uppercase",
          "&:hover": {
            border: "1px solid #8C8C8C",
            color: "#EAEAEA",
          },
        }}
      >
        {FourthButtonTitle}
      </Button>
    </ButtonGroup>
  );
}
