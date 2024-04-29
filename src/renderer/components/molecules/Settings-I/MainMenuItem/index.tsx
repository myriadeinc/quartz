import { Box, IconButton } from "@mui/material";
import React, { ReactElement, useState } from "react";
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
  console.log(state.isSelected, "state.isSelected");
  // const [iconState, setIconState] = useState({
  //   isHovered: false,
  //   isSelected: false,
  // });

  // const handleIconInteraction = (action: "hover" | "click", value: boolean) => {
  //   if (action === "hover") {
  //     setIconState({ ...iconState, isHovered: value });
  //   } else if (action === "click") {
  //     setIconState({ ...iconState, isSelected: !iconState.isSelected });
  //   }
  // };

  return (
    <Box
      className="helloworldddd"
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="toggle password visibility"
        // onMouseEnter={() => handleIconInteraction("hover", true)}
        // onMouseLeave={() => handleIconInteraction("hover", false)}
        // onClick={() => handleIconInteraction("click", true)}
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
