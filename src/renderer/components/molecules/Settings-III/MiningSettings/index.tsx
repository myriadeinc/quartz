import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {};

export const MiningSettings = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="body" color="#EAEAEA">
        Settings
      </Typography>
      <Typography color="#8C8C8C">Info</Typography>
    </Box>
  );
};
