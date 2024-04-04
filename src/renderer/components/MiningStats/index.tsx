import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { MINER_STATS_ARRAY } from "const";
export const MiningStats = () => {
  return (
    <Stack
      sx={{
        flexBasis: "30%",
        borderRadius: "8px",
      }}
      gap={"1rem"}
    >
      <Box>
        <Typography fontSize={"1rem"} fontWeight={"600"} color={"#FFF"}>
          Mining Stats
        </Typography>
      </Box>
      <Stack
        sx={{ backgroundColor: "#0F141F", borderRadius: "8px", width: "100%" }}
        flexWrap={"wrap"}
        direction={"row"}
        padding={"1rem"}
        gap={"12px"}
      >
        {MINER_STATS_ARRAY.map((stats) => {
          return (
            <Box
              sx={{
                maxHeight: "100%",
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "7px",
                marginBottom: "20px",
                padding: "1rem",
                flex: "28%",
              }}
            >
              <Stack
                direction="column"
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                width="100%"
              >
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    fontSize: "10px",
                    color: "#EAEAEA",
                    fontWeight: 400,
                    textAlign: "left",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stats.heading}
                </Typography>
                {stats.isDivider ? (
                  <Divider
                    sx={{
                      bgcolor: "#EAEAEA",
                      height: 0.01,
                      marginTop: "10px",
                      minWidth: "15px",
                    }}
                  />
                ) : (
                  <Typography
                    fontFamily="Poppins, sans-serif"
                    style={{
                      fontSize: "10px",
                      color: "#EAEAEA",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                  >
                    {stats.time}
                  </Typography>
                )}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};
