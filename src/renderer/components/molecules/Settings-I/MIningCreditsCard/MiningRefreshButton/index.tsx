import IconButton from "@mui/material/IconButton";
import { RefreshIcon } from "renderer/components/atoms/Settings/Settings-I/RefreshIcon";

type Props = {};

export const MiningRefreshButton = (props: Props) => {
  return (
    <IconButton
      aria-label="toggle password visibility"
      // onClick={onToggleVisible}
      edge="end"
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <RefreshIcon />
    </IconButton>
  );
};
