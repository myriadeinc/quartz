import {
  Card,
  CardMedia,
  Container,
  Grid,
  Slider,
  Typography,
} from "@mui/material";

import { Card as BCard } from "react-bootstrap";

import { withStyles } from "@mui/styles";
import Chart from "./Chart";

const PPSSlider = withStyles({
  root: {
    height: 4,
  },
  thumb: {
    height: 18,
    width: 18,
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

export const Analytics = () => {
  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item sm={4}>
        <Card
          style={{
            backgroundImage:
              "url(https://i.ibb.co/h21M3Dr/Triangle-Pattern-1.png)",
            height: "194px",
            color: "white",
            padding: "16px",
            margin: "16px",
          }}
        >
          <Typography variant="h5">Average Hashrate (1hr)</Typography>
          <Typography variant="h3">0.00 H/sec</Typography>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card
          style={{
            backgroundImage: "url(https://i.ibb.co/Tr40bKY/green.png)",
            height: "194px",
            color: "white",
            padding: "16px",
            margin: "16px",
          }}
        >
          <Typography variant="h5">Pool Hashrate</Typography>
          <Typography variant="h3">0.00 H/sec</Typography>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card
          style={{
            backgroundImage:
              "url(https://i.ibb.co/0BGXJ9H/Triangle-Pattern-1.png)",
            height: "194px",
            color: "white",
            padding: "16px",
            margin: "16px",
          }}
        >
          <Typography variant="h5">Referrer Bonus</Typography>
          <Typography variant="h3">0 MC</Typography>
        </Card>
      </Grid>
      <Grid item sm={8} style={{ height: "600px", padding: "16px" }}>
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
      </Grid>
      <Grid item sm={4} style={{ height: "600px", padding: "16px" }}>
        <Card
          style={{
            height: "100%",
            backgroundColor: "#2f3136",
            color: "white",
            padding: "16px",
          }}
        >
          <Typography
            variant="h4"
            style={{ backgroundColor: "#202225", padding: "16px" }}
          >
            Friends
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};
