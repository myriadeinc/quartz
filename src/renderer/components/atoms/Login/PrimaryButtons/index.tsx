type buttonProps = {
  onClick: VoidFunction;
  text: string;
  height: string;
};
import { Button } from "@mui/material";
const PrimaryButton = ({ onClick, text, height }: buttonProps) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundColor: "#FA6F15",
        // marginTop: "20px",
        width: "100%",
        height: height || "32px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#0F141F",
        textTransform: "capitalize",
      }}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
