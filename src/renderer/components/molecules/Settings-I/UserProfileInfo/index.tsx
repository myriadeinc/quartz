import { Box } from "@mui/material";
import CopperLeftIcon from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon";
import { CopperRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon";
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
  return (
    <Box
      sx={{
        width: "256px",
        height: "104px",
        display: "flex",
        flexDirection: "column",
        padding: "4px 7px",
      }}
    >
      <Box>
        <Typography variant="heading2" color="#EAEAEA">
          {userName}
        </Typography>
      </Box>
      <Box
        sx={{ width: "145px", maxHeight: "40px", display: "flex", gap: "8px" }}
      >
        <CopperLeftIcon />
        <Typography weight="500" variant="bodySmall" color="#EAEAEA">
          Level {leve}
        </Typography>
        <CopperRightIcon />
      </Box>
      <Typography variant="body" color="#8C8C8C">
        {userEmail}
      </Typography>
    </Box>
  );
};
