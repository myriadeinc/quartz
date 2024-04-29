import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";

type TabNavigationHeaderProps = {
  title: string;
  info: string;
};

export const TabNavigationHeader = ({
  title,
  info,
}: TabNavigationHeaderProps) => {
  return (
    <Box
      sx={{
        width: "180px",
        height: "52px",
        borderRadius: "7px 7px 0 0",
        border: "1px solid #293040",
        padding: "14px 20px",
        background: "#080A0F",
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
