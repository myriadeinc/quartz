import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import { WithdrawMoneroBox } from "./WithdrawMoneroBox";
import { WithdrawHistory } from "./WithdrawHistory";
import { WithdrawInstructions } from "renderer/components/components/Withdraw/WithdrawInstructions";
import { WithdrawIconBox } from "./WithdrawIconBox";
import { WithdrawModal } from "renderer/components/components/Withdraw/WithdrawModal";
import { MinerConsumer } from "renderer/pages/Dashboard";

export const Withdraw = () => {
  const [isWithdrawModalopen, setWithdrawModalOpen] = useState(false);

  return (
    <MinerConsumer>
      {(miner) => {
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
            <WithdrawMoneroBox
              withdrawing={false}
              setWithdrawModalOpen={setWithdrawModalOpen}
              miner={miner}
            />
         
            {isWithdrawModalopen && (
              <WithdrawModal
                setWithdrawModalOpen={setWithdrawModalOpen}
                isWithdrawModalopen={isWithdrawModalopen}
              />
            )}
          </Stack>
        );
      }}
    </MinerConsumer>
  );
};
