import { Box, IconButton } from "@mui/material";
import React from "react";
import { DownArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/DownArrow";
import { UpArrow } from "renderer/components/atoms/StartMining-I/ScrollArrows/UpArrow";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  points: string;
  label: string;
  isIconshows: boolean;
};

export const MiningAllocationWidgetBox = ({
  points,
  label,
  isIconshows,
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
              // width: 30,
              // height: 30,
              zIndex: 4,
              // position: "absolute",
              transform: "rotate(270deg)",
              left: 0,
              padding: "0px",
            }}
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
              // width: 30,
              // height: 30,
              zIndex: 4,
              // position: "absolute",
              transform: "rotate(270deg)",
              left: 0,
              padding: "0px",
            }}
          >
            <DownArrow />
          </IconButton>
        )}
      </Box>
      <Typography variant="bodySmall" centered color="#8C8C8C">
        {label}
      </Typography>
    </Box>
  );
};
