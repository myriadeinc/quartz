import { Box, Avatar } from "@mui/material";

type MinerStatusIconProps = {
  src: string;
};

export const MinerStatusIcon = ({ src }: MinerStatusIconProps) => {
  return (
    <Box
      sx={{
        maxWidth: "48px",
        maxHeight: "48px",
        border: "4px solid yellow",
        borderRadius: "50%",
      }}
    >
      <Avatar sx={{ minWidth: "44px", minHeight: "44px" }} src={src} />
    </Box>
  );
};
