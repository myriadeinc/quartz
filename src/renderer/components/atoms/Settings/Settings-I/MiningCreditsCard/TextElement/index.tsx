import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  info: number;
  label: string;
};

export const TextElement = ({ info, label }: Props) => {
  return (
    <Box
      sx={{
        maxWidth: "192px",
        maxHeight: "48px",
        gap: "4px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body" color="#EAEAEA">
        {label}
      </Typography>
      <Typography variant="bodySmall" color="#8C8C8C">
        {info}
      </Typography>
    </Box>
  );
};
