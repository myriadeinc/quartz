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
        padding: "12px 20px 20px",
        border: "1px solid #293040",
        borderRadius: "7px",
        whiteSpace: "nowrap",
        justifyContent: "space-between",
        background: isGiveAwayCardClicked ? "#0F141F" : "transparent",
      }}
      onClick={onClick}
    >
      <Typography variant="heading2" color="#EAEAEA">
        {giveAwayTitle}
      </Typography>
      <Box sx={{ alignSelf: "center", width: width, height: height }}>
        <img
          src={imgSrc}
          alt={giveAwayTitle}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};
