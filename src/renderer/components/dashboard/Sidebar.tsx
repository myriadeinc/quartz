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
import { NavLink, Redirect } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";
import octopus from "../../../assets/avatars/Octopus.png"
import discord from "../../../assets/support-logos/discord.png"
import email from "../../../assets/support-logos/email.png"

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
  imgContainers: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  imgStyle: {
    margin: "4px"
  }
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
                  border: "4px solid #76FF02"
                }}
                src={octopus}
              />
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
                  backgroundColor: "#2f3136",
                }}
              >
                <Typography>Mining Credits: {miner.mcBalance}</Typography>
                <Typography>Monero Balance: {miner.xmrBalance}</Typography>
              </Card>
            </Grid>
            <Grid item sm={12} className={classes.grid}>
              <Divider 
                style={{ 
                  margin: "12px 0px 12px 0px",
                }}
              />
            </Grid>
            <Grid item sm={12}>
              <List>
                {dashboardRoutes.map(
                  (route) =>
                    route.visible && (
                      <NavLink
                        to={`${props.path}${route.ref}`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Typography 
                          style={{ 
                            marginTop: "8px",
                            fontSize: "1.5rem",
                            fontWeight: "300"
                          }}
                        >
                          {route.name}
                        </Typography>
                      </NavLink>
                    )
                )}
              </List>
              <Redirect to="/dashboard"></Redirect>
            </Grid>
          </Grid>
          <div className={classes.imgContainers}>
            <img className={classes.imgStyle} src={discord} height="30"></img>
            <img className={classes.imgStyle} src={email} height="28"></img>
          </div>
        </Drawer>
      )}
    </MinerConsumer>
  );
};
