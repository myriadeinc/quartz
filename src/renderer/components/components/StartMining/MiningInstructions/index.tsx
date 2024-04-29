import { Box } from "@mui/material";
import { MINER_INSTRUCTIONS_ARRAY } from "const";
import { Instructions } from "renderer/components/molecules/StartMining-I/Instructions";

export const MiningInstructionsBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        width: { xs: "100%", sm: "100%", md: "inherit" },
        maxWidth: "1473px",
        alignItems: "center",
        backgroundColor: "#080A0F",
        marginTop: "20px",
        marginRight: "10px",
        zIndex: 2,
        borderRadius: "0 0 7px 7px",
        border: "1px solid #293040",
      }}
    >
      {MINER_INSTRUCTIONS_ARRAY.map((element, index) => {
        return (
          <Instructions
            key={index}
            instructions={element.title}
            InstructionIcon={element.InstructionIcon}
          />
        );
      })}
    </Box>
  );
};
