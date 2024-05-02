import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
interface PurchaseProgressBar {
  caption: string;
}
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  minHeight: 16,
  value: 0,
  borderRadius: 8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EAEAEA",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: "8px 0 0 8px",
    backgroundColor: "#4D79FF",
  },
}));

export const PurchasedProgressBar = ({ caption }: PurchaseProgressBar) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      <BorderLinearProgress value={0} variant="determinate" />
      <Typography centered variant="caption">
        {caption}
      </Typography>
    </Box>
  );
};
