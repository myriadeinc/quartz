import { Box } from "@mui/material";
import { MINER_INSTRUCTIONS_ARRAY } from "const";
import React from "react";
import { Instructions } from "renderer/components/molecules/StartMining-I/Instructions";
type Props = {};

export const MiningInstructionsBox = () => {
  return (
    <Box>
      {MINER_INSTRUCTIONS_ARRAY.map((element, index) => {
        <Instructions
          key={index}
          instructions={element.title}
          InstructionIcon={element.InstructionIcon}
        />;
      })}
    </Box>
  );
};
