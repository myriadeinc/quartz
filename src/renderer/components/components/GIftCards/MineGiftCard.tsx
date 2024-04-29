import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { GiftCardI } from "renderer/components/molecules/GiftCards-I/StartMiningGiftCards/GiftCardI";

type Props = {};

const GIFT_MINE_CARD = [
  {
    giftCardSrc: "/assets/Illustrations/Steam.webp",
    giftCardValueBG: "#90C2F4",
    giftCardValueText: "5",
    giftCardBottomText: "Steam",
  },
  {
    giftCardSrc: "/assets/Illustrations/Amazon-Gift-Card.webp",
    giftCardValueBG: "#A49AFC",
    giftCardValueText: "10",
    giftCardBottomText: "Amazon",
  },
];

export const MineGiftCard = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "7px",
        backgroundColor: "#0F141F",
      }}
    >
      <Typography variant="heading2" color="#EAEAEA">
        What would you like to mine for?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "40px 0",
        }}
      >
        {GIFT_MINE_CARD.map((element, index) => (
          <GiftCardI
            giftCardSrc={element.giftCardSrc}
            giftCardBottomText={element.giftCardBottomText}
            giftCardValueBG={element.giftCardValueBG}
            giftCardValueText={element.giftCardValueText}
            key={index}
          />
        ))}
      </Box>
      <Box sx={{ maxWidth: "498px" }}>
        <Typography variant="caption" color="#8C8C8C">
          Please keep in mind, as a result of price volatility, your progress
          may vary slightly even while not mining. Once you complete mining
          towards a card, the code will automatically appear in the history
          table below
        </Typography>
      </Box>
    </Box>
  );
};
