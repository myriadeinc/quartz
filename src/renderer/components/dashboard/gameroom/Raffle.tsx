import { Card, Grid, Grow, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IRaffle } from "renderer/interfaces/pages/dashboard";

const useStyles = makeStyles({
  card: {
    padding: "16px",
    margin: "16px",
    backgroundColor: "#202225",
  },
});

interface RaffleProps {
  raffle: IRaffle;
  timeout: number;
}

export const Raffle = (props: RaffleProps) => {
  const classes = useStyles();

  return (
    <Grid item sm={6} md={4}>
      <Grow in={true} timeout={props.timeout}>
        <Card className={classes.card}>
          <Typography>{props.raffle.public.prizeAmount}</Typography>
          <Typography>{props.raffle.public.prizeAmount}</Typography>
          <Typography>{props.raffle.public.title}</Typography>
          <Typography>
            Ticket Price: {props.raffle.public.entryPrice} MC
          </Typography>
        </Card>
      </Grow>
    </Grid>
  );
};
