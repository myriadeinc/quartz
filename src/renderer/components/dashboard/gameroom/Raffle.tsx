import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import makeStyles from "@mui/styles/makeStyles";
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
    <Grid item xs={12} sm={8} md={6}>
      <Grow in={true} timeout={props.timeout}>
        <Card
          className={classes.card}
          sx={{ width: { xs: "100%", sm: "100%", md: "inherit" } }}
        >
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
