import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import { WithdrawMoneroBox } from "./WithdrawMoneroBox";
import { WithdrawHistory } from "./WithdrawHistory";
import { WithdrawInstructions } from "renderer/components/components/Withdraw/WithdrawInstructions";
import { WithdrawIconBox } from "./WithdrawIconBox";

export const Withdraw = () => {
  const [withdrawing, setWithdrawing] = useState(false);

  return (
    <Stack
      style={{
        width: "calc(100% - 430px)",
        marginLeft: "400px",
        padding: "20px 21px 24px 20px",
        gap: "20px",
      }}
    >
      <Grid container sx={{ paddingLeft: "21px" }}>
        <Box>
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              fontWeight: 400,
            }}
          >
            Withdraw
          </Typography>
        </Box>
      </Grid>
      <WithdrawInstructions />
      <WithdrawIconBox />
      <WithdrawMoneroBox withdrawing={false} />
      <WithdrawHistory />
    </Stack>
  );
};
