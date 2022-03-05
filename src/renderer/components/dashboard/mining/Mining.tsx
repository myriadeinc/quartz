import { useState } from "react";
import * as React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  Card,
  CircularProgress,
  IconButton,
  Button,
  Grid,
  Grow,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Chart from "../analytics/Chart";
import { Card as BCard } from "react-bootstrap";
import play from "../../../../assets/mining/playButton.svg";
import line from "../../../../assets/mining/line.svg";
import { ViewColumn } from "@mui/icons-material";

declare global {
  interface Window {
    electronAPI: any;
  }
}

const useStyles = makeStyles({
  playBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2vh",
    zIndex: 2,
  },

  playButton: {
    display: "flex",
    marginLeft: "31vw",
    width: "20vw",
    height: "20vw",
    zIndex: 2,
  },

  playImage: {
    display: "flex",
    paddingLeft: "4vw",
    paddingTop: "0.7vw",
    width: "17.5vw",
    height: "17.5vw",
    zIndex: 99999,
  },

  progress: {
    marginTop: "1vh",
    width: "2vh",
    height: "2vh",
    position: "relative",
    zIndex: 1,
  },

  line: {
    display: "flex",
    marginTop: "-0vh",
    marginLeft: "23.5vw",
    width: "35vw",
    zIndex: 2,
  },

  currentLevelTitle: {
    marginTop: "-5vh",
    marginLeft: "32vw",
    fontSize: "1.5vw",
    color: "#FFFFFF",
  },

  currentLevel: {
    marginTop: "0.25vh",
    marginLeft: "0.5vw",
    marginBottom: "-0.5",
    fontSize: "1.8vw",
    color: "#955111",
    fontWeight: 600,
  },

  xpCounter: {
    display: "flex",
    marginTop: "0.25vh",
    marginLeft: "29.5vw",
    fontSize: "2.2vw",
    color: "#FFFFFF",
    fontWeight: 600,
    zIndex: 2,
  },

  nextBonus: {
    display: "flex",
    marginTop: "0.25vh",
    marginLeft: "35vw",
    zIndex: 2,
  },

  nextBonusMiningCredits: {
    display: "flex",
    fontSize: "1.5vw",
    color: "#FFFFFF",
    zIndex: 2,
  },

  bonusAmount: {
    display: "flex",
    fontSize: "1.5vw",
    color: "#FF6500",
    marginLeft: "0.3vw",
    zIndex: 2,
  },

  hourestimates: {
    display: "flex",
    marginTop: "2.5vh",
    marginLeft: "35.2vw",
    zIndex: 2,
  },

  hourEstimate: {
    display: "flex",
    fontSize: "1.1vw",
    textAlign: "center",
    width: "3vw",
    color: "#FF6500",
    zIndex: 2,
  },

  hourEstimateNumber: {
    display: "flex",
    fontSize: "1.1vw",
    color: "#FFFFFF",
    marginLeft: "2.7vw",
    zIndex: 2,
  },

  dayestimates: {
    display: "flex",
    marginTop: "0.25vh",
    marginLeft: "35.2vw",
    zIndex: 2,
  },

  dayEstimate: {
    display: "flex",
    fontSize: "1.1vw",
    width: "3vw",
    textAlign: "center",
    color: "#FF6500",
    zIndex: 2,
  },

  dayEstimateNumber: {
    display: "flex",
    fontSize: "1.1vw",
    color: "#FFFFFF",
    marginLeft: "2.7vw",
    zIndex: 2,
  },

  lineEstimate: {
    display: "flex",
    marginTop: "0.5vh",
    marginLeft: "33vw",
    width: "17vw",
    zIndex: 2,
  },

  hashrateCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: "17vh",
    marginLeft: "27vw",
    marginRight: "1vw",
    width: "17%",
    height: "3vh",
    zIndex: 2,
  },

  hashrate: {
    fontSize: "3vw",
    textAlign: "center",
    fontWeight: 700,
  },

  hashrateTitle: {
    fontSize: "1.2vw",
    textAlign: "center",
    color: "#FFFFFF",
  },

  miningTimeCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginTop: "-3vh",
    marginLeft: "42vw",
    marginRight: "1vw",
    width: "17%",
    height: "3vh",
    zIndex: 2,
  },

  miningTime: {
    fontSize: "3vw",
    textAlign: "center",
    fontWeight: 700,
  },

  miningTimeTitle: {
    fontSize: "1.2vw",
    textAlign: "center",
    color: "#FFFFFF",
  },

  analyticsCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: "4vh",
    marginLeft: "1vw",
    marginRight: "1vw",
    marginBottom: "2.5vh",
    width: "17%",
    height: "3vh",
    zIndex: 2,
  },

  analytics: {
    fontSize: "2.4vw",
    textAlign: "center",
    fontWeight: 700,
  },

  analyticsTitle: {
    fontSize: "1.2vw",
    textAlign: "center",
    color: "#FFFFFF",
  },

  chartContainer: {
    display: "flex",
    width: "80vw",
    marginLeft: "0vw",
    backgroundColor: "#1e2124",
    justifyContent: "space-between",
    fontSize: "5rem",
  },
  selectContainer: {
    flexDirection: "column",
    height: "100%",
    display: "flex",
    alignSelf: "flex-end",
  },
  selectStyle: {
    height: "1.8rem",
    width: "4.5rem",
    fontSize: "1 rem",
  },
});

