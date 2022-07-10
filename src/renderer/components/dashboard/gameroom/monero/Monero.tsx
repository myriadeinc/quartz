import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  IHistory,
  IRaffle,
  IRawHistory,
} from "renderer/interfaces/pages/dashboard";
import config from "renderer/utils/config";
import { History } from "../History";
import { Raffle } from "../Raffle";

const useStyles = makeStyles({
  grid: {
    padding: "36px 43px 6px 43px",
    color: "white",
  },
});

export const Monero = () => {
  const [raffles, setRaffles] = useState([] as IRaffle[]);
  const [history, setHistory] = useState([] as IHistory[]);
  const [USD, setUSD] = useState(130.39);
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

  useEffect(() => {
    axios
      .get(`https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD`)
      .then((response) => {
        setUSD(response.data.USD);
      })
      .catch((error) => {
        console.error("There was an error!", error);
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

    setHistory(history);
  };

  return (
    <Grid
      container
      item
      alignItems={"left"}
      justifyContent={"left"}
      className={classes.grid}
    >
      {raffles.map(
        (raffle, index) =>
          raffle.public.type != "STEAM" && (
            <Raffle
              raffle={raffle}
              timeout={index * 500}
              usdConversionRate={USD}
            />
          )
      )}

      <History history={history} />
    </Grid>
  );
};
