import {
  Avatar,
  Drawer,
  Grid,
  List,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";

const useStyles = makeStyles({
  usernameStyle: {
    fontSize: "2vw",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "1.4rem",
    }
  },
  subtitle: {
    fontSize: "1vw",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "0.7rem",
    }
  },
  drawerStyle: {
    "& .MuiDrawer-paper": {
      width: "20vw",
      "@media screen and (max-width: 1200px)" : {
        width: 240,
      }
    }
  },
  grid: {
    marginTop: "16px",
  },
});

interface SidebarProps {
  path: string;
}

export const Sidebar = (props: SidebarProps) => {
  const classes = useStyles();

  return (
    <MinerConsumer>
      {(miner) => (
        <Drawer
          className={classes.drawerStyle}
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#202225",
              padding: "36px",
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
                  width: "120px",
                  height: "120px",
                  marginTop: "32px",
                  margin: "auto",
                }}
              >
                {miner.name}
              </Avatar>
            </Grid>
            <Grid item sm={12} className={classes.grid}>
              <Typography className={classes.usernameStyle}>
                {miner.name}
                <span className={classes.subtitle}>{`#${miner.shortId}`}</span>
              </Typography>
              <Typography className={classes.subtitle}>{miner.email}</Typography>
            </Grid>
            <Grid item sm={12} className={classes.grid}>
              <Card
                style={{
                  padding: "16px",
                  borderRadius: "1rem",
                }}
              >
                <Typography>Mining Credits: {miner.mcBalance}</Typography>
                <Typography>Monero Balance: {miner.xmrBalance}</Typography>
              </Card>
            </Grid>
            <Grid item sm={12} className={classes.grid}>
              <Divider />
            </Grid>
            <Grid item sm={12}>
              <List>
                {dashboardRoutes.map(
                  (route) =>
                    route.visible && (
                      <Link
                        to={`${props.path}${route.ref}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Typography style={{ marginTop: "8px" }}>
                          {route.name}
                        </Typography>
                      </Link>
                    )
                )}
              </List>
            </Grid>
          </Grid>
        </Drawer>
      )}
    </MinerConsumer>
  );
};
