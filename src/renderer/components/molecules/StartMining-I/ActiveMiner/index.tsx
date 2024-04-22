import { Box } from "@mui/material";
import { WorkersIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/WorkersIcon";
import Typography from "renderer/components/atoms/TextStyles";

export const ActiveMiner = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <WorkersIcon />
      <Typography variant="caption" centered color="#656565">
        {activeMiner}
      </Typography>
      <Typography variant="heading2" centered color="#EAEAEA"></Typography>
    </Box>
  );
};
