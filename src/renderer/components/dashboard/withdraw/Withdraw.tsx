import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MinerConsumer } from "renderer/pages/Dashboard";
import { EnhancedTable } from "../gameroom/HistoryTable";
export const Withdraw = () => {
  const [withdrawing, setWithdrawing] = useState(false);
  const [address, setAddress] = useState("");
  

  return (
    <Grid
      container
      item
      style={{
        width: "1473px", 
        marginLeft: "406px",
        padding: "16px",
      }}
      alignItems={"center"}
      justifyContent={"center"}
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
          style={{ padding: "64px 16px", margin: "16px 0px" }}
        >
          {withdrawing ? (
            <div>
              <Typography variant="h6">XMR Amount</Typography>
            </div>
          ) : (
            <MinerConsumer>
              {(miner) => (
                <div>
                  <Typography variant="h6">XMR Amount</Typography>
                  <Typography variant="body1">
                    {miner.xmrBalance} XMR
                  </Typography>
                  <TextField
                    variant="standard"
                    fullWidth
                    label="Monero Wallet Address"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Use the wallet address I signed up with"
                  />
                  <br />
                  <Button variant="contained">Withdraw</Button>
                </div>
              )}
            </MinerConsumer>
          )}
        </Card>
      </Grid>
      <Grid item sm={12}>
        <EnhancedTable
          data={[
            {
              title: "Temp",
              amount: 3,
              purchased: 3,
              status: 0,
              tickets: 234,
              winner: "2342",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};
