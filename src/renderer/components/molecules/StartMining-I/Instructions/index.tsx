import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Typography from "renderer/components/atoms/TextStyles";

type InstructionProps = {
  instructions: string;
  InstructionIcon: ReactNode;
};

export const Instructions = ({
  instructions,
  InstructionIcon,
}: InstructionProps) => {
  return (
    <Box
      sx={{
        width: "284px",
        height: "104px",
        padding: "7px 7px 11px 7px",
        gap: "16px",
      }}
    >
      <InstructionIcon />
      <Box>
        <Typography variant="bodySmall" centered>
          {instructions}
        </Typography>
      </Box>
    </Box>
  );
};
