import React from "react";
import { Box } from "@mui/material";
import { TextElement } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/TextElement";
import MCIcon from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/MCIcon";
type Props = {};

export const CreditCardI = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <MCIcon rectangleColor="0F141F" pathColor="#EAEAEA" />
      <TextElement />
    </Box>
  );
};
