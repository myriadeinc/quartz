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
        borderRadius: "0 7px 0 7px",
        minHeight: "44px",
        maxWidth: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" lineHeight="28px" weight="500">
        {text}
      </Typography>
    </Box>
  );
};
