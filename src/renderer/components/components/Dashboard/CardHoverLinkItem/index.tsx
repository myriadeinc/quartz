import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Typography from "renderer/components/atoms/TextStyles";
type LinkHoverCardItemProps = {
  linkItemName: string;
  LinkIcon: React.ElementType;
  linkPath: string;
  isHovered: boolean;
};

export const LinkHoverCardItem = ({
  LinkIcon,
  linkItemName,
  linkPath,
  isHovered,
}: LinkHoverCardItemProps) => {
  return (
    <Link to={linkPath}>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          className: "absolute",
          alignItems: "center",
          left: 20,
          bottom: 18,
          opacity: isHovered ? 1 : 1,
          transition: "opacity 0.3s ease-in-out", // Add transition for smooth opacity change
        }}
      >
        <Typography color="#101F45" variant="bodyLarge">
          {linkItemName}
        </Typography>
        <LinkIcon />
      </Box>
    </Link>
  );
};
