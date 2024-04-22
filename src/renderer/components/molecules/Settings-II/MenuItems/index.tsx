import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import { StreamerModeOnIcon } from "renderer/components/atoms/Settings/Settings-I/StreamerMode/StreamerModeOnIcon";
import { StartIcon } from "renderer/components/atoms/Settings/Settings-I/StreamerMode/StartIcon";

export default function IconMenu() {
  return (
    <Paper
      sx={{
        width: 326,
        maxWidth: "100%",
        backgroundColor: "#0F141F",
        color: "#656565",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>Mode</ListItemText>
          <StreamerModeOnIcon />
          <ContentCut fontSize="small" />
        </MenuItem>
        <Divider color="#656565" width="100%" />
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>Copy</ListItemText>
        </MenuItem>
        <Divider color="#656565" width="100%" />
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <StartIcon />
          <ContentPaste fontSize="small" />
        </MenuItem>
        <Divider color="#656565" width="100%" />
        <MenuItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
