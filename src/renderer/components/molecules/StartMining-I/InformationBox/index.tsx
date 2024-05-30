import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

type InformationBoxProps = {
  title: string;
  info: string;
  unit?: string;
};

export const InformationBox = ({ title, info, unit }: InformationBoxProps) => {
  return (
    <Box
      sx={{
        maxWidth: "208px",
        maxHeight: "92px",
        padding: "20px",
        backgroundColor: "#0F141F",
        borderRadius: "7px",
        border: "1px solid #293040",
      }}
    >
      <Typography variant="bodySmall" color="#656565">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "8px",
        }}
      >
        <Typography variant="body" color="#EAEAEA">
          {info}
        </Typography>
        <Typography variant="body" color="#EAEAEA">
          {unit}
        </Typography>
      </Box>
    </Box>
  );
};
