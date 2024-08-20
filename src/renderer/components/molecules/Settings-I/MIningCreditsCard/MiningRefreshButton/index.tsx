import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { RefreshIcon } from "renderer/components/atoms/Settings/Settings-I/RefreshIcon";
import { reloadContext } from "renderer/pages/Dashboard";

type Props = {};

export const MiningRefreshButton = (props: Props) => {
  const { reload, setReload } = useContext(reloadContext)
  const onToggleVisible = () => {
    setReload((prev: boolean) => !prev);
  }

  return (
    <IconButton
      aria-label="toggle password visibility"
      onClick={onToggleVisible}
      edge="end"
      sx={{
        "&:hover": {
          backgroundColor: "transparent",
        },
        paddingRight: "0px",
      }}
    >
      <RefreshIcon />
    </IconButton>
  );
};
