import Box from "@mui/material/Box";
import { CustomAvatar } from "renderer/components/atoms/Settings/Settings-III/Avatar";

export const AvatarSelector = () => {
  return (
    <Box
      sx={{
        display: "grid",
        flexWrap: "wrap",
        gap: "16px",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      {[1, 2, 3, 4, 5].map(() => {
        return <CustomAvatar isSelectingAvatar={true} src="" />;
      })}
    </Box>
  );
};
