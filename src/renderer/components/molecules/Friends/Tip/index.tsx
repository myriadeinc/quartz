import { Box } from "@mui/material";
import React from "react";
import BonusIcon from "renderer/components/atoms/FriendsWorkers/BonusIcon";
import Typography from "renderer/components/atoms/TextStyles";

type TipProps = {
  tip: string;
};

export const Tip = ({ tip }: TipProps) => {
  return (
    <Box sx={{ display: "flex", gap: "4px" }}>
      <BonusIcon />
      <Typography variant="body" color="#EAEAEA">
        {tip}
      </Typography>
    </Box>
  );
};
