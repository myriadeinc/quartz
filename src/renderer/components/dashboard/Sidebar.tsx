import { Avatar, Drawer, Grid, List, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { DashboardRoute } from "renderer/interfaces/pages/dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";

export const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 360,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 360,
          boxSizing: "border-box",
          backgroundColor: "#202225",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item sm={12}>
          <Avatar
            style={{
              width: "100px",
              height: "100px",
              marginTop: "32px",
              margin: "auto",
            }}
          >
            B
          </Avatar>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h2">
            blele<Typography>#182</Typography>
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Card
            style={{
              padding: "16px 16px 0px 16px",
              borderRadius: "1rem",
            }}
          >
            <p>
              <strong>Mining Credits: {0} </strong>
              <i
                className={["fa fa-refresh"].join(" ")}
                style={{
                  float: "right",
                }}
                aria-hidden="true"
                onClick={() => {}}
              ></i>
            </p>
            <p>
              <i className="fab fa-monero" /> Monero Balance: {`0 ($0 USD)`}
            </p>
          </Card>

          <hr />
        </Grid>

        <Grid item sm={12}>
          <List>
            {dashboardRoutes.map((route: DashboardRoute) => (
              <Typography style={{ marginTop: "8px" }}>{route.name}</Typography>
            ))}
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
};
