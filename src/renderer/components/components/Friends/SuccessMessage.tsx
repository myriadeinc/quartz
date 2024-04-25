import { Box } from "@mui/material";
import { SuccessIcon } from "renderer/components/atoms/FriendsWorkers/SuccessIcon";
import Typography from "renderer/components/atoms/TextStyles";

type SuccessMessageProps = {
  message: string;
};

export const SuccessMessage = ({ message }: SuccessMessageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <SuccessIcon />
      <Typography variant="bodySmall" color="#8C8C8C">
        {message}
      </Typography>
    </Box>
  );
};
