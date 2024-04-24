import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InstructionProps = {
  instructions: string;
  InstructionIcon: ReactElement;
};

export const Instructions = ({
  instructions,
  InstructionIcon,
}: InstructionProps) => {
  return (
    <Box
      sx={{
        borderRight: {
          xs: "1px solid rgba(234, 234, 234, 0.2)",
          sm: "none",
          md: "none",
          lg: "1px solid rgba(234, 234, 234, 0.2)",
          xl: "1px solid rgba(234, 234, 234, 0.2)",
        },
        borderBottom: {
          sm: "1px solid rgba(234, 234, 234, 0.2)",
          md: "1px solid rgba(234, 234, 234, 0.2)",
          lg: "none",
          xl: "none",
        },
        width: "90%",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        placeContent: "center",
      }}
      key={index}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "270px",
          alignItems: "center",
        }}
      >
        <InstructionIcon />
        <Typography variant="body" color="#EAEAEA" centered>
          {instructions}
        </Typography>
      </Box>
    </Box>
  );
};
