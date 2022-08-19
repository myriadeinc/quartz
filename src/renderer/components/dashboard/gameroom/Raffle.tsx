import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  LinearProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useContext, useState } from "react";
import { IRaffle } from "renderer/interfaces/pages/dashboard";
import MinerContext from "renderer/pages/Dashboard";
import config from "renderer/utils/config";
import monero from "../../../../assets/game-room/monero.svg";
import steam_green from "../../../../assets/game-room/steam_green.png";
import steam_orange from "../../../../assets/game-room/steam_orange.png";
import steam_purple from "../../../../assets/game-room/steam_purple.png";
import steam_red from "../../../../assets/game-room/steam_red.png";
import steam_teal from "../../../../assets/game-room/steam_teal.png";

const useStyles = makeStyles({
  card: {
    margin: "16px",
    cursor: "pointer",
  },
  cardContent: {
    backgroundColor: "#282b30",
  },
  cardFooter: {
    backgroundColor: "#36393e",
  },
  progressStyle: {
    height: "15px",
    borderRadius: 5,
    margin: "30px 0px 5px 0px",
  },
  bodyStyle: {
    fontSize: "0.8rem",
    fontWeight: "300",
  },
  purchaseDetailsStyle: {
    fontWeight: "300",
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  moneroImgStyle: {
    margin: "0px 10px",
    padding: "0vh 0vh 0.05vh 0vh",
    width: "16px",
  },
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
};

interface RaffleProps {
  raffle: IRaffle;
  timeout: number;
  usdConversionRate: number;
  steam?: boolean;
  update: any;
}

export const Raffle = (props: RaffleProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tickets, setTickets] = useState(1);
  const miner = useContext(MinerContext);
  const { raffle, timeout, usdConversionRate, steam } = props;
  const classes = useStyles();

  const handleChange = (e: any) => {
    let newValue = e.target.value;
    newValue = Math.floor(newValue);
    setTickets(Math.max(0, newValue));
  };

  const setTicketsByPct = (pct: number) => {
    let newValue = Math.floor(
      (pct * miner.mcBalance) / raffle.public.entryPrice
    );

    setTickets(newValue);
  };

  const purchaseTickets = () => {
    const options = {
      method: "post",
      url: `${config.miner_metrics_url}/v1/credits/buy`,
      data: {
        amount: Number(tickets) * raffle.public.entryPrice,
        contentId: raffle.id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    } as any;

    axios(options)
      .then(() => {
        props.update();
      })
      .finally(() => setModalOpen(false));
  };

  const getSteamImage = () => {
    const prizeAmount = raffle.public.prizeAmount;

    if (prizeAmount == 5) return steam_red;
    if (prizeAmount == 10) return steam_teal;
    if (prizeAmount == 20) return steam_orange;
    if (prizeAmount == 50) return steam_green;
    if (prizeAmount == 100) return steam_purple;

    return steam_red;
  };

  return (
    <Grid
      item
      sm={6}
      md={4}
      style={{
        marginLeft: "0vw",
      }}
    >
      <Grow in={true} timeout={timeout}>
        <Card onClick={() => setModalOpen(true)} className={classes.card}>
          {steam && <CardMedia image={getSteamImage()} component="img" />}
          <CardContent className={classes.cardContent}>
            {!steam && (
              <>
                <Typography variant="h5">
                  ${(raffle.public.prizeAmount * usdConversionRate).toFixed(2)}{" "}
                  USD
                </Typography>
                <Typography variant="body1">
                  <img
                    className={classes.moneroImgStyle}
                    src={monero}
                    height="100%"
                    style={{ margin: "0px 0.2vw -0.25vh 0px" }}
                  />
                  {raffle.public.prizeAmount} XMR
                </Typography>
              </>
            )}
            <Typography
              className={classes.bodyStyle}
              style={{ color: "#F78549", fontSize: "1rem" }}
              variant="body1"
            >
              {raffle.public.title}
            </Typography>
            <Typography className={classes.bodyStyle} variant="body1">
              Ticket Price: {raffle.public.entryPrice} MC
            </Typography>
          </CardContent>
          <CardContent className={classes.cardFooter}>
            <LinearProgress
              className={classes.progressStyle}
              variant="determinate"
              value={
                (raffle.public.numTickets / raffle.public.totalTickets) * 100
              }
            />
            <Typography
              className={classes.purchaseDetailsStyle}
              variant="caption"
            >
              {raffle.public.numTickets} of {raffle.public.totalTickets}{" "}
              purchased
            </Typography>
          </CardContent>
        </Card>
      </Grow>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={style}>
          <Typography variant="h6">Ticket Purchase</Typography>
          <div>
            <Typography variant="body1">
              Drawing Amount: $
              {(raffle.public.prizeAmount * usdConversionRate).toFixed(2)} USD
            </Typography>
            <Typography variant="body1">
              Ticket Price: {raffle.public.entryPrice} MC
            </Typography>
            <Typography variant="body1" style={{ display: "inline" }}>
              Tickets:{" "}
            </Typography>
            <div
              style={{ display: "inline", float: "right", marginTop: "8px" }}
            >
              <Button
                variant="contained"
                onClick={() => setTicketsByPct(0.25)}
                style={{ marginLeft: "8px" }}
              >
                25%
              </Button>
              <Button
                variant="contained"
                onClick={() => setTicketsByPct(0.5)}
                style={{ marginLeft: "8px" }}
              >
                50%
              </Button>
              <Button
                variant="contained"
                onClick={() => setTicketsByPct(0.75)}
                style={{ marginLeft: "8px" }}
              >
                75%
              </Button>
              <Button
                variant="contained"
                onClick={() => setTicketsByPct(1)}
                style={{ marginLeft: "8px" }}
              >
                Max
              </Button>
            </div>

            <TextField
              value={tickets}
              type="number"
              onChange={handleChange}
              fullWidth
              style={{ margin: "16px 0px" }}
            />
            <Typography variant="h6">
              Total Price: {tickets * raffle.public.entryPrice} MC
            </Typography>
          </div>
          <div style={{ float: "right", marginTop: "16px" }}>
            <Button
              variant="outlined"
              style={{ marginRight: "8px" }}
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={purchaseTickets}>
              Confirm Purchase
            </Button>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};
