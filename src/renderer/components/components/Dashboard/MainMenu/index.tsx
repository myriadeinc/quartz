import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { DashboardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/DashboardIcon";
import { StartMiningIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/StartMiningIcon";
import { GiftcardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GiftcardIcon";
import { GameroomIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GameroomIcon";
// import { FriendsActivityCardHeader } from "renderer/components/molecules/Friends/FriendsActivityCardHeader";
import { WorkersIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WorkersIcon";
import { WithdrawIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WithdrawIcon";
import { ReferelIcon } from "renderer/components/atoms/Dashboard/DashboardCardIcons/ReferelIcon";
import { MainMenuItem } from "renderer/components/molecules/Settings-I/MainMenuItem";
import { FriendsIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/FriendsIcon";
import { ReferelsIcon } from "renderer/components/atoms/StartMining-I/MiningIcons/components/ReferelsIcon";

const MAIN_MENU = [
  {
    menuName: "Dashboard",
    MenuIcon: <DashboardIcon />,
  },
  {
    menuName: "Start Mining",
    MenuIcon: <StartMiningIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Gift Cards",
    MenuIcon: <GiftcardIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Game Room",
    MenuIcon: <GameroomIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Friends",
    MenuIcon: <FriendsIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Workers",
    MenuIcon: <WorkersIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Withdraw",
    MenuIcon: <WithdrawIcon pathColor="#EAEAEA" rectangleColor="#FA6F15" />,
  },
  {
    menuName: "Referels",
    MenuIcon: <ReferelsIcon />,
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
      {MAIN_MENU.map((element) => {
        return (
          <MainMenuItem
            item={element.menuName}
            MenuIcon={element.MenuIcon}
            key={element.menuName}
          />
        );
      })}
    </Box>
  );
};
