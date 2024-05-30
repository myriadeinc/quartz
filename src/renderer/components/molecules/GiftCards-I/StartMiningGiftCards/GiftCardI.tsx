import { Box } from "@mui/material";
import { GiftCardValue } from "renderer/components/atoms/GitftCards/GiftCardValue";
import Typography from "renderer/components/atoms/TextStyles";

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
        width: "40%",
        minHeight: "288px",
        borderRadius: "7px",
        position: "relative",
        border: "1px solid #293040",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          padding: "20px",
        }}
      >
        <GiftCardValue
          backgroundColor={giftCardValueBG}
          text={giftCardValueText}
        />
      </Box>
      <Box sx={{ alignSelf: "center", maxWidth: "200px" }}>
        <img
          src={giftCardSrc}
          alt="giftCard"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          maxHeight: "56px",
          paddingTop: "14px",
          paddingBottom: "14px",
          background: "#EAEAEA",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="heading2" color="#0F141F" centered>
          {giftCardBottomText}
        </Typography>
      </Box>
    </Box>
  );
};
