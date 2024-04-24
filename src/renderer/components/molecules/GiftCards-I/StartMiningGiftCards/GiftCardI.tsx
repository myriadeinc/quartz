import { Box, Typography } from "@mui/material";
import { GiftCardValue } from "renderer/components/atoms/GitftCards/GiftCardValue";

type GiftCardIProps = {
  giftCardSrc: string;
  giftCardValueBG: string;
  giftCardValueText: string;
  giftCardBottomText: string;
};

export const GiftCardI = ({
  giftCardSrc,
  giftCardValueBG,
  giftCardValueText,
  giftCardBottomText,
}: GiftCardIProps) => {
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
        <GiftCardValue
          backgroundColor={giftCardValueBG}
          text={giftCardValueText}
        />
      </Box>
      <Box sx={{ position: "absolute", right: 100, top: 53 }}>
        <img src={giftCardSrc} alt="giftCard" />
      </Box>
      <Box
        sx={{
          maxHeight: "56px",
          paddingBottom: "14px",
          background: "#EAEAEA",
          width: "100%",
        }}
      >
        <Typography variant="heading2" color="#EAEAEA">
          {giftCardBottomText}
        </Typography>
      </Box>
    </Box>
  );
};
