import {
  Box,
  Grid,
  IconButton,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MinerContext from "renderer/pages/Dashboard";
import config from "renderer/utils/config";
import Chart from "../analytics/Chart";
import play from "../../../../assets/mining/playButton.svg";
import pause from "../../../../assets/mining/pauseButton.svg";

declare var window: any;

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  centerText: {
    textAlign: "center",
  },
  gridItem: {
    padding: "16px",
  },
});

export const Miner = () => {
  const miner = useContext(MinerContext);
  const classes = useStyles();
  const [ratio, setRatio] = useState(0);
  const [cpu, setCpu] = useState("Loading...");
  const [cpuTemp, setCpuTemp] = useState("Loading...");
  const [cpuLoad, setCpuLoad] = useState("Loading...");
  const [mining, setMining] = useState(false);

  useEffect(() => {
    window.electronAPI.registerHandlers(setCpu, setCpuLoad, setCpuTemp);
    window.electronAPI.getCPU();
    window.electronAPI.pollSysInfo();
    setInterval(() => window.electronAPI.pollSysInfo(), 1000 * 5);

    axios
      .get(`${config.miner_metrics_url}/v1/stats/ppsratio`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => setRatio(res.data.ppsRatio));
  }, []);

  const handleMine = () => {
    window.electronAPI.generateMinerConfig(miner.id);

    if (mining) {
      window.electronAPI.stopMiner();
    } else {
      window.electronAPI.startMiner();
    }

    setMining(!mining);
  };

  const handleChange = (_e: any, newValue: number | number[]) => {
    setRatio(newValue as number);
  };

  const submitRatio = (_e: any, newValue: number | number[]) => {
    axios
      .post(
        `${config.miner_metrics_url}/v1/stats/ppsratio`,
        { ppsRatio: newValue },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => setRatio(res.data.ppsRatio));
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        sm={12}
        className={`${classes.centerText} ${classes.gridItem}`}
        style={{
          backgroundColor: "#121212",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          marginBottom: "64px",
        }}
      >
        <IconButton onClick={handleMine} style={{ margin: "32px" }}>
          <img src={mining ? pause : play} />
        </IconButton>
      </Grid>
      <Grid item sm={3} className={`${classes.centerText} ${classes.gridItem}`}>
        <Typography variant="body1">
          For best mining performance / if you are noticing a severe drop in
          hashrate, we recommend restarting your computer and having Myriade
          launch on start-up
        </Typography>
      </Grid>
      <Grid container item sm={6} spacing={4}>
        <Grid
          item
          sm={6}
          className={`${classes.centerText} ${classes.gridItem}`}
        >
          <Typography variant="h3" sx={{ color: "#93ffd8" }}>
            {miner.avgHashrate} H/s
          </Typography>
          <Typography>Current Hashrate (1h avg)</Typography>
        </Grid>
        <Grid
          item
          sm={6}
          className={`${classes.centerText} ${classes.gridItem}`}
        >
          <Typography variant="h3" sx={{ color: "#84DFFF" }}>
            00:00:00
          </Typography>
          <Typography>Current Mining Time</Typography>
        </Grid>
      </Grid>
      <Grid item sm={3}></Grid>
      <Grid item sm={4} className={`${classes.centerText} ${classes.gridItem}`}>
        <Typography variant="h3" sx={{ color: "#FF9036" }}>
          {miner.mcBalance} MC
        </Typography>
        <Typography variant="body1">Total MC Earned</Typography>
      </Grid>
      <Grid item sm={4} className={`${classes.centerText} ${classes.gridItem}`}>
        <Typography variant="h3" sx={{ color: "#347FF8" }}>
          00:00:00:00
        </Typography>
        <Typography variant="body1">Total Mining Time</Typography>
      </Grid>
      <Grid item sm={4} className={`${classes.centerText} ${classes.gridItem}`}>
        <Typography variant="h3" sx={{ color: "#FF9036" }}>
          0
        </Typography>
        <Typography variant="body1">Accepted Shares</Typography>
      </Grid>
      <Grid item sm={12} style={{ margin: "64px 0px" }}>
        <Chart />
      </Grid>
      <Grid item sm={6} className={classes.gridItem}>
        <Paper className={classes.gridItem}>
          <Typography variant="h4">Mining Allocation</Typography>
          <Typography variant="body1">MC - {100 - ratio}%</Typography>
          <Slider
            defaultValue={90}
            step={10}
            marks
            min={0}
            max={100}
            value={ratio}
            onChange={handleChange}
            onChangeCommitted={submitRatio}
          />
          <Typography variant="body1">{ratio}% - XMR</Typography>
        </Paper>
      </Grid>
      <Grid item sm={6} className={classes.gridItem}>
        <Paper className={classes.gridItem}>
          <Typography variant="h4">CPU Stats - {cpu}</Typography>
          <Box width="50%" display="inline-block">
            <Typography variant="h5">{cpuTemp}</Typography>
            <Typography variant="body1">Temperature</Typography>
          </Box>
          <Box width="50%" display="inline-block">
            <Typography variant="h5">{cpuLoad}</Typography>
            <Typography variant="body1">Usage</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
