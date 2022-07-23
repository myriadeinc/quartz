import {
  Box,
  Button,
  Card,
  Grid,
  Grow,
  LinearProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useState } from "react";
import { IRaffle } from "renderer/interfaces/pages/dashboard";
import MinerContext from "renderer/pages/Dashboard";
import monero from "../../../../assets/game-room/monero.svg";

const useStyles = makeStyles({
  card: {
    padding: "16px 6px 6px 16px",
    margin: "3vh 2vw 3vh 2vw",
    background: "linear-gradient(#282b30 70%, #36393e 70%)",
    minWidth: "310px",
    minHeight: "100px",
    cursor: "pointer",
  },
  subtitle: {
    color: "#999999",
    marginBottom: "10px",
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
}

export const Raffle = (props: RaffleProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tickets, setTickets] = useState(1);
  const miner = useContext(MinerContext);
  const { raffle, timeout, usdConversionRate } = props;
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
        <Card className={classes.card} onClick={() => setModalOpen(true)}>
          <Typography variant="h5">
            ${(raffle.public.prizeAmount * usdConversionRate).toFixed(2)} USD
          </Typography>
          <Typography className={classes.subtitle} variant="body1">
            <img
              className={classes.moneroImgStyle}
              src={monero}
              height="100%"
              style={{ margin: "0px 0.2vw -0.25vh 0px" }}
            />
            {raffle.public.prizeAmount} XMR
          </Typography>
          <Typography
            className={classes.bodyStyle}
            style={{ color: "#F78549", marginTop: "40px", fontSize: "1rem" }}
            variant="body1"
          >
            {raffle.public.title}
          </Typography>
          <Typography className={classes.bodyStyle} variant="body1">
            Ticket Price: {raffle.public.entryPrice} MC
          </Typography>
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
            {raffle.public.numTickets} of {raffle.public.totalTickets} purchased
          </Typography>
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
            <Button variant="outlined" style={{ marginRight: "8px" }}>
              Cancel
            </Button>
            <Button variant="contained">Confirm Purchase</Button>
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};
