type buttonProps = {
  onClick: VoidFunction;
};
import { Button } from "@mui/material";
const PrimaryButton = ({ onClick }: buttonProps) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundColor: "#FA6F15",
        marginTop: "20px",
        width: "120px",
        height: "32px",
        fontSize: "14px",
        fontWeight: "600",
        color: "#0F141F",
        textTransform: "capitalize",
      }}
      variant="contained"
      onClick={onClick}
    >
      Login
    </Button>
  );
};

export default PrimaryButton;
