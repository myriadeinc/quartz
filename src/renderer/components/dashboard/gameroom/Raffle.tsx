import { Card, Grid, Grow, LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IRaffle } from "renderer/interfaces/pages/dashboard";
import monero from "../../../../assets/game-room/monero.svg";

const useStyles = makeStyles({
  
  card: {
    padding: "16px 6px 6px 16px",
    margin: "3vh 2vw 3vh 2vw",
    background: "linear-gradient(#282b30 70%, #36393e 70%)",
    minWidth: "310px",
    minHeight: "100px"
  },
  subtitle: {
    color: "#999999",
    marginBottom: "10px"
  },
  progressStyle: {
    height: "15px",
    borderRadius: 5,
    margin: "30px 0px 5px 0px"
  },
  bodyStyle: {
    fontSize: "0.8rem",
    fontWeight: "300",
  },
  purchaseDetailsStyle: {
    fontWeight: "300",
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  moneroImgStyle: {
    margin: "0px 10px",
    padding: "0vh 0vh 0.05vh 0vh",
    width: "16px",
   
  },
});

interface RaffleProps {
  raffle: IRaffle;
  timeout: number;
}

export const Raffle = (props: RaffleProps) => {
  const classes = useStyles();

  return (
    <Grid item sm={6} md={4} style={{
      marginLeft:"0vw"
    }}>
      <Grow in={true} timeout={props.timeout}>
        <Card className={classes.card}>
          <Typography variant="h5">
            ${props.raffle.public.prizeAmount}USD
          </Typography>
          <Typography 
            className={classes.subtitle}
            variant="body1"
          >
            <img className={classes.moneroImgStyle} src={monero} height="100%" style={{margin: "0px 0.2vw -0.25vh 0px"}} />
            {props.raffle.public.prizeAmount}XMR
          </Typography>
          <Typography
            className={classes.bodyStyle}
            style={{color: "#F78549", marginTop: "40px", fontSize: "1rem"}}
            variant="body1"
           
          >
            {props.raffle.public.title}
          </Typography>
          <Typography
            className={classes.bodyStyle}
            variant="body1"
            
          >
            Ticket Price: {props.raffle.public.entryPrice} MC
          </Typography>
          <LinearProgress 
            className={classes.progressStyle} 
            variant="determinate" value={50} 
          />
          <Typography 
            className={classes.purchaseDetailsStyle}
            variant="caption"
          >
            12345 of 99999 purchased
          </Typography>
        </Card>
      </Grow>
    </Grid>
  );
};
