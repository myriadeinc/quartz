import { Box } from "@mui/material";
import Typography from "../../TextStyles";

type Props = {
  backgroundColor: string;
  text: string;
};

export const GiftCardValue = ({ backgroundColor, text }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "50%",
        minHeight: "48px",
        maxWidth: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="heading2" color="#0F141F">
        {text} $
      </Typography>
    </Box>
  );
};
