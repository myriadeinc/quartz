import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  minHeight: 16,
  maxWidth: 344,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EAEAEA",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: "8px 0 0 8px",
    backgroundColor: "#4D79FF",
  },
}));
