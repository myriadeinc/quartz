import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import CopperLeftIcon from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon";
import { CopperRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon";
import DropdownIcon from "renderer/components/atoms/Settings/Settings-III/DropdownIcon";
import DropupIcon from "renderer/components/atoms/Settings/Settings-III/DropupIcon";
import Typography from "renderer/components/atoms/TextStyles";
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

  const handleIconInteraction = (action: "hover" | "click", value: boolean) => {
    if (action === "hover") {
      setIconState({ ...iconState, isHovered: value });
    } else if (action === "click") {
      setIconState({ ...iconState, isSelected: !iconState.isSelected });
    }
  };
  return (
    <Box
      sx={{
        width: "256px",
        height: "104px",
        display: "flex",
        flexDirection: "column",
        padding: "4px 7px",
        gap: "8px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography variant="heading2" color="#EAEAEA">
          {userName}
        </Typography>
        <IconButton
          aria-label="toggle password visibility"
          // onClick={onToggleVisible}
          edge="end"
        >
          {iconState.isSelected ? (
            <DropdownIcon
              rectangleColor="transparent"
              pathColor={iconState.isHovered ? "#FA6F15" : "#EAEAEA"}
            />
          ) : (
            <DropupIcon
              rectangleColor="transparent"
              pathColor={iconState.isHovered ? "#FA6F15" : "#EAEAEA"}
            />
          )}
        </IconButton>
      </Box>
      <Box
        sx={{ width: "145px", maxHeight: "40px", display: "flex", gap: "8px" }}
      >
        <CopperLeftIcon />
        <Typography weight="500" variant="bodySmall" color="#EAEAEA">
          Level {level}
        </Typography>
        <CopperRightIcon />
      </Box>
      <Typography variant="body" color="#8C8C8C">
        {userEmail}
      </Typography>
    </Box>
  );
};
