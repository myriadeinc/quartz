import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InfoContainerIIProps = {
  title: string;
  label1: string;
  label2: string;
};

export const InforContainerII = ({
  title,
  label1,
  label2,
}: InfoContainerIIProps) => {
  return (
    <Box
      sx={{
        width: "225px",
        height: "134px",
        padding: "9px 9px 1px 8px",
        gap: "8px",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {label1}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {label2}
      </Typography>
    </Box>
  );
};
