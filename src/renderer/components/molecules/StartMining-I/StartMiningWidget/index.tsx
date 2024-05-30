import { Box, Divider } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {};

export const StartMiningWidget = (props: Props) => {
  return (
    <Box>
      <Typography variant="heading2" color="#EAEAEA" centered>
        {action}
      </Typography>
      <Divider
        sx={{
          padding: "20px 0",
          width: "288px",
          border: "1px",
          backgroundColor: "#656565",
        }}
      />
      <Box sx={{ width: "224px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="heading2" centered color="#EAEAEA">
            {primaryInfo}
          </Typography>
          <Typography color="#EAEAEA" centered variant="body">
            {label}:{info}
          </Typography>
        </Box>
        <Box>
          <Divider
            sx={{ width: "48px", backgroundColor: "#FA6F15", border: "1px" }}
          />
          <Typography variant="bodySmall" color="#8C8C8C">
            {timeRemain}
          </Typography>
        </Box>
        <Divider
          sx={{ padding: "20px 0", width: "100%", backgroundColor: "#656565" }}
        />
        <Box>
          <Divider
            sx={{ width: "48px", backgroundColor: "#FA6F15", border: "1px" }}
          />
          <Typography color="#8C8C8C" variant="bodySmall">
            {timeEstimate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
