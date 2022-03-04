import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Card, CircularProgress, IconButton, Button, Grid, Grow, MenuItem, Select, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import Chart from "../analytics/Chart";
import { Card as BCard } from "react-bootstrap";
import { ViewColumn } from "@mui/icons-material";
import top from "../../../../assets/referrals/topBar.svg";
import info from "../../../../assets/referrals/infoChart.svg";
import clipboard from "../../../../assets/referrals/clipboard.svg";

const useStyles = makeStyles({

  topStyle: { 

    marginTop: "3vh",
    marginBottom: "2vh",
    width: "80vw",
    height: "30vh",
  
  
  
    
  },
  
  referralTitle: { 
    marginLeft: "2vw",
    marginTop: "2vh",
    order: 1,
    width: "45vw",
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "1.5vw",
  
  
  
    
  },



infoStyle: { 
  marginLeft: "54vw",
  marginTop: "2vh",
  order: 2,
  width: "25vw",



  
},

referralCodeCard: { 
  marginLeft: "1.5vw",
  marginTop: "-20vw",
  
  
},


referralCodeTitle: { 
  color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "1.8vw",


  
},


referralExplanation: { 
  color: "#FFFFFF",
  marginLeft: "1vw",
  marginTop: "1.5vh",
    fontSize: "1.2vw",
  width: "45vw",


  
},

referralExample: { 
  color: "#D4D4D4",
  marginLeft: "1.8vw",
  marginTop: "1.5vh",
    fontSize: "1vw",
  width: "25vw",


  
},

referralCode: { 
  marginLeft: "1vw",
  color: "#E58525",
    fontSize: "1.5vw",


  
},

copyCode: {
  fontSize: "1.2vw",
  marginTop: "6vh",
  marginLeft: "20vw",
  textAlign: "center",
  fontWeight: 700,
  width: "15vw",
  height: "5vh",
  
},

numberCard: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  marginTop: "17vh",
  marginLeft: "3vw",
  marginRight: "1vw",
  width: "20vw",
  height: "3vh",
  zIndex: 2,

},

number: {
  fontSize: "3vw",
  textAlign: "center",
  fontWeight: 700
},

numberTitle: {
  fontSize: "1.2vw",
  textAlign: "center",
  color: "#FFFFFF",
},

earnedCard: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  marginTop: "-3vh",
  marginLeft: "20vw",
  width: "20vw",
  height: "3vh",
  zIndex: 2,

},

earnedMc: {
  fontSize: "3vw",
  textAlign: "center",
  fontWeight: 700
},

earnedTitle: {
  fontSize: "1.2vw",
  textAlign: "center",
  color: "#FFFFFF",
},


});





export const Referrals = () => {
    const classes = useStyles();
  return (
    <Grid
      container
      item
    >
      <Grid
      item
      style={{
        height: "38vh",
        width: "100%",
        backgroundColor: "#262731"
      }}
      >
          <img className={classes.topStyle} src={top}   />
       
          
      </Grid>
      <Grid >
      
      <img className={classes.infoStyle} src={info}   />
      </Grid>

      <Grid className={classes.referralCodeCard}>
      <Typography display="inline" className={classes.referralCodeTitle}>
                  Share this code with your friends:
                </Typography>
              
     
      
      <Typography display="inline" className={classes.referralCode}>
                  myriade.io/myreferralcode
                </Typography>

       <Typography  className={classes.referralExplanation}>
                  Once your friends sign up with your referral code and start mining for MC, you will earn a comission that comes out of Myriades' 10% fee.  
                  The higher level your friends get to, the more of our fee you will earn. 
                </Typography>

                <Typography  className={classes.referralExample}>
                E.x. If your friend is Silver tier and mines 100MC, you will earn 1MC just for referring them.
                </Typography>

                <Button variant="contained" className={classes.copyCode}>Copy Code</Button>


  








                <Grid className={classes.numberCard}>
          <Typography className={classes.number} style={{color: "#A4FF5C"}}>23</Typography>
          <Typography className={classes.numberTitle} >Friends Referred </Typography>
          </Grid>



          <Grid className={classes.earnedCard} >
          <Typography className={classes.earnedMc} style={{color: "#A4FF5C"}}>564126 MC</Typography>
          <Typography className={classes.earnedTitle} >Referral MC </Typography>
          </Grid>

                



         </Grid>
      
      
    </Grid>
  );
};
