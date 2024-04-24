import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type MiningSettingsProps = {
  settings: string;
  info: string;
};

export const MiningSettingsBox = ({ settings, info }: MiningSettingsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="body" color="#EAEAEA">
        {settings}
      </Typography>
      {info && <Typography color="#8C8C8C">{info}</Typography>}
    </Box>
  );
};
