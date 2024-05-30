import { Box, Stack } from "@mui/material";
import { MINING_ALLOCATION_WIDGET_BOX } from "const";
import Typography from "renderer/components/atoms/TextStyles";
import { MiningAllocationWidgetBox } from "renderer/components/molecules/StartMining-I/MiningAllocationWidgets";

export const MiningAllocationWidget = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#0F141F",
        borderRadius: "8px",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          padding: "20px 20px 0",
        }}
      >
        <Typography variant="heading2" color={"#FFF"}>
          Mining Allocation
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        padding={"20px 20px 24px"}
        gap={"18px"}
      >
        {MINING_ALLOCATION_WIDGET_BOX.map((element) => {
          return (
            <MiningAllocationWidgetBox
              key={element.label}
              label={element.label}
              points={element.points}
              isIconshows={element.isIconShow}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
