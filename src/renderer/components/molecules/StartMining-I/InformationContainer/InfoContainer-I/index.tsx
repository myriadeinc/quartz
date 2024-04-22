import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InfoContainerIProps = {
  title: string;
  info: string;
};

export const InforContainerI = ({ title, info }: InfoContainerIProps) => {
  return (
    <Box
      sx={{
        width: "225px",
        height: "134px",
        padding: "19px 9px 23px 8px",
        gap: "8px",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {info}
      </Typography>
    </Box>
  );
};
