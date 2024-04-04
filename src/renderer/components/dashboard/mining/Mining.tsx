import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MiningStats } from "renderer/components/MiningStats";
import { MiningSchedule } from "renderer/components/MiningSchedule";
import { MinerStarter } from "renderer/components/MinerStarter";
import { MINER_ARRAY } from "const";
import { HistoryChart } from "renderer/components/common/historyChart";
export const Mining = () => {
  return (
    <Box
      style={{
        width: "calc(100% - 406px)",
        marginLeft: "406px",
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

        <Grid
          container
          style={{
            backgroundColor: "#080A0F",
            backgroundImage: "none",
            backgroundSize: "cover",
            maxHeight: "152px",
            padding: "0px",
            marginLeft: "20px",
            marginTop: "20px",
            marginRight: "10px",
            zIndex: 2,
            borderRadius: "0 0 7px 7px",
            border: "1px solid rgba(234, 234, 234, 0.2)",
          }}
        >
          {MINER_ARRAY.map((miner) => {
            return (
              <Grid
                item
                xs={3}
                style={{
                  borderRight: "1px solid rgba(234, 234, 234, 0.2)",
                  padding: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  margin: "auto",
                  placeContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={miner.src}
                    alt={miner.alt}
                    style={{
                      maxWidth: "44px",
                      maxHeight: "44px",
                      objectFit: "cover",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  />
                </Box>

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
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={2} padding={"1rem"}>
          <Grid item xs={8}>
            <MinerStarter />
          </Grid>
          <Grid item xs={4}>
            <MiningSchedule />
          </Grid>
        </Grid>

        <Box
          display={"grid"}
          gap={2}
          gridTemplateColumns={{
            md: "1fr",
            sm: "1fr",
            xs: "1fr",
            lg: "1fr 1fr ",
          }}
          sx={{
            width: "100%",
            direction: "row",
            maxHeight: "470px",
            margin: "16px",
            justifyContent: "space-between",
          }}
        ></Box>
        <Grid container spacing={2} padding={"1rem"}>
          <Grid item xs={8}>
            <HistoryChart isAnalytics={false} padding="0 0 1rem" />
          </Grid>
          <Grid item xs={4}>
            <MiningStats />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
