import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { EnhancedWithdrawTable } from "./WithdrawTable";

const useStyles = makeStyles({
  grid: {
    padding: "16px 16px 16px 96px",
  },
  tableContainer: {
    backgroundColor: "#1E1E1E",
    marginTop: "16px",
    padding: "16px"
  }
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
      <Grid item sm={12} style={{ color: "white" }}>
        <Typography variant="h4">Withdraw your XMR</Typography>
        <Typography variant="body1">
          The mininum XMR balance for a withdrawal is 0.001 XMR. Please note
          that our withdrawals are manual for now and may take up to 24 hours or
          more to process.
        </Typography>
      </Grid>
      <Grid item sm={12}>
        <Card
          elevation={0}
          style={{ 
            padding: "64px", 
            margin: "16px 0px",
            backgroundColor: "#202225",
          }}
        >
          {withdrawing ? (
            <div>
              <Typography variant="h6">XMR Amount</Typography>
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
                  {/* <FormControlLabel
                    control={<Checkbox />}
                    label="Use the wallet address I signed up with"
                  /> */}
                  <br />
                  <Button variant="contained">Withdraw</Button>
                </div>
              )}
            </MinerConsumer>
          )}
        </Card>
      </Grid>
      <Grid item sm={12}>
        <div className={classes.tableContainer}>
          <EnhancedWithdrawTable
            data={[
              {
                date: "April 10, 2021",
                type: "XMR",
                amount: 0.023386790984,
                status: 0,
                address: "488tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H",
              },
            ]}
          />
        </div>
      </Grid>
    </Grid>
  );
};
