import { Box, Avatar } from "@mui/material";

type AvatarProps = {
  src: string;
  isSelectingAvatar: boolean;
};

export const CustomAvatar = ({ src, isSelectingAvatar }: AvatarProps) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        minWidth: "96px",
        height: "96px",
        border: isSelectingAvatar ? "" : "4px solid yellow",
        borderRadius: "50%",
        padding: "8px",
      }}
    >
      <Avatar
        sx={{ objectFit: "contain", width: "100%", height: "100%" }}
        src={src}
        alt="hello"
      />
    </Box>
  );
};
