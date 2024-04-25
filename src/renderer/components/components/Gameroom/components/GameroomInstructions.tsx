import { Box } from "@mui/material";
import { GAME_INSTRUCTIONS_DATA } from "const";
import { Instructions } from "renderer/components/molecules/StartMining-I/Instructions";
type Props = {};
console.log("GAME_INSTRUCTIONS_DATA", GAME_INSTRUCTIONS_DATA);
export const GameInstructionsBox = () => {
  console.log("insructions");
  return (
    <Box
      className="23497023840238"
      sx={{
        display: "flex",
        flexDirection: {
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        },
        width: { xs: "100%", sm: "100%", md: "95%" },
        alignItems: "center",
        backgroundColor: "#080A0F",
        marginTop: "20px",
        marginRight: "10px",
        zIndex: 2,
        borderRadius: "0 0 7px 7px",
        border: "1px solid rgba(234, 234, 234, 0.2)",
      }}
    >
      {GAME_INSTRUCTIONS_DATA.map((element, index) => {
        return (
          <Instructions
            key={element.alt}
            instructions={element.title}
            InstructionIcon={element.InstructionIcon}
          />
        );
      })}
    </Box>
  );
};
