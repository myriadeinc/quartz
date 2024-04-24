import { Box } from "@mui/material";
import React from "react";
import { DownArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/DownArrow";
import { UpArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/UpArrow";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  points: string;
  label: string;
};

export const MiningAllocationWidgetBox = ({
  points,
  label,
}: Props) => {
  return (
    <Box sx={{ maxWidth: "96px", maxHeight: "72px" }}>
      <Box>
        {label!==="UnusedPoints" && <UpArrow />}
        <Typography variant="body" centered color="#EAEAEA">
          {points}
        </Typography>
        {label!==="UnusedPoints" && <DownArrow />}
      </Box>
      <Typography variant="bodySmall" centered color="#8C8C8C">
        {label}
      </Typography>
    </Box>
  );
};
