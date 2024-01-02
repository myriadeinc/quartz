import {
  Avatar,
  Drawer,
  Grid,
  List,
  Typography,
  ListItemAvatar,
  ListItemText,
  ListItem,
  Card,
  Divider,
} from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { dashboardRoutes } from "renderer/utils/dashboard";

// ... (import statements remain unchanged)

// Initial miner level

let minerLevel = "33";

// Styles using MUI makeStyles
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
  },
  avatarContainer: {
    position: 'relative',
    display: 'inline-block',
    
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(2),
    fontFamily: 'Poppins, sans-serif',
    
  },
  statusCircle: {
    position: 'absolute',
    top: '0px', // Adjust positioning as needed
    left: '0px', // Adjust positioning as needed
    width: '88px', // Set the desired inner radius * 2
    height: '88px', // Set the desired inner radius * 2
    borderRadius: '50%',
    backgroundColor: 'transparent', // Set the outer color
    border: '4px solid #414E66', // Set the ring thickness and color
  },
  minerDetails: {
    marginTop: theme.spacing(3),
    fontFamily: 'Poppins, sans-serif',
  },
  level: {
    fontSize: theme.typography.pxToRem(16),
    color: "#EAEAEA",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontFamily: 'Poppins, sans-serif',
  },
  email: {
    fontSize: theme.typography.pxToRem(14),
    color: "#8C8C8C",
    marginTop: theme.spacing(2),
    fontFamily: 'Poppins, sans-serif',
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
export const Sidebar = (props: SidebarProps) => {
  const classes = useStyles();
  const theme = useTheme();

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
    {/* Miner Avatar with Status Circle */}
    <div className={classes.avatarContainer} style={{ display: 'flex', marginLeft: '20px' }}>
      <div className={classes.statusCircle}></div>
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/5LC9qKh/Profile-Image-2.png"
        style={{ backgroundColor: '#0E1B38', width: '80px', height: '80px', marginLeft: '8.25px', marginTop: '8px' }}
      />
    </div>
  </Grid>

  <Grid item sm={5} className={classes.minerDetails} style={{ marginLeft: '70px', marginTop: '5px', marginRight: '70px' }}>
    {/* Miner Details */}
    <Typography variant="h5" fontFamily="Poppins, sans-serif">
      {`${miner.name} #${miner.shortId}`}
    </Typography>

    <Typography className={classes.level} fontFamily="Poppins, sans-serif" style={{ marginLeft: '8px', marginTop: '5px' }}>
        <span style={{ verticalAlign: 'bottom', display: 'inline-block', marginBottom: '-5px' }}>
      <img src="https://i.ibb.co/n0MGM36/Copper-Left.png" alt="Level Icon Left" style={{ width: '32px', height: '32px', marginRight: '8px'}} />
         </span>
  {`Level ${minerLevel}`}
         <span style={{ verticalAlign: 'bottom', display: 'inline-block', marginBottom: '-5px' }}>
      <img src="https://i.ibb.co/t3vcKVy/Copper-Right.png" alt="Level Icon Right" style={{ width: '32px', height: '32px', marginLeft: '8px'}} />
          </span>
</Typography>


    <Typography className={classes.email} fontFamily="Poppins, sans-serif" style={{ margin: '5px 0px' }}>
      {miner.email}
    </Typography>
  </Grid>
</Grid>



<Grid item sm={12} style={{ marginBottom: "-5px" }} className={classes.grid} >
  {/* Mining Card */}
  <Card
  className={classes.miningCard}
  style={{ width: '366px', height: '144px', padding: '0px', backgroundColor: '#0F141F', display: 'flex', backgroundImage: 'none', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}
>

<div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px', marginLeft: "80px", marginTop: "18px" }}>

    <img 
      src="https://i.ibb.co/RSRPJbn/MC-Icon.png" 
      alt="Mining Credits Icon" 
      style={{ width: '44px', height: '44px', marginBottom: '10px' }} 
    />
     <div style={{ display: 'flex', alignItems: 'flex-start',  marginBottom: '10px', marginLeft: "10px", flexDirection: 'column',}}>
    <Typography fontFamily="Poppins, sans-serif" style={{ textAlign: 'left' }}>
      Mining Credits: 
    </Typography>
    <Typography fontFamily="Poppins, sans-serif" style={{ textAlign: 'left', color: "#8C8C8C", fontSize: "13px" }}>
       {miner.mcBalance}
    </Typography>
    </div>

    <img 
      src="https://i.ibb.co/JC43vyR/Refresh.png" 
      alt="Refresh Icon" 
      style={{ width: '18px', height: '18px', marginLeft: '90px', marginTop: '-6px' }} 
    />
</div>


  <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: "80px"}}>
    <img 
      src="https://i.ibb.co/ypvqR1R/Monero-Icon.png" 
      alt="Monero Balance Icon" 
      style={{ width: '44px', height: '44px', marginRight: '10px' }} 
    />
    <div style={{ display: 'flex', alignItems: 'flex-start',  marginBottom: '10px', flexDirection: 'column',}}>
    <Typography fontFamily="Poppins, sans-serif" style={{ textAlign: 'left' }}>
      Monero Balance:
    </Typography>
    <Typography fontFamily="Poppins, sans-serif" style={{ textAlign: 'left', color: "#8C8C8C", fontSize: "13px" }}>
      {miner.xmrBalance}
    </Typography>
  </div>
  </div>
</Card>
</Grid>






<Grid item sm={8} style={{ marginLeft: '20px', marginBottom: "50px", marginTop: "3px" }}>
  {/* Sidebar Navigation Links */}
  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: 18,  color: "#8C8C8C", marginBottom: "-17px" }}>
  MAIN MENU
</Typography>
<List style={{ marginTop: "10px"}}>
    {dashboardRoutes.map(
      (route) =>
        route.visible && (
          <Link
            to={`${props.path}${route.ref}`}
            style={{ textDecoration: "none", color: "#8C8C8C" }}
            key={route.name} // Add a unique key for each Link
          >
            <ListItem button
            selected={window.location.pathname === `${props.path}${route.ref}`}>
              <ListItemAvatar style={{ marginLeft: '-15px'}}>
                <Avatar src={route.icon} alt={route.name} />
              </ListItemAvatar>
              <ListItemText primary={route.name} />
            </ListItem>
          </Link>
        )
    )}
  </List>
</Grid>

<Grid item sm={12} style={{ marginLeft: '20px', marginTop: "0px" }}>
  {/* Contact Support */}
  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: 18, color: "#8C8C8C" }}>
    CONTACT SUPPORT
  </Typography>

  <div style={{ display: 'flex', gap: '15px' }}>
  <a href="https://discord.gg/J9Pn7Dk" target="_blank" rel="noopener noreferrer">
    <Avatar
      src="https://i.ibb.co/FYZT2r1/Discord.png"
      alt="Discord"
      sx={{ width: 44, height: 44 }}
    />
  </a>
  <a href="https://twitter.com/MyriadeInc" target="_blank" rel="noopener noreferrer">
    <Avatar
      src="https://i.ibb.co/85Mz133/Twitter.png"
      alt="Twitter"
      sx={{ width: 44, height: 44 }}
    />
  </a>
  <a href="mailto:support@myriade.io" target="_blank" rel="noopener noreferrer">
    <Avatar
      src="https://i.ibb.co/wKJsyYJ/Mail.png"
      alt="Mail"
      sx={{ width: 44, height: 44 }}
    />
  </a>
   
  </div>

</Grid>


          </Grid>
        </Drawer>
      )}
    </MinerConsumer>
  );
};
