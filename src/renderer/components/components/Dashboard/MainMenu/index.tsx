import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { DashboardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/DashboardIcon";
import { StartMiningIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/StartMiningIcon";
import { GiftcardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GiftcardIcon";
import { GameroomIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GameroomIcon";
// import { FriendsActivityCardHeader } from "renderer/components/molecules/Friends/FriendsActivityCardHeader";
import { WorkersIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WorkersIcon";
import { WithdrawIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WithdrawIcon";
import { MainMenuItem } from "renderer/components/molecules/Settings-I/MainMenuItem";
import { FriendsIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/FriendsIcon";
import { ReferelsIcon } from "renderer/components/atoms/StartMining-I/MiningIcons/components/ReferelsIcon";
import { dashboardRoutes } from "renderer/utils/dashboard";
import { useState } from "react";

const MAIN_MENU = [
  {
    menuName: "Dashboard",
    MenuIcon: DashboardIcon,
  },
  {
    menuName: "Start Mining",
    MenuIcon: StartMiningIcon,
  },
  {
    menuName: "Gift Cards",
    MenuIcon: GiftcardIcon,
  },
  {
    menuName: "Game Room",
    MenuIcon: GameroomIcon,
  },
  {
    menuName: "Friends",
    MenuIcon: FriendsIcon,
  },
  {
    menuName: "Workers",
    MenuIcon: WorkersIcon,
  },
  {
    menuName: "Withdraw",
    MenuIcon: WithdrawIcon,
  },
  {
    menuName: "Referels",
    MenuIcon: ReferelsIcon,
  },
];
export const SidebarMainMenu = ({ propsValue }: any) => {
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
    <Grid
      item
      sm={8}
      style={{
        marginLeft: "8px",
        marginBottom: "50px",
        marginTop: "8px",
      }}
    >
      <Typography variant="bodyLarge" color="#EAEAEA">
        MAIN MENU
      </Typography>
      <List style={{ marginTop: "10px" }}>
        {dashboardRoutes.map(
          (route) =>
            route.visible && (
              <Link
                to={`${propsValue.path}${route.ref}`}
                style={{
                  textDecoration: "none",
                  color: "#8C8C8C",
                }}
                key={route.name}
              >
                <ListItem
                  button
                  selected={
                    window.location.pathname ===
                    `${propsValue.path}${route.ref}`
                  }
                >
                  <MainMenuItem item={route.name} MenuIcon={route.Icon} />
                </ListItem>
              </Link>
            )
        )}
      </List>
    </Grid>
  );
};
// </List>
{
  /* {MAIN_MENU.map((element) => {
        return (
          <MainMenuItem
            item={element.menuName}
            MenuIcon={element.MenuIcon}
            key={element.menuName}
          />
        );
      })} */
}
// </Box>
// };
