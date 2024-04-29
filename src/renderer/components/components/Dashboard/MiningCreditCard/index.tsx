import { Box } from "@mui/material";
import React from "react";
import { DecreaseIcon } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/DecreaseIcon";
import { IncreaseArrowIcon } from "renderer/components/atoms/Settings/Settings-I/MiningCreditsCard/IncreaseIcon";
import { CreditCardI } from "renderer/components/molecules/Settings-I/MIningCreditsCard/CreditCardI";
import { CreditCardII } from "renderer/components/molecules/Settings-I/MIningCreditsCard/CreditCardII";
import { MiningRefreshButton } from "renderer/components/molecules/Settings-I/MIningCreditsCard/MiningRefreshButton";

type MiningCreditCardProps = {
  minerBalance: number;
  moneroBalance: number;
};

export const MiningCreditCard = ({
  minerBalance,
  moneroBalance,
}: MiningCreditCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px 8px 12px 8px",
        flexDirection: "column",
        backgroundColor: "#0F141F",
        borderRadius: "7px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "8px",
          position: "relative",
        }}
      >
        <CreditCardI info={minerBalance} />
        <Box
          sx={{
            alignSelf: "flex-end",
            position: "absolute",
            right: 0,
            bottom: 5,
          }}
        >
          <MiningRefreshButton />
        </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "8px 0" }}>
        <DecreaseIcon />
        <CreditCardII info={moneroBalance} />
        <IncreaseArrowIcon />
      </Box>
    </Box>
  );
};
