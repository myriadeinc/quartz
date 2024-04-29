import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";
// import { SupportContactSocials } from "../ContactSupportSocialHandles";
import { Box } from "@mui/material";
import { UserProfile } from "../organisms/UserProfile";
import { MiningCreditCard } from "../components/Dashboard/MiningCreditCard";
import { min } from "lodash";
import { SidebarMainMenu } from "../components/Dashboard/MainMenu";
import { SupportContactSocials } from "../ContactSupportSocialHandles";
import { MainMenuItem } from "../molecules/Settings-I/MainMenuItem";
import { useState } from "react";
import { SupportSocialHandles } from "../organisms/SupportSocialHandles";

let minerLevel = "33";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
    paddingLeft: ".5rem",
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
    top: "0px",
    left: "0px",
    width: "88px",
    height: "88px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "4px solid #414E66",
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
    height: theme.spacing(18),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

interface SidebarProps {
  path: string;
}
let currentIndex;
const Sidebar = (props: SidebarProps) => {
  const classes = useStyles();
  const [iconState, setIconState] = useState({
    isHovered: false,
    isSelected: false,
  });

  const handleIconInteraction = (
    action: "hover" | "click",
    value: boolean,
    index: number
  ) => {
    if (action === "hover") {
      setIconState({ ...iconState, isHovered: value });
    } else if (action === "click") {
      console.log("currentIndex", index, currentIndex);
      index === currentIndex
        ? setIconState({ ...iconState, isSelected: true })
        : setIconState({ ...iconState, isSelected: false });
      console.log("iconState", iconState);
    }
  };

  return (
    <MinerConsumer>
      {(miner) => (
        <>
          <Drawer
            className="asdfsadfasdfsadf"
            sx={{
              width: "406px",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: "406px",
                boxSizing: "border-box",
                backgroundColor: "#080A0F",
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
              sx={{
                margin: "0",
                width: "96%",
              }}
              className={classes.grid}
              height={"100%"}
            >
              <Box
                alignSelf={"flex-start"}
                className="asdfsadfasdfsadf"
                sx={{ width: "90%", paddingLeft: "20px" }}
              >
                <UserProfile
                  minerName={`${miner.name} #${miner.shortId}`}
                  minerLevel={minerLevel}
                  minerEmail={miner.email}
                />
                <Box sx={{ paddingTop: "32px" }}>
                  <MiningCreditCard
                    moneroBalance={miner.xmrBalance}
                    minerBalance={miner.mcBalance}
                  />
                </Box>
                <Box>{/* <SidebarMainMenu propsValue={props} /> */}</Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column" }}
                  className={classes.grid}
                >
                  <Grid
                    item
                    sm={12}
                    style={{
                      marginLeft: "8px",
                      marginBottom: "50px",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{
                        fontSize: 18,
                        color: "#8C8C8C",
                        marginBottom: "8px",
                      }}
                    >
                      MAIN MENU
                    </Typography>
                    <List
                      style={{
                        gap: "8px",
                        display: "flex",
                        flexDirection: "column",
                        padding: "0",
                      }}
                    >
                      {dashboardRoutes.map(
                        (route, i) =>
                          route.visible && (
                            <Link
                              to={`${props.path}${route.ref}`}
                              style={{
                                textDecoration: "none",
                                color: "#8C8C8C",
                              }}
                              key={route.name}
                            >
                              <ListItem
                                button
                                onMouseEnter={() => {
                                  handleIconInteraction("hover", true);
                                  currentIndex = i;
                                }}
                                onMouseLeave={() => {
                                  handleIconInteraction("hover", false);
                                  currentIndex = null;
                                }}
                                onClick={() => {
                                  handleIconInteraction("click", true, i);
                                  currentIndex = i;
                                }}
                                selected={
                                  window.location.pathname ===
                                  `${props.path}${route.ref}`
                                }
                                sx={{
                                  maxHeight: "44px",
                                  padding: "0px !important",
                                  "&:hover": {
                                    color: "#red",
                                  },
                                }}
                              >
                                <MainMenuItem
                                  item={route.name}
                                  MenuIcon={route.Icon}
                                  state={iconState}
                                  currentIndex={currentIndex}
                                  index={i}
                                />
                              </ListItem>
                            </Link>
                          )
                      )}
                    </List>
                  </Grid>
                </Box>
              </Box>
              <SupportSocialHandles />
              {/* <SupportContactSocials /> */}
            </Grid>
          </Drawer>
        </>
      )}
    </MinerConsumer>
  );
};
export default Sidebar;
