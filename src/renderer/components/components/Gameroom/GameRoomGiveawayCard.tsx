import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type GameRoomProps = {
  giveAwayTitle: string;
  imgSrc: string;
  width: string;
  height: string;
  isGiveAwayCardClicked: boolean;
  onClick?: VoidFunction;
};

export const GameRoomGiveAwayCard = ({
  giveAwayTitle,
  imgSrc,
  width,
  height,
  onClick,
  isGiveAwayCardClicked,
}: GameRoomProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        // minWidth: "478px",
        // padding: "12px 20px 20px",
        border: "1px solid #293040",
        borderRadius: "7px",
        whiteSpace: "nowrap",
        justifyContent: "space-between",
        background: isGiveAwayCardClicked ? "#0F141F" : "transparent",
      }}
      onClick={onClick}
    >
      <Box sx={{ padding: "12px 18px 0 20px" }}>
        <Typography variant="heading2" color="#EAEAEA">
          {giveAwayTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          alignSelf: "center",
          width: width,
          height: height,
          padding: "20px 40px 20px 0",
        }}
      >
        <img
          src={imgSrc}
          alt={giveAwayTitle}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};
