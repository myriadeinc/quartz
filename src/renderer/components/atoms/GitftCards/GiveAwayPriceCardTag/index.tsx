import { Box } from "@mui/material";
import Typography from "../../TextStyles";
type Props = {
  backgroundColor: string;
  text: string;
};

export const GiveAwayPriceCardTag = ({ backgroundColor, text }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        borderBottomLeftRadius: "7px",
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
      }}
    >
      <Typography variant="heading2" color="#0F141F">
        $ {text}
      </Typography>
    </Box>
  );
};
