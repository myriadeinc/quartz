import { Grid, Link, List, ListItem } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { dashboardRoutes } from "renderer/utils/dashboard";
import { MainMenuItem } from "renderer/components/molecules/Settings-I/MainMenuItem";
import { useState } from "react";

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
