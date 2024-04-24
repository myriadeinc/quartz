import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MiningStats } from "renderer/components/MiningStats";
import { MiningSchedule } from "renderer/components/MiningSchedule";
import { MinerStarter } from "renderer/components/MinerStarter";
import { MINER_ARRAY } from "const";
import { HistoryChart } from "renderer/components/common/historyChart";
import { IMiner } from "renderer/interfaces/pages/dashboard";
import { useState, useEffect } from "react";
import { fetchCurrentHashrate } from "services/api.service";

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
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
              alignItems: "center",
              backgroundColor: "#080A0F",
              marginTop: "20px",
              marginRight: "10px",
              zIndex: 2,
              borderRadius: "0 0 7px 7px",
              border: "1px solid rgba(234, 234, 234, 0.2)",
            }}
          >
            {MINER_ARRAY.map((miner: IMiner, index) => {
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
                    <img
                      src={miner.src}
                      alt={miner.alt}
                      style={{
                        maxWidth: "44px",
                        minHeight: "44px",
                        objectFit: "cover",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    />
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{
                        fontSize: "14px",
                        color: "#EAEAEA",
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      {miner.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          padding="1rem"
          columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        >
          <Grid item xs={12} md={12} lg={8}>
            <MinerStarter />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MiningSchedule />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          padding={"1rem"}
          columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
        >
          <Grid item xs={12} md={12} lg={8}>
            <HistoryChart isAnalytics={false} padding="0 0 1rem" />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <MiningStats CurrentHashrateData={hashrateData} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
