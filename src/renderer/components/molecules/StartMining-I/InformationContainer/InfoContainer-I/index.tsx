import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type InfoContainerIProps = {
  title: string;
  infoFirst: string;
  infoSecond: string;
  infoFirstUnit: string;
  infoSecondUnit: string;
};

export const InfoContainerI = ({
  title,
  infoFirst,
  infoFirstUnit,
  infoSecond,
  infoSecondUnit,
}: InfoContainerIProps) => {
  return (
    <Box
      sx={{
        maxWidth: "208px",
        maxHeight: "116px",
        padding: "19px 9px 23px 8px",
        gap: "8px",
      }}
    >
      <Typography variant="bodySmall" color="#8C8C8C">
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body" color="#EAEAEA">
          {infoFirst}
        </Typography>
        <Typography variant="body" color="#EAEAEA">
          {infoFirstUnit}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body" color="#EAEAEA">
          {infoSecond}
        </Typography>
        <Typography variant="body" color="#EAEAEA">
          {infoSecondUnit}
        </Typography>
      </Box>
    </Box>
  );
};
