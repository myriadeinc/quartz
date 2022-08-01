import { Card, Grid, Grow, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { MinerConsumer } from "renderer/pages/Dashboard";
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
        <Grid container>
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
          <Chart />
        </Grid>
      )}
    </MinerConsumer>
  );
};
