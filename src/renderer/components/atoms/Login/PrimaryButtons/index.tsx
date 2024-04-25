type buttonProps = {
  onClick: VoidFunction;
  text: string;
};
import { Button } from "@mui/material";
const PrimaryButton = ({ onClick, text }: buttonProps) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundColor: "#FA6F15",
        // marginTop: "20px",
        width: "auto",
        height: "32px",
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
