import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import MinerContext from "renderer/pages/Dashboard";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  centerText: {
    textAlign: "center",
  },
});

export const Miner = () => {
  const miner = useContext(MinerContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item sm={12} className={classes.centerText}>
        <Typography variant="body1">Button</Typography>
      </Grid>
      <Grid item sm={3} className={classes.centerText}>
        <Typography variant="body1">
          For best mining performance / if you are noticing a severe drop in
          hashrate, we recommend restarting your computer and having Myriade
          launch on start-up
        </Typography>
      </Grid>
      <Grid container item sm={6} spacing={4}>
        <Grid item sm={6}>
          <Typography variant="h3" sx={{ color: "#93ffd8" }}>
            {miner.avgHashrate} H/s
          </Typography>
          <Typography>Current Hashrate (1h avg)</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3" sx={{ color: "#93ffd8" }}>
            {miner.avgHashrate} H/s
          </Typography>
          <Typography>Current Hashrate (1h avg)</Typography>
        </Grid>
      </Grid>
      <Grid item sm={3}></Grid>
    </Grid>
  );
};
