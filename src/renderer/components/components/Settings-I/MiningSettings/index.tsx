import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { SettingsBox } from "renderer/components/organisms/Settings";

type Props = {};
type MININGSETTING = {
  settingName: string;
  settingInfo: string;
};
const MINING_SETTINGS: MININGSETTING[] = [
  {
    settingName: "Allow anti virus exception",
    settingInfo:
      "Without this, your antivirus will probably delete the mining software",
  },
  {
    settingName: "Keep Mining Program open in activity Center",
    settingInfo:
      "Keeping the Mining software open at all times (even when paused) will allow it to be fully optimized when you decide to use it. When paused, the mining software will use no resources.",
  },
  {
    settingName: "Begin Mining Program on PC start",
    settingInfo:
      "When the mining program is one of the first programs open on your pc it gives a boost of about 20% when you mine even if it starts paused.",
  },
  {
    settingName: "Auto Mine when you are away from PC",
    settingInfo: "",
  },
];
export const MiningSettings = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="heading2">Mining Settings</Typography>
      {MINING_SETTINGS.map((settingItems: MININGSETTING) => {
        <SettingsBox
          settingName={settingItems.settingName}
          settingsInfo={settingItems.settingInfo}
          key={settingItems.settingName}
        />;
      })}
    </Box>
  );
};
