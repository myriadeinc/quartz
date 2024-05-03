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
      sx={{
        width: "100%",
        maxHeight: "96px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="heading2" color="#EAEAEA">
            {userName}
          </Typography>
          <IconLabelMenu />
        </Box>
        <Box
          sx={{
            width: "100%",
            maxHeight: "40px",
            display: "flex",
          }}
        >
          <Box sx={{ padding: "3px 4px" }}>
            <CopperLeftIcon />
          </Box>
          <Box sx={{ padding: "4px 8px" }}>
            <Typography variant="body" color="#EAEAEA">
              Level {level}
            </Typography>
          </Box>
          <Box sx={{ padding: "3px 4px" }}>
            <CopperRightIcon />
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            {userEmail}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
