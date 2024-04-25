import { Box, Avatar } from "@mui/material";

type AvatarProps = {
  src: string;
  isSelectingAvatar: boolean;
};

export const CustomAvatar = ({ src, isSelectingAvatar }: AvatarProps) => {
  return (
    <Box
      sx={{
        // maxWidth: "96px",
        // maxHeight: "96px",
        border: isSelectingAvatar ? "" : "4px solid yellow",
        borderRadius: "50%",
        padding: "5px",
      }}
    >
      <Avatar
        sx={{ objectFit: "contain", width: "96px", height: "96px" }}
        src={src}
        alt="hello"
      />
    </Box>
  );
};
