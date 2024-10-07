import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "renderer/components/atoms/TextStyles";
import { MINER_STATS_ARRAY } from "const";
import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";

export const MiningStatsContainer = ({ CurrentHashrateData }: any) => {
  return (
    <Stack
      sx={{
        borderRadius: "8px",
      }}
      gap={"1.3rem"}
    >
      <Box>
        <Typography fontSize={"1rem"} fontWeight={"600"} color={"#FFF"}>
          Mining Stats
        </Typography>
      </Box>
      <Stack
        sx={{ backgroundColor: "#0F141F", borderRadius: "7px", width: "100%"
          
         }}
        display={"flex"}
        flexWrap={"wrap"}
        // direction={"row"}
        padding={"1rem"}
      >
        {MINER_STATS_ARRAY.map((stats, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                maxWidth: "208px",
                maxHeight: "96px",
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "7px",
                padding: "20px 12px 20px 12px",
              }}
              key={index}
            >
              <Typography color="#8C8C8C" variant="body">
                {stats.heading}
              </Typography>
              <Typography variant="body" color="#EAEAEA">
                {CurrentHashrateData?.hashrate || "-"}
              </Typography>
            </Box>
          );
        })}
        <Box sx={{ alignSelf: "end", paddingTop: "20px" }}>
          <SecondaryButton variant="large" text="Pool Stats" />
        </Box>
      </Stack>
    </Stack>
  );
};
