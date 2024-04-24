import { Box } from "@mui/material";
import React from "react";
import { WorkersIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WorkersIcon";
import Typography from "renderer/components/atoms/TextStyles";

type ActiveMinerProps = {
  miningPoints: number;
};

export const ActiveMiner = ({ miningPoints }: ActiveMinerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "8px 20px",
        backgroundColor: "#0F141F",
      }}
    >
      <WorkersIcon />
      <Typography variant="caption" color="#8C8C8C">
        Active Miner
      </Typography>
      <Typography variant="heading2">{miningPoints}</Typography>
    </Box>
  );
};
