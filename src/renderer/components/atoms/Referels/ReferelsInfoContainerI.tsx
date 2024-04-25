import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { SecondaryButton } from "../Settings/Settings-II/SecondaryButton";

type InfoContainerIProps = {
  title: string;
  points: number;
};

export const ReferelsInfoContainerI = ({
  title,
  points,
}: InfoContainerIProps) => {
  return (
    <Box
      sx={{
        maxWidth: "225px",
        height: "auto",
        padding: "20px",
        gap: "8px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #293040",
        borderRadius: "7px",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Typography variant="body" color="#EAEAEA">
        {points}
      </Typography>
      <Box sx={{ alignSelf: "end" }}>
        <SecondaryButton
          text="Referred Friends"
          variant="medium"
          //   onClick={handleConfirmDeleteWorker}
        />
      </Box>
    </Box>
  );
};
