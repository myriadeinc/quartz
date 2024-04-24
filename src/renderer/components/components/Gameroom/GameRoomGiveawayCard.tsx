import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type GameRoomProps = {
  giveAwayTitle: string;
  imgSrc: string;
};

export const GameRoomGiveAwayCard = ({
  giveAwayTitle,
  imgSrc,
}: GameRoomProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "478px",
        padding: "20px",
      }}
    >
      <Typography variant="heading2" color="#EAEAEA">
        {giveAwayTitle}
      </Typography>
      <Box sx={{ alignSelf: "end" }}>
        <img src={imgSrc} alt={giveAwayTitle} />
      </Box>
    </Box>
  );
};
