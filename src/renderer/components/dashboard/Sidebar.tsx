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
import { NavLink } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";
import octopus from "../../../assets/avatars/svg/octopus.svg";
import discord from "../../../assets/support-logos/discord.svg";
import email from "../../../assets/support-logos/email.svg";
import settings from "../../../assets/support-logos/settings.svg";
import twitter from "../../../assets/support-logos/twitter.svg";
import monero from "../../../assets/support-logos/monero.svg";

const useStyles = makeStyles({
  drawerStyle: {
    "& .MuiDrawer-paper": {
      width: "20vw",
      boxSizing: "border-box",
      backgroundColor: "#282b30",
      padding: "15px",
      "@media screen and (max-width: 1000px)" : {
        width: 200,
      },
    }
  },
  balance: {
    fontSize: "0.9vw",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "0.65rem",
    }
  },
  balanceMc: {
    fontSize: "0.9vw",
    marginInline: "0vh 0vh 1vh 0vh",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "0.65rem",
    }
  },
  balanceTitleXmr: {
    fontSize: "1vw",
    fontWeight: "550",
    marginTop: "0.5vh",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "0.75rem",
    }
  },
  balanceTitleMc: {
    fontSize: "1vw",
    fontWeight: "550",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "0.75rem",
    }
  },
  usernameStyle: {
    fontSize: "2.2vw",
    "@media screen and (max-width: 1200px)" : {
      fontSize: "1.7rem",
    }
  },
  subtitle: {
    fontSize: "1vw",
    "@media screen and (max-width: 1000px)" : {
      fontSize: "0.7rem",
    }
  },
  grid: {
    marginTop: "16px",

  },
  imgContainers: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  imgStyle: {
    margin: "0px 7px",

  },
  moneroImgStyle: {
    margin: "0px 10px",
    padding: "0vh 0vh 0.05vh 0vh",
    width: "1vw",
    "@media screen and (max-width: 1000px)" : {
      width: "0.7rem",
    }
  },
  balanceCard: {
    padding: "0.3vw",
    margin: "0vw 1.5vw 0vw 1.5vw",
    borderRadius: "0.5rem",
    backgroundColor: "#36393e",
    "@media screen and (max-width: 1000px)" : {
      margin: "0vw 0.7rem 0vw 0.7rem",
    }
  },
  navigationMenu: {
    marginTop: "8px",
    fontSize: "calc(6vw * 0.25)",
    fontWeight: "300",
    "@media screen and (max-width: 1000px)" : {
     fontSize: "0.94rem",
    }
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
                  width: "17vh",
                  height: "17vh",
                  marginTop: "2vh",
                  margin: "auto",
                  border: "4px solid #76FF02",
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
              <Card className={classes.balanceCard}>
                <Typography display="inline" className={classes.balanceTitleMc}>Mining Credits:  </Typography>
                <Typography display="inline" className={classes.balanceMc}>{miner.mcBalance}</Typography>
            
                <Typography className={classes.balanceTitleXmr}>    
                <a><img className={classes.moneroImgStyle} src={monero} height="100%" style={{margin: "0px 0.2vw -0.25vh 0px"}} />
            </a>
            Monero Balance: </Typography>
                <Typography className={classes.balance}>{miner.xmrBalance} ($4.26 USD) </Typography>
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
                          className={classes.navigationMenu}>
                          {route.name}
                        </Typography>
                      </NavLink>
                    )
                )}
              </List>
            </Grid>
          </Grid>
          <div className={classes.imgContainers}>
          <a href="https://myriade.io/#/" target="_blank">
              <img className={classes.imgStyle} src={settings} height="35"/>
            </a>
            <a href="https://discord.gg/J9Pn7Dk" target="_blank">
              <img className={classes.imgStyle} src={discord} height="35" />
            </a>
            <a href="https://twitter.com/MyriadeInc" target="_blank">
              <img className={classes.imgStyle} src={twitter} height="35" />
            </a>
            <a href="mailto:support@myriade.io" target="_blank">
              <img className={classes.imgStyle} src={email} height="41" style={{marginBottom: "-3px"}} />
            </a>
          </div>
        </Drawer>
      )}
    </MinerConsumer>
  );
};
