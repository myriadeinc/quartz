import { Box } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import CopperLeftIcon from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon";
import { CopperRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon";
import Typography from "renderer/components/atoms/TextStyles";
import { IconLabelMenu } from "../../Settings-II/MenuItems";
interface userProfileInfo {
  userName: string;
  level: string;
  userEmail: string;
}
export const UserProfileInfo = ({
  userName,
  userEmail,
  level,
}: userProfileInfo) => {
  const [iconState, setIconState] = useState({
    isHovered: false,
    isSelected: false,
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const toggleHandler = () => {
    setIconState({ ...iconState, isSelected: !iconState.isSelected });
  };
  return (
    <Box
      className="aslfjslfjdsl"
      sx={{
        // maxwidth: "256px",
        height: "104px",
        display: "flex",
        flexDirection: "row",
        padding: "4px 7px",
      }}
    >
      <Box
        className="helllo"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="heading2" color="#EAEAEA">
          {userName}
        </Typography>
        <Box
          className="helllo"
          sx={{
            width: "145px",
            maxHeight: "40px",
            display: "flex",
            gap: "8px",
          }}
        >
          <CopperLeftIcon />
          <Typography variant="bodySmall" color="#EAEAEA">
            Level {level}
          </Typography>
          <CopperRightIcon />
        </Box>
        <Typography variant="body" color="#8C8C8C">
          {userEmail}
        </Typography>
      </Box>
      <Box sx={{ position: "relative", bottom: "20px" }}></Box>
      <IconLabelMenu />
    </Box>
  );
};
