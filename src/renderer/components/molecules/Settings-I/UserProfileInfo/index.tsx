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
        gap: "8px",
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
          <Typography weight="500" variant="bodySmall" color="#EAEAEA">
            Level {level}
          </Typography>
          <CopperRightIcon />
        </Box>
        <Typography variant="body" color="#8C8C8C">
          {userEmail}
        </Typography>
      </Box>
      <Box>
        <IconButton
          aria-label="toggle password visibility"
          onClick={toggleHandler}
          edge="end"
        >
          {iconState.isSelected ? (
            <DropupIcon
              rectangleColor="transparent"
              pathColor={iconState.isHovered ? "#FA6F15" : "#EAEAEA"}
            />
          ) : (
            // <DropdownIcon
            //   rectangleColor="transparent"
            //   pathColor={iconState.isHovered ? "#FA6F15" : "#EAEAEA"}
            // />
            <DropdownIcon
              rectangleColor="transparent"
              pathColor={iconState.isHovered ? "#FA6F15" : "#EAEAEA"}
            />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};
