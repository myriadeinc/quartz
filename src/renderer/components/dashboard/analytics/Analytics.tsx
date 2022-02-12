import { Card, Grid, Grow, Typography } from "@mui/material";

import { Card as BCard } from "react-bootstrap";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";

import Chart from "./Chart";

export const Analytics = () => {
  return (
    <MinerConsumer>
      {(miner) => (
        <Grid
          container
          item
          style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item sm={4}>
            <Grow in={true}>
              <Card
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/h21M3Dr/Triangle-Pattern-1.png)",
                  height: "194px",
                  padding: "16px",
                  margin: "16px",
                }}
              >
                <Typography variant="h5">Average Hashrate (1hr)</Typography>
                <Typography variant="h3">{miner.avgHashrate} H/sec</Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={500}>
              <Card
                style={{
                  backgroundImage: "url(https://i.ibb.co/Tr40bKY/green.png)",
                  height: "194px",
                  padding: "16px",
                  margin: "16px",
                }}
              >
                <Typography variant="h5">Pool Hashrate</Typography>
                <Typography variant="h3">0.00 H/sec</Typography>
              </Card>
            </Grow>
          </Grid>
          <Grid item sm={4}>
            <Grow in={true} timeout={1000}>
              <Card
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/0BGXJ9H/Triangle-Pattern-1.png)",
                  height: "194px",
                  padding: "16px",
                  margin: "16px",
                }}
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
                  <Typography variant="h3" style={{ padding: "16px" }}>
                    Historical Metrics
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ paddingLeft: "16px", paddingBottom: "16px" }}
                  >
                    See how your hashrate changes over time.
                  </Typography>
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
              </div>
            </Grow>
          </Grid>
        </Grid>
      )}
    </MinerConsumer>
  );
};
