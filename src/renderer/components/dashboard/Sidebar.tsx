import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";
import { SupportContactSocials } from "../ContactSupportSocialHandles";

// ... (import statements remain unchanged)

// Initial miner level

let minerLevel = "33";

// Styles using MUI makeStyles
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
  },
  avatarContainer: {
    position: "relative",
    display: "inline-block",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(2),
    fontFamily: "Poppins, sans-serif",
  },
  statusCircle: {
    position: "absolute",
    top: "0px", // Adjust positioning as needed
    left: "0px", // Adjust positioning as needed
    width: "88px", // Set the desired inner radius * 2
    height: "88px", // Set the desired inner radius * 2
    borderRadius: "50%",
    backgroundColor: "transparent", // Set the outer color
    border: "4px solid #414E66", // Set the ring thickness and color
  },
  minerDetails: {
    marginTop: theme.spacing(3),
    fontFamily: "Poppins, sans-serif",
  },
  level: {
    fontSize: theme.typography.pxToRem(16),
    color: "#EAEAEA",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontFamily: "Poppins, sans-serif",
  },
  email: {
    fontSize: theme.typography.pxToRem(14),
    color: "#8C8C8C",
    marginTop: theme.spacing(2),
    fontFamily: "Poppins, sans-serif",
  },
  miningCard: {
    width: "100%",
    height: theme.spacing(18),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

// Props interface for Sidebar component
interface SidebarProps {
  path: string;
}

// Sidebar component
const Sidebar = (props: SidebarProps) => {
  const classes = useStyles();

  return (
    <MinerConsumer>
      {(miner) => (
        <Drawer
          sx={{
            width: "406px",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "406px",
              boxSizing: "border-box",
              backgroundColor: "#080A0F",
              paddingLeft: "20px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Grid
            container
            justifyContent="left"
            alignItems="center"
            textAlign="left"
            spacing={2}
            className={classes.grid} // Apply the styles using makeStyles
          >
            <Grid container className={classes.grid}>
              <Grid item sm={2}>
                <div
                  className={classes.avatarContainer}
                  style={{ display: "flex", marginLeft: "20px" }}
                >
                  <div className={classes.statusCircle}></div>
                  <Avatar
                    className={classes.avatar}
                    alt="avatar name"
                    src="/assets/img/Profile-Image-2.webp"
                    style={{
                      backgroundColor: "#0E1B38",
                      width: "80px",
                      height: "80px",
                      marginLeft: "8.25px",
                      marginTop: "8px",
                    }}
                  />
                </div>
              </Grid>

              <Grid
                item
                sm={5}
                className={classes.minerDetails}
                style={{
                  marginLeft: "70px",
                  marginTop: "5px",
                  marginRight: "70px",
                }}
              >
                {/* Miner Details */}
                <Typography variant="h5" fontFamily="Poppins, sans-serif">
                  {`${miner.name} #${miner.shortId}`}
                </Typography>

                <Typography
                  className={classes.level}
                  fontFamily="Poppins, sans-serif"
                  style={{ marginLeft: "8px", marginTop: "5px" }}
                >
                  <span
                    style={{
                      verticalAlign: "bottom",
                      display: "inline-block",
                      marginBottom: "-5px",
                    }}
                  >
                    <img
                      src="/assets/svg/Copper-Left.svg"
                      alt="Level Icon Left"
                      style={{
                        width: "32px",
                        height: "32px",
                        marginRight: "8px",
                      }}
                    />
                  </span>
                  {`Level ${minerLevel}`}
                  <span
                    style={{
                      verticalAlign: "bottom",
                      display: "inline-block",
                      marginBottom: "-5px",
                    }}
                  >
                    <img
                      src="/assets/svg/Copper-Right.svg"
                      alt="Level Icon Right"
                      style={{
                        width: "32px",
                        height: "32px",
                        marginLeft: "8px",
                      }}
                    />
                  </span>
                </Typography>

                <Typography
                  className={classes.email}
                  fontFamily="Poppins, sans-serif"
                  style={{ margin: "5px 0px" }}
                >
                  {miner.email}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              sm={12}
              style={{ marginBottom: "-5px" }}
              className={classes.grid}
            >
              {/* Mining Card */}
              <Card
                className={classes.miningCard}
                style={{
                  width: "366px",
                  height: "144px",
                  padding: "0px",
                  backgroundColor: "#0F141F",
                  display: "flex",
                  backgroundImage: "none",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                    marginLeft: "80px",
                    marginTop: "18px",
                  }}
                >
                  <img
                    src="/assets/svg/MC-Icon.svg"
                    alt="Mining Credits Icon"
                    style={{
                      width: "44px",
                      height: "44px",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      marginLeft: "10px",
                      flexDirection: "column",
                      minWidth: "100px",
                    }}
                  >
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      variant="body1"
                      style={{ textAlign: "left", marginBottom: "5px" }}
                    >
                      Mining Credits:
                    </Typography>
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      variant="body2"
                      style={{
                        textAlign: "left",
                        color: "#8C8C8C",
                        fontSize: "13px",
                      }}
                    >
                      {miner.mcBalance}
                    </Typography>
                  </div>

                  <img
                    src="/assets/svg/Refresh.png"
                    alt="Refresh Icon"
                    style={{
                      width: "18px",
                      height: "18px",
                      marginLeft: "90px",
                      marginTop: "-6px",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginLeft: "80px",
                  }}
                >
                  <img
                    src="/assets/svg/Monero-Icon.svg"
                    alt="Monero Balance Icon"
                    style={{
                      width: "44px",
                      height: "44px",
                      marginRight: "10px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{ textAlign: "left" }}
                    >
                      Monero Balance:
                    </Typography>
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{
                        textAlign: "left",
                        color: "#8C8C8C",
                        fontSize: "13px",
                      }}
                    >
                      {miner.xmrBalance}
                    </Typography>
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid
              item
              sm={8}
              style={{
                marginLeft: "20px",
                marginBottom: "50px",
                marginTop: "3px",
              }}
            >
              {/* Sidebar Navigation Links */}
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  fontSize: 18,
                  color: "#8C8C8C",
                  marginBottom: "-17px",
                }}
              >
                MAIN MENU
              </Typography>
              <List style={{ marginTop: "10px" }}>
                {dashboardRoutes.map(
                  (route) =>
                    route.visible && (
                      <Link
                        to={`${props.path}${route.ref}`}
                        style={{ textDecoration: "none", color: "#8C8C8C" }}
                        key={route.name} // Add a unique key for each Link
                      >
                        <ListItem
                          button
                          selected={
                            window.location.pathname ===
                            `${props.path}${route.ref}`
                          }
                        >
                          <ListItemAvatar style={{ marginLeft: "-15px" }}>
                            <Avatar
                              src={route.icon}
                              alt={route.alt}
                              style={{ color: "red" }}
                            />
                          </ListItemAvatar>
                          <ListItemText primary={route.name} />
                        </ListItem>
                      </Link>
                    )
                )}
              </List>
            </Grid>
            <SupportContactSocials />
          </Grid>
        </Drawer>
      )}
    </MinerConsumer>
  );
};
export default Sidebar;
