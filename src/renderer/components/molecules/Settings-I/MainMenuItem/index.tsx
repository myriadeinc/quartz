import { Box, IconButton } from "@mui/material";
import React, { ReactElement } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {
  item: string;
  MenuIcon: ReactElement;
  currentIndex: number;
  state: {
    isHovered: boolean;
    isSelected: boolean;
  };
  index: number;
};

export const MainMenuItem = ({
  item,
  MenuIcon,
  state,
  index,
  currentIndex,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        sx={{
          "&:hover .icon0": {
            backgroundColor: "transparent",
          },
        }}
      >
        <MenuIcon
          rectangleColor={"transparent"}
          pathColor={
            state.isSelected && currentIndex === index
              ? "#EC5506"
              : state.isHovered && index === currentIndex
              ? "#EAEAEA"
              : "#656565"
          }
        />
      </IconButton>
      <Typography
        color={
          state.isHovered && currentIndex === index ? "#EAEAEA" : "#656565"
        }
      >
        {item}
      </Typography>
    </Box>
  );
};
