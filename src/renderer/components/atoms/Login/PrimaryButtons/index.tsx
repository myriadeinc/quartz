type buttonProps = {
  onClick: VoidFunction;
  text: string;
  height: string;
  type: string;
};
import { Button } from "@mui/material";
const PrimaryButton = ({ onClick, text, height, type }: buttonProps) => {
  return (
    <Button
      fullWidth
      type={type}
      style={{
        backgroundColor: "#FA6F15",
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
