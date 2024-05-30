import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { MinerConsumer } from "renderer/pages/Dashboard";

type Props = {};

export const WithdrawInstructions = () => {
  return (
    <Box
      display={"grid"}
      sx={{
        backgroundColor: "#080A0F",
        borderRadius: "0 0 7px 7px",
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
      }}
    >
      <Box
        style={{
          flex: 1,
          border: "1px solid #293040",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <MinerConsumer>
          {(miner) => (
            <Typography variant="bodyLarge" color="#EAEAEA" centered>
              {miner.xmrBalance} XMR
            </Typography>
          )}
        </MinerConsumer>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          Your Monero Balance
        </Typography>
      </Box>

      <div
        style={{
          flex: 1,
          border: "1px solid rgba(234, 234, 234, 0.2)",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <Typography variant="bodyLarge" color="#EAEAEA" centered>
          0.001 XMR
        </Typography>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          Minimum Withdrawal Amount
        </Typography>
      </div>

      <div
        style={{
          flex: 1,
          border: "1px solid rgba(234, 234, 234, 0.2)",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <Typography variant="bodyLarge" color="#EAEAEA" centered>
          0 XMR
        </Typography>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          Withdrawal Fee
        </Typography>
      </div>
    </Box>
  );
};
