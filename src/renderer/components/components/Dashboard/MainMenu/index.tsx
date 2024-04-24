import { Box } from "@mui/material";
import React from "react";
import { DashboardIcon } from "renderer/components/atoms/Settings/Settings-II/DashboardIcon";
import Typography from "renderer/components/atoms/TextStyles";
import { MenuIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons";

const MAIN_MENU = [
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
  {
    menuName: "Start Mining",
    MenuIcon: <MenuIcon name="StartMiningIcon" />,
  },
  {
    menuName: "Gift Cards",
    MenuIcon: <MenuIcon name="GiftcardIcon" />,
  },
  {
    menuName: "Dashboard",
    MenuIcon: <MenuIcon name="GameroomIcon" />,
  },
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
];
export const SidebarMainMenu = () => {
  return (
    <Box
      sx={{
        width: "326px",
        height: "440px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="bodyLarge" color="#696969">
        Main Menu
      </Typography>
      <MainMenuItem />
    </Box>
  );
};
