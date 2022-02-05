import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  IHistory,
  IRaffle,
  IRawHistory,
} from "renderer/interfaces/pages/dashboard";
import config from "renderer/utils/config";
import { History } from "./History";
import { Raffle } from "./Raffle";

const useStyles = makeStyles({
  grid: {
    padding: "16px",
    color: "white",
  },
});

export const GameRoom = () => {
  const [raffles, setRaffles] = useState([] as IRaffle[]);
  const [history, setHistory] = useState([] as IHistory[]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${config.miner_metrics_url}/v1/eventContent/active`)
      .then(({ data }) => {
        setRaffles(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // return this.setState({
        //   error:
        //     "Unable to fetch your data, please check your connection, your login and try again later",
        // });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${config.miner_metrics_url}/v1/credits/allEvents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        buildHistory(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // return this.setState({
        //   error:
        //     "Unable to fetch your data, please check your connection, your login and try again later",
        // });
      });
  }, []);

  const buildHistory = (data: IRawHistory[]) => {
    const historyMap: any = {};
    const history = [];

    data.forEach((entry) => {
      let cur = historyMap[entry.contentId];
      if (cur) {
        cur.tickets += entry.tickets;
        cur.purchased = Math.max(cur.purchased, entry.purchased);
        if (entry.status == 2) {
          cur.status = 2;
        }
      } else {
        cur = Object.assign({}, entry);
      }

      historyMap[entry.contentId] = cur;
    });

    for (const entry in historyMap) {
      history.push(historyMap[entry]);
    }

    console.log(history);

    setHistory(history);
  };

  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
    >
      <Grid item sm={12} className={classes.grid}>
        <Typography variant="h5">Current Drawings</Typography>
      </Grid>
      {raffles.map(
        (raffle, index) =>
          raffle.public.type != "STEAM" && (
            <Raffle raffle={raffle} timeout={index * 500} />
          )
      )}
      <Grid item sm={12} className={classes.grid}>
        <Typography variant="h5">History</Typography>
      </Grid>
      <History history={history} />
    </Grid>
  );
};
