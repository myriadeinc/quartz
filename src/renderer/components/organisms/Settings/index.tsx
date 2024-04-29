import { Box } from "@mui/material";
import React from "react";
import { ToggleSwitchButton } from "renderer/components/atoms/Settings/Settings-III/ToggleButton";
import { MiningSettingsBox } from "renderer/components/molecules/Settings-III/MiningSettings";

type SettingsProps = {
  settingName: string;
  settingsInfo: string;
};

export const SettingsBox = ({ settingName, settingsInfo }: SettingsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "40px",
        maxWidth: "460px",
      }}
    >
      <MiningSettingsBox settings={settingName} info={settingsInfo} />
      <ToggleSwitchButton />
    </Box>
  );
};
