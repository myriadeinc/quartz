import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export function RangeSelectorButtonGroup() {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="Basic button group"
      sx={{
        backgroundColor: "#080A0F",
        minWidth: "80px",
        minHeight: "32px",
        color: "#EAEAEA",
        fontSize: "14px",
        lineHeight: "20px",
        textAlign: "center",
        border: "1px solid green",
      }}
    >
      <Button
        sx={{
          color: "#8C8C8C",
          borderRadius: "4px 0",
          border: "none",
          "&:hover": {
            border: "1px solid #EAEAEA",
            color: "#EAEAEA",
          },
        }}
      >
        One
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          border: "none",
          borderRadius: "0",
          "&:hover": {
            border: "1px solid #EAEAEA",
            color: "#EAEAEA",
          },
        }}
      >
        Two
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          border: "none",
          borderRadius: "0 4px 4px 0",
          "&:hover": {
            border: "1px solid #EAEAEA",
            color: "#EAEAEA",
          },
        }}
      >
        Three
      </Button>
      <Button
        sx={{
          color: "#8C8C8C",
          borderRadius: "4px 0",
          border: "none",
          "&:hover": {
            border: "1px solid #EAEAEA",
            color: "#EAEAEA",
          },
        }}
      >
        One
      </Button>
    </ButtonGroup>
  );
}
