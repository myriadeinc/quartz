import { Box } from "@mui/material";
import React from "react";
import { DownArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/DownArrow";
import { UpArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/UpArrow";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  isunusedPoints: boolean;
  points: string;
  label: string;
};

export const MiningAllocationWidget = ({
  isunusedPoints,
  points,
  label,
}: Props) => {
  return (
    <Box sx={{ width: "96px", height: "72px" }}>
      <Box>
        {!isunusedPoints && <UpArrow />}
        <Typography variant="body" centered color="#EAEAEA">
          {points}
        </Typography>
        {!isunusedPoints && <DownArrow />}
      </Box>
      <Typography variant="bodySmall" centered color="#8C8C8C">
        {label}
      </Typography>
    </Box>
  );
};
