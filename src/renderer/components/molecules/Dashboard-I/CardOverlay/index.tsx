import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type CardOverlayProps = {
  CardOverLayIcon: ReactNode;
  cardtitle: string;
};

export const CardOverLay = ({
  cardtitle,
  CardOverLayIcon,
}: CardOverlayProps) => {
  return (
    <Box sx={{ width: "110px", height: "44px" }}>
      <Typography color="#EAEAEA" variant="body">
        {cardtitle}
      </Typography>
      <CardOverLayIcon />
    </Box>
  );
};
