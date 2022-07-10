import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Grow,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { EnhancedTable } from "../gameroom/HistoryTable";
import { EnhancedWithdrawTable } from "./WithdrawTable";

const useStyles = makeStyles({
  grid: {
    padding: "8vh 96px 16px 96px",
  },
  tableContainer: {
    backgroundColor: "#1E1E1E",
    marginTop: "16px",
    padding: "16px",
  },
  withdrawButton: {
    padding: "7px 10px",
    marginTop: "0vh",
    borderRadius: "10px",
    backgroundColor: "#2196f3",
    "&:hover": {
      backgroundColor: "#1976d2",
    },
  },
  walletLink: {
    fontSize: "1vw",
    fontWeight: "700",
    padding: "1.5vh 0vh 0vh 0vh",
    color: "#1976d2",
  },
});

export const Withdraw = () => {
  const [withdrawing, setWithdrawing] = useState(false);
  const [address, setAddress] = useState("");
  const classes = useStyles();

  return (
    <Grid
      container
      item
      alignItems={"center"}
      justifyContent={"center"}
      className={classes.grid}
    >
      <Grow in={true} timeout={300}>
        <Grid item sm={12} style={{ color: "white" }}>
          <Typography variant="h4">Withdraw your XMR</Typography>
          <Typography variant="body1">
            The mininum XMR balance for a withdrawal is 0.001 XMR. Please note
            that our withdrawals are manual for now and may take up to 24 hours
            or more to process.
          </Typography>
        </Grid>
      </Grow>

      <Grow in={true} timeout={500}>
        <Grid item sm={12}>
          <Card
            elevation={0}
            style={{
              padding: "64px",
              margin: "16px 0px",
              backgroundColor: "#282b30",
            }}
          >
            {withdrawing ? (
              <div>
                <Typography>XMR Amount</Typography>
              </div>
            ) : (
              <MinerConsumer>
                {(miner) => (
                  <div>
                    <Typography variant="h5">XMR Amount</Typography>
                    <Typography variant="body1">
                      {miner.xmrBalance} XMR
                    </Typography>
                    <TextField
                      variant="standard"
                      fullWidth
                      label="Monero Wallet Address"
                      helperText="e.g. 488tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H"
                    />
                    <a
                      href="https://paul-myriade.medium.com/how-to-get-yourself-a-monero-xmr-wallet-address-2edb75a0a575"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography className={classes.walletLink}>
                        (Where to get a Monero Wallet address)
                      </Typography>
                    </a>
                    {/* <FormControlLabel
                    control={<Checkbox />}
                    label="Use the wallet address I signed up with"
                  /> */}
                    <br />
                    <Button
                      variant="contained"
                      className={classes.withdrawButton}
                    >
                      <Typography
                        style={{
                          color: "#ffffff",
                          fontSize: "1vw",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        Withdraw{" "}
                      </Typography>{" "}
                    </Button>
                  </div>
                )}
              </MinerConsumer>
            )}
          </Card>
        </Grid>
      </Grow>
      <Grid item sm={12}>
        <div className={classes.tableContainer}>
          <EnhancedWithdrawTable
            data={[
              {
                date: "April 10, 2021",
                type: "XMR",
                amount: 0.023386790984,
                status: 0,
                address:
                  "488tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H",
              },
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
};
