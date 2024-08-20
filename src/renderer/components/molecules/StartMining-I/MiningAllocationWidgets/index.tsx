import { Box, IconButton } from "@mui/material";
import React from "react";
import { DownArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/DownArrow";
import { UpArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/UpArrow";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  points: number;
  label: string;
  isIconshows: boolean;
  onIncreasePoints: any,
  onDecreasePoints: any,
};

export const MiningAllocationWidgetBox = ({
  points,
  label,
  isIconshows,
  onIncreasePoints,
  onDecreasePoints
}: Props) => {
  console.log("lable", label.trim() != "Unused Points");
  return (
    <Box sx={{ maxWidth: "96px", maxHeight: "72px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "48px",
          border: "1px solid #293040",
          borderRadius: "3px",
        }}
      >
        {isIconshows && (
          <IconButton
            sx={{
              zIndex: 4,
              transform: "rotate(270deg)",
              left: 0,
              padding: "0px",
            }}
            onClick={onDecreasePoints}
          >
            <UpArrow />
          </IconButton>
        )}
        <Typography variant="body" centered color="#EAEAEA">
          {points}
        </Typography>
        {isIconshows && (
          <IconButton
            sx={{
              zIndex: 4,
              transform: "rotate(270deg)",
              left: 0,
              padding: "0px",
            }}
            onClick={onIncreasePoints}
          >
            <DownArrow />
          </IconButton>
        )}
      </Box>
      <Typography
        variant="bodySmall"
        centered
        color={label === "MC" ? "#EAEAEA" : "#EAEAEA"}
      >
        {label}
      </Typography>
    </Box>
  );
};
