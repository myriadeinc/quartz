import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MiningStats } from "renderer/components/MiningStats";
// import { MiningSchedule } from "renderer/components/MiningSchedule";
import { MinerStarter } from "renderer/components/MinerStarter";
import { MINER_ARRAY } from "const";
import { HistoryChart } from "renderer/components/common/historyChart";
import { IMiner } from "renderer/interfaces/pages/dashboard";
import { useState, useEffect } from "react";
import { fetchCurrentHashrate } from "services/api.service";
import { MiningInstructionsBox } from "renderer/components/components/StartMining/MiningInstructions";
import { MiningSchedulerBox } from "renderer/components/MiningSchedule";
import { MiningStatsContainer } from "renderer/components/components/StartMining/MiningStatsContainer";

export const Mining = () => {
  const [hashrateData, setHashrateData] = useState(2);
  useEffect(() => {
    const CurrentHashrate = async () => {
      try {
        const data = await fetchCurrentHashrate();
        if (data) {
          setHashrateData(data);
        }
      } catch (error) {
        console.error("Error fetching current hashrate:", error);
      }
    };
    CurrentHashrate();
  }, []);
  return (
    <Box
      sx={{
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "calc(100% - 436px)",
          lg: "calc(100% - 436px)",
          xl: "calc(100% - 436px)",
        },
        marginLeft: "400px",
        padding: "1.5rem",
      }}
    >
      <Grid container>
      <Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "28px",
                color: "#EAEAEA",
                marginTop: "25px",
                marginLeft: "20px",
                fontWeight: 400,
              }}
            >
              Start Mining
            </Typography>
          </Box>
        {/*
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          
          <MiningInstructionsBox />
        </Box>
            */}
        <Grid
          container
          spacing={2}
          // padding="1rem"
          marginTop={"32px"}
          paddingLeft="0px"
          columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            sx={{
              maxWidth: "976px",
              minHeight: "496px",
              paddingTop: "0px !important",
            }}
          >
            <MinerStarter />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            sx={{
              maxWidth: "478px",
              paddingTop: "0px !important",
              marginTop: {
                md: "20px",
                lg: "0",
                xl: "0",
              },
            }}
          > 
            <MiningSchedulerBox />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          marginTop={"32px"}
          // padding={"1rem"}
          paddingLeft="0px"
          columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            sx={{ paddingTop: "0px !important" }}
          >
            <HistoryChart isAnalytics={false} padding="0 0 1rem" />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={4}
            sx={{
              paddingTop: "0px !important",
              marginTop: {
                md: "20px",
                lg: "0",
                xl: "0",
              },
            }}
          >
            <MiningStats CurrentHashrateData={hashrateData} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