export const Mining = () => {
  const [scale, setScale] = React.useState("1h");
  const [mining, setMining] = useState(false);

  const classes = useStyles();

  const handleMine = () => {
    if (mining) {
      window.electronAPI.stopMiner();
    } else {
      window.electronAPI.startMiner();
    }
    setMining(!mining);
  };
  const handleOnChange = (event: React.MouseEvent<unknown>) => {
    setScale(event.target.value);
  };

  return (
    <Grid container item>
      <Grid
        item
        style={{
          height: "94vh",
          width: "100%",
        }}
      >
        <Grid className={classes.playBox}>
          <IconButton className={classes.playButton}>
            <img src={play} className={classes.playImage} />
          </IconButton>
        </Grid>

        <CircularProgress
          variant="determinate"
          value={85}
          thickness={0.5}
          style={{
            width: "42vw",
            color: "#EF7C00",
            marginLeft: "0vw",
            marginTop: "-1.5vh",
          }}
        ></CircularProgress>

        <Grid>
          <img src={line} className={classes.line} />
        </Grid>

        <Grid>
          <Typography display="inline" className={classes.currentLevelTitle}>
            Current Mining Level:
          </Typography>
          <Typography display="inline" className={classes.currentLevel}>
            33
          </Typography>

          <Typography className={classes.xpCounter}>
            694 XP Until Level 34
          </Typography>
        </Grid>

        <Grid className={classes.nextBonus}>
          <Typography
            display="inline"
            className={classes.nextBonusMiningCredits}
          >
            Next Bonus:{" "}
          </Typography>
          <Typography display="inline" className={classes.bonusAmount}>
            {" "}
            21MC
          </Typography>
        </Grid>

        <Grid className={classes.hourestimates}>
          <Typography display="inline" className={classes.hourEstimate}>
            0MC
          </Typography>
          <Typography display="inline" className={classes.hourEstimateNumber}>
            1H MC estimate
          </Typography>
        </Grid>

        <Grid>
          <img src={line} className={classes.lineEstimate} />
        </Grid>

        <Grid className={classes.dayestimates}>
          <Typography display="inline" className={classes.dayEstimate}>
            0MC
          </Typography>
          <Typography display="inline" className={classes.dayEstimateNumber}>
            1D MC estimate{" "}
          </Typography>
        </Grid>

        <Grid className={classes.hashrateCard}>
          <Typography className={classes.hashrate} style={{ color: "#84DFFF" }}>
            8304 H/s
          </Typography>
          <Typography className={classes.hashrateTitle}>
            Current Hashrate{" "}
          </Typography>
        </Grid>

        <Grid className={classes.miningTimeCard}>
          <Typography
            className={classes.miningTime}
            style={{ color: "#93FFD8" }}
          >
            02:51:33
          </Typography>
          <Typography className={classes.miningTimeTitle}>
            Current Mining Time{" "}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        style={{
          height: "120vh",
          backgroundColor: "#282b30",
          width: "100vw",
        }}
      >
        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            7358106MC
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total MC Earned{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#347FF8" }}
          >
            923415MC
          </Typography>
          <Typography className={classes.analyticsTitle}>
            MC Earned from Referrals{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            0.8%
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Mining Bonus from Friends{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            7358106MC
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total MC Earned{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            7358106MC
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total MC Earned{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#347FF8" }}
          >
            923415MC
          </Typography>
          <Typography className={classes.analyticsTitle}>
            MC Earned from Referrals{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            +0.8%
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Mining Bonus from Friends{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#FF0055" }}
          >
            323216588
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Accepted Shares (XP){" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#347FF8" }}
          >
            11:22:51:33
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total Mining Time{" "}
          </Typography>
        </Grid>

        <Grow in={true} timeout={1500}>
          <BCard
            className={"mt-5 mb-5"}
            style={{
              color: "white",
              height: "35vh",
              backgroundColor: "#2f3136",
              width: "80vw",
              marginTop: "-43vh",
            }}
          >
            <BCard.Header>
              <div className={classes.chartContainer}>
                <div>
                  <Typography
                    style={{ fontSize: "2vw", padding: "16px 0px 0px 13px" }}
                  >
                    Historical Metrics
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "1vw",
                      paddingLeft: "16px",
                      paddingBottom: "10px",
                    }}
                  >
                    See how your hashrate changes over time.
                  </Typography>
                </div>
                <div className={classes.selectContainer}>
                  <Select
                    className={classes.selectStyle}
                    value={scale}
                    onChange={handleOnChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={"1h"}>1H</MenuItem>
                    <MenuItem value={"1d"}>1D</MenuItem>
                    <MenuItem value={"1w"}>1W</MenuItem>
                    <MenuItem value={"1m"}>1M</MenuItem>
                  </Select>
                </div>
              </div>
            </BCard.Header>
            <BCard.Body style={{ height: "100%", width: "100%" }}>
              <Chart />
            </BCard.Body>
          </BCard>
        </Grow>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#39C298" }}
          >
            0.8%
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Mining Bonus from Friends{" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#FF0055" }}
          >
            323216588
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Accepted Shares (XP){" "}
          </Typography>
        </Grid>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#347FF8" }}
          >
            11:22:51:33
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total Mining Time{" "}
          </Typography>
        </Grid>

        <Grow in={true} timeout={1500}>
          <BCard
            className={"mt-5 mb-5"}
            style={{
              color: "white",
              height: "35vh",
              backgroundColor: "#2f3136",
              width: "80vw",
              marginTop: "-43vh",
            }}
          >
            <BCard.Header>
              <div className={classes.chartContainer}>
                <div>
                  <Typography
                    style={{ fontSize: "2vw", padding: "16px 0px 0px 13px" }}
                  >
                    Historical Metrics
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: "1vw",
                      paddingLeft: "16px",
                      paddingBottom: "10px",
                    }}
                  >
                    See how your hashrate changes over time.
                  </Typography>
                </div>
                <div className={classes.selectContainer}>
                  <Select
                    className={classes.selectStyle}
                    value={scale}
                    onChange={handleOnChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={"1h"}>1H</MenuItem>
                    <MenuItem value={"1d"}>1D</MenuItem>
                    <MenuItem value={"1w"}>1W</MenuItem>
                    <MenuItem value={"1m"}>1M</MenuItem>
                  </Select>
                </div>
              </div>
            </BCard.Header>
            <BCard.Body style={{ height: "100%", width: "100%" }}>
              <Chart />
            </BCard.Body>
          </BCard>
        </Grow>

        <Grid className={classes.analyticsCard}>
          <Typography
            className={classes.analytics}
            style={{ color: "#347FF8" }}
          >
            11:22:51:33
          </Typography>
          <Typography className={classes.analyticsTitle}>
            Total Mining Time{" "}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
