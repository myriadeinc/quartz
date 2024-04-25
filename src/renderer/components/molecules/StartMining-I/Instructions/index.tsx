import { Box } from "@mui/material";
import React, { ReactElement } from "react";
import { StartMiningIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/StartMiningIcon";
import Typography from "renderer/components/atoms/TextStyles";

type InstructionProps = {
  instructions: string;
  InstructionIcon: any;
  key: string;
};

export const Instructions = ({
  instructions,
  InstructionIcon,
  key,
}: InstructionProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
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
      key={key}
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
        {InstructionIcon}
        <StartMiningIcon pathColor="#EAEAEA" rectangleColor="transparent" />
        <Typography variant="body" color="#EAEAEA" centered>
          {instructions}
        </Typography>
      </Box>
    </Box>
  );
};
