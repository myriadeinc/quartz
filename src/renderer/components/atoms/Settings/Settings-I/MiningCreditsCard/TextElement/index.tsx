import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  info: string;
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
      }}
    >
      <Typography variant="body2" color="#EAEAEA">
        {label}
      </Typography>
      <Typography variant="body3" color="#8C8C8C">
        {info}
      </Typography>
      ;
    </Box>
  );
};
