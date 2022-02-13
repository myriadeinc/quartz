import * as React from "react";
import { Card, Button, Grid, Grow, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Card as BCard } from "react-bootstrap";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import Chart from "./Chart";
import blueBg from "../../../../assets/Blue-Box.png";
import greenBg from "../../../../assets/Green-Box.png";
import orangeBg from "../../../../assets/Orange-Box.png";
import { ConstructionOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "194px",
    padding: "16px",
    margin: "16px",
    borderRadius: "20px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
  buttonStyle: {
    backgroundColor: "#EA5E00",
    color: "#FFFFFF",
    width: "100%",
    height: "3.2rem",
    fontSize: "1.2rem",
    fontWeight: "500",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    '&:hover': {
      backgroundColor: "#ea5e00ca",
    }
  },
  chartContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  selectContainer: {
    height: "100%",
    display: "flex",
    alignSelf: "flex-end",
  },
  selectStyle: {
    height: "3rem",
  }
});

export const Analytics = () => {
  const [scale, setScale] = React.useState('1h');
  const classes = useStyles();

  const handleOnChange = (event: React.MouseEvent<unknown>) => {
    setScale(event.target.value)
  }

  return (
    <MinerConsumer>
      {(miner) => (
        <Grid
          container
          item
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item sm={4}>
            <Grow in={true}>
              <Card
                style={{ backgroundImage: `url(${blueBg})` }}
                className={classes.cardStyle}
              >
                <Typography variant="h5">Average Hashrate (1hr)</Typography>
                <Typography variant="h3">0 H/sec</Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={500}>
              <Card
                style={{ backgroundImage: `url(${greenBg})` }}
                className={classes.cardStyle}
              >
                <Typography variant="h5">Pool Hashrate</Typography>
                <Typography variant="h3">0 H/sec</Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={1000}>
              <Card
                style={{ backgroundImage: `url(${orangeBg})` }}
                className={classes.cardStyle}
              >
                <Typography variant="h5">Referrer Bonus</Typography>
                <Typography variant="h3">0 MC</Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={8} style={{ height: "600px", padding: "16px" }}>
            <Grow in={true} timeout={1500}>
              <BCard
                className={"mt-5 mb-5"}
                style={{
                  color: "white",
                  height: "55vh",
                  width: "100%",
                  backgroundColor: "#202225",
                }}
              >
                <BCard.Header>
                  <div className={classes.chartContainer}>
                    <div>
                      <Typography variant="h3" style={{ padding: "16px" }}>
                        Historical Metrics
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ paddingLeft: "16px", paddingBottom: "16px" }}
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
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value={"1h"}>1H</MenuItem>
                        <MenuItem value={"1d"}>1D</MenuItem>
                        <MenuItem value={"1w"}>1W</MenuItem>
                        <MenuItem value={"1m"}>1M</MenuItem>
                      </Select>
                    </div>
                  </div>
                </BCard.Header>
                <BCard.Body style={{ height: "100%" }}>
                  <Chart />
                </BCard.Body>
              </BCard>
            </Grow>
          </Grid>
          <Grid item sm={4} style={{ height: "600px", padding: "16px" }}>
            <Grow in={true} timeout={2000}>
              <div style={{ height: "100%" }}>
                <FriendMenu />
                <Button className={classes.buttonStyle} variant="contained">
                  View More
                </Button>
              </div>
            </Grow>
          </Grid>
        </Grid>
      )}
    </MinerConsumer>
  );
};
