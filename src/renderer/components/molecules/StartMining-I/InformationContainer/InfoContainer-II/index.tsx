import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InfoContainerIIProps = {
  title: string;
  points: string;
  label: string;
};

export const InforContainerII = ({
  title,
  label,
  points,
}: InfoContainerIIProps) => {
  return (
    <Box
      sx={{
        maxWidth: "225px",
        height: "auto",
        padding: "20px",
        gap: "8px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #293040",
        borderRadius: "7px",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Typography variant="bodySmall" color="#EAEAEA">
        {points}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {label}
      </Typography>
    </Box>
  );
};
