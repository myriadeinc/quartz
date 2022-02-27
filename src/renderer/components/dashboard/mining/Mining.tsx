import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Card, CircularProgress, IconButton, Button, Grid, Grow, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Chart from "../analytics/Chart";
import play from "../../../../assets/mining/playButton.svg";
import line from "../../../../assets/mining/line.svg";



const useStyles = makeStyles({
  playBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "7vh",

  },
  
  playButton: {
    display: "flex",
    marginLeft: "30vw",
    width: "20vw",
    height: "20vw",

  },

  playImage: {
    display: "flex",
    paddingLeft: "4vw",
    paddingTop: "0.7vw",
    width: "17.5vw", 
    height: "17.5vw",

  },

  progress: {
    width: "50vw",
    height: "50vw",
  },

  line: {
    display: "flex",
    marginTop: "0.5vh",
    marginLeft: "22.5vw",
    width: "35vw",

  },

  xpCounter: {
    display: "flex",
    marginTop: "0.25vh",
    marginLeft: "29.5vw",
    fontSize: "2.2vw",
    color: "#FFFFFF",
    fontWeight: 600,

  },

  nextBonus: {
    display: "flex",
    marginTop: "0.25vh",
    marginLeft: "35vw",


  },

  nextBonusMiningCredits: {
    display: "flex",
    fontSize: "1.5vw",
    color: "#FFFFFF",

  },

  bonusAmount: {
    display: "flex",
    fontSize: "1.5vw",
    color: "#FF6500",
    marginLeft: "0.3vw",

  },

});


export const Mining = () => {
  const [scale, setScale] = React.useState('1h');
  const classes = useStyles();

  const handleOnChange = (event: React.MouseEvent<unknown>) => {
    setScale(event.target.value)
  }
  
  return (

    <Grid
      container
      item
    >
      
      <Grid
      style={{
        height: "95vh",
        width: "100%"
      }}
      >
        <Grid className={classes.playBox}>
        <IconButton className={classes.playButton}>
          <img src={play} className={classes.playImage}/> 
        </IconButton>
        </Grid>

        <Grid>
        <img src={line} className={classes.line}/>
        </Grid>

        <Grid>
        <Typography className={classes.xpCounter}>

                694 XP Until Level 34
                
              </Typography>
          </Grid>

          <Grid className={classes.nextBonus}>
          <Typography display="inline" className={classes.nextBonusMiningCredits}>Next Bonus: </Typography>
          <Typography display="inline" className={classes.bonusAmount}> 21MC</Typography>
          </Grid>





      </Grid>

      <Grid
      style={{
        height: "100vh",
        backgroundColor: "#282b30",
        width: "100vw"
      }}
      >
        Bottom Box
      </Grid>
    </Grid>

    
  );
  
};
