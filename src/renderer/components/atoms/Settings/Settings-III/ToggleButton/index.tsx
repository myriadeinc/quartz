import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
export const ToggleSwitchButton = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  maxWidth: 40,
  maxHeight: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 2,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#0F141F",
      "& + .MuiSwitch-track": {
        backgroundColor: "#FA6F15",
        opacity: 1,
        border: "1px soid green",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "1px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "#FA6F15",
      border: "1px solid green",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      backgroundColor: "#EAEAEA",
      // opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    maxWidth: 12,
    maxHeight: 12,
    backgroundColor: "#FA6F15",
  },
  "& .MuiSwitch-track": {
    borderRadius: "20px",
    backgroundColor: theme.palette.mode === "light" ? "#EAEAEA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
