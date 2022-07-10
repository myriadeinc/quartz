import {
  Button,
  Card,
  Grid,
  Grow,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Card as BCard } from "react-bootstrap";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import blueBg from "../../../../assets/Blue-Box.png";
import greenBg from "../../../../assets/Green-Box.png";
import orangeBg from "../../../../assets/Orange-Box.png";

import Chart from "./Chart";

const useStyles = makeStyles({
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "20vw",
    height: "calc(20vw * 0.5)",
    minWidth: "110px",
    minHeight: "55px",
    padding: "16px 16px",
    margin: "3vh 1vw 10vh 2vw",
    borderRadius: "20px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  cardTitleStyle: {
    fontSize: "1.2vw",
    flexDirection: "column",
    marginBottom: -5,
    marginTop: -10,
    "@media screen and (max-width: 1000px)": {},
  },
  cardSubtitleStyle: {
    fontSize: "2.5vw",
    "@media screen and (max-width: 1000px)": {},
  },
  friendStyle: {
    display: "flex",
    flexDirection: "column",
    height: "10vh",
  },
  buttonStyle: {
    backgroundColor: "#EA5E00",
    color: "#FFFFFF",
    width: "100%",
    ref: "/friends",
    height: "5vh",
    fontSize: "1.2rem",
    fontWeight: "500",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    "&:hover": {
      backgroundColor: "#ea5e00ca",
    },
  },
  chartContainer: {
    display: "flex",
    width: "50vw",
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
  analyticsFriends: {
    flexDirection: "row",
    height: "48vh",
    display: "flex",
    alignSelf: "flex-end",
    margin: "0vw 0vw 0vw 1vw",
  },
});

export const Analytics = () => {
  const [scale, setScale] = useState("1h");
  const classes = useStyles();

  const handleOnChange = (e: React.MouseEvent<unknown>) => {
    const target = e.target as HTMLInputElement;
    setScale(target.value);
  };

  return (
    <MinerConsumer>
      {(miner) => (
        <Grid container item>
          <Grid item sm={4}>
            <Grow in={true}>
              <Card
                style={{ backgroundImage: `url(${blueBg})` }}
                className={classes.cardStyle}
              >
                <Typography className={classes.cardSubtitleStyle}>
                  {miner.avgHashrate} H/sec
                </Typography>
                <Typography className={classes.cardTitleStyle}>
                  Average Hashrate (1hr)
                </Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={500}>
              <Card
                style={{ backgroundImage: `url(${greenBg})` }}
                className={classes.cardStyle}
              >
                <Typography className={classes.cardSubtitleStyle}>
                  0 H/sec
                </Typography>
                <Typography className={classes.cardTitleStyle}>
                  Pool Hashrate
                </Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={1000}>
              <Card
                style={{ backgroundImage: `url(${orangeBg})` }}
                className={classes.cardStyle}
              >
                <Typography className={classes.cardSubtitleStyle}>
                  NaN MC
                </Typography>
                <Typography className={classes.cardTitleStyle}>
                  Total Bonus MC Earned
                </Typography>
              </Card>
            </Grow>
          </Grid>

          <Grid className={classes.analyticsFriends}>
            <Grow in={true} timeout={1500}>
              <BCard
                className={"mt-5 mb-5"}
                style={{
                  color: "white",
                  height: "100%",
                  backgroundColor: "#1A1A1A",
                  width: "51vw",
                  marginRight: "20px",
                }}
              >
                <BCard.Header>
                  <div className={classes.chartContainer}>
                    <div>
                      <Typography
                        style={{
                          fontSize: "2vw",
                          padding: "16px 0px 0px 13px",
                        }}
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
                        onChange={() => handleOnChange}
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
          </Grid>
        </Grid>
      )}
    </MinerConsumer>
  );
};
