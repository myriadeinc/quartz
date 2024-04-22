import { Box } from "@mui/material";
import { ToggleSwitchButton } from "renderer/components/atoms/Settings/Settings-III/ToggleButton";
import Typography from "renderer/components/atoms/TextStyles";
export const DarkLightModeSelector = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        width: "132px",
        height: "20px",
        backgroundColor: "#0F141F",
      }}
    >
      <Typography variant="bodySmall">Light</Typography>
      <ToggleSwitchButton />
      <Typography variant="bodySmall">Dark</Typography>
    </Box>
  );
};
