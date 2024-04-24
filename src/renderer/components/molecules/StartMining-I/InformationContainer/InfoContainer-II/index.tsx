import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InfoContainerIIProps = {
  title: string;
  label: string;
};

export const InforContainerII = ({ title, label }: InfoContainerIIProps) => {
  return (
    <Box
      sx={{
        maxWidth: "225px",
        maxHeight: "92px",
        padding: "20px",
        gap: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {label}
      </Typography>
    </Box>
  );
};
