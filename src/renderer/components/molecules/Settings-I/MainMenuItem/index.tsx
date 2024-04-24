import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  item: string;
  MenuIcon: React.ElementType;
};

export const MainMenuItem = ({ item, MenuIcon }: Props) => {
  const [iconState, setIconState] = useState({
    isHovered: false,
    isSelected: false,
  });

  const handleIconInteraction = (action: "hover" | "click", value: boolean) => {
    if (action === "hover") {
      setIconState({ ...iconState, isHovered: value });
    } else if (action === "click") {
      setIconState({ ...iconState, isSelected: !iconState.isSelected });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
      }}
    >
      <IconButton
        aria-label="toggle password visibility"
        // onClick={onToggleVisible}
        onMouseEnter={() => handleIconInteraction("hover", true)}
        onMouseLeave={() => handleIconInteraction("hover", false)}
        onClick={() => handleIconInteraction("click", true)}
        edge="end"
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <MenuIcon
          rectangleColor={"transparent"}
          pathColor={
            iconState.isSelected
              ? "#EC5506"
              : iconState.isHovered
              ? "#EAEAEA"
              : "#656565"
          }
        />
      </IconButton>
      <Typography>{item}</Typography>
      {/* <Box sx={{ maxWidth: "266px", maxHeight: "24px" }}></Box> */}
    </Box>
  );
};
