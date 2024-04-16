import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import makeStyles from "@mui/styles/makeStyles";
import { useEffect, useState } from "react";
import {
  IHistory,
  IRaffle,
  IRawHistory,
} from "renderer/interfaces/pages/dashboard";
import { History } from "./History";
import { Raffle } from "./Raffle";
import {
  fetchActiveEvent,
  fetchAllEvents,
  fetchCurrentHashrate,
} from "services/api.service";
import { CircularProgressLoader } from "renderer/components/CircularLoader";

const useStyles = makeStyles({
  grid: {
    padding: "16px",
    color: "white",
  },
});

export const GameRoom = () => {
  const [raffles, setRaffles] = useState<IRaffle[]>([]);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchActiveEventsData = async () => {
      try {
        const activeEventsData = await fetchActiveEvent();
        if (activeEventsData) {
          setRaffles(activeEventsData);
        }
      } catch (error) {
        console.error("Error fetching active events data:", error);
      }
    };
    fetchActiveEventsData();
  }, []);

  useEffect(() => {
    const fetchAllEventsData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAllEvents();
        if (data) {
          buildHistory(data);
        }
      } catch (error) {
        console.error("Error fetching all events data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllEventsData();
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
      style={{ width: "calc(100% - 406px)", marginLeft: "406px" }}
    >
      {isLoading ? (
        <Box
          sx={{
            width: {
              xs: "100vw",
              sm: "100vw",
              md: "calc(100% - 406px)",
              lg: "calc(100% - 406px)",
            },
            marginLeft: "406px",
            padding: "1.5rem",
          }}
        >
          <CircularProgressLoader isLoaderInMainApp={false} />
        </Box>
      ) : (
        <>
          <Grid item sm={12} className={classes.grid}>
            <Box>
              <Typography variant="h5">Current Drawings</Typography>
            </Box>
          </Grid>
          {raffles.map(
            (raffle, index) =>
              raffle.public.type !== "STEAM" && (
                <Raffle raffle={raffle} timeout={index * 500} key={index} />
              )
          )}
          <Grid item sm={12} className={classes.grid}>
            <Typography variant="h5">History</Typography>
          </Grid>
          <History history={history} />
        </>
      )}
    </Grid>
  );
};
