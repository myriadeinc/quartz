import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { DrawingHistory } from "renderer/components/molecules/Gameroom-II/DrawingHistory";

type Props = {};
const WITHDRAW_HEADERS = ["Date", "Type", "Amount", "Status", "Address"];
export const WithdrawHistory = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="heading2" color="#EAEAEA">
          History
        </Typography>
      </Box>
      <DrawingHistory />
    </Box>
  );
};
