import { Box } from "@mui/material";
import React from "react";
import { GiftCardValue } from "renderer/components/atoms/GitftCards/GiftCardValue";

type Props = {};

export const AmazonGiftCardI = (props: Props) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "288px",
        borderRadius: "7px",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 20, left: 20 }}>
        <GiftCardValue backgroundColor="" text="" />
      </Box>
      <Box sx={{ position: "absolute", right: 100, top: 53 }}>
        <img
          src="/src/renderer/components/atoms/GitftCards/GiftCardICons/Amazon-Gift-Card.svg"
          alt="giftCard"
        />
      </Box>
      <Box sx={{ height: "56px", paddingBottom: "14px" }}></Box>
    </Box>
  );
};
