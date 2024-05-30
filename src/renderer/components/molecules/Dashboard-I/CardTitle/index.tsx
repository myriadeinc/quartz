import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type cardProps = {
  cardTitle: string;
  cardInfo: string;
};

export const CardTitle = ({ cardTitle, cardInfo }: cardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "56px",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <Typography color="#656565" variant="body">
        {cardTitle}
      </Typography>
      <Typography color="#EAEAEA" variant="heading2">
        {cardInfo}
      </Typography>
    </Box>
  );
};
