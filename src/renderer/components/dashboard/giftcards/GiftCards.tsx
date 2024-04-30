// import Typography from "@mui/material/Typography";
import Typography from "renderer/components/atoms/TextStyles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { MineGiftCard } from "renderer/components/components/GIftCards/MineGiftCard";
import { MiningSchedulerBox } from "renderer/components/MiningSchedule";
import { GCHistory } from "renderer/components/molecules/GiftCards-III";
import { RangeSelectorButtonGroup } from "renderer/components/atoms/Dashboard/RangeSelectors";
import { MiningRangeSelectorButtonGroup } from "renderer/components/components/StartMining/PlanMining/MiningRangeSelector";

export const GiftCards = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "calc(100% - 406px)",
          lg: "calc(100% - 406px)",
        },
        marginLeft: "406px",
        padding: "21px",
      }}
    >
      <Grid item xs={12} sx={{ paddingLeft: "0px !important" }}>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography variant="heading1" color="#EAEAEA">
            Gift Cards
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12} lg={8} sx={{ paddingLeft: "0px !important" }}>
        <MineGiftCard />
      </Grid>
      <Grid
        item
        md={12}
        lg={4}
        sx={{
          paddingLeft: {
            md: "0px !important",
            lg: "20px !important",
            xl: "20px !important",
          },
        }}
      >
        <MiningSchedulerBox />
      </Grid>
      <Grid item xs={12} sx={{ paddingLeft: "0px !important" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            paddingTop: "32px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography color="#EAEAEA" variant="heading2">
              History
            </Typography>
            <MiningRangeSelectorButtonGroup
              firstButtonTitle="5 Days"
              SecondButtonTitle="10 Days"
              ThirdButtonTitle="50 Days"
              FourthButtonTitle="All"
              isFourtButtonTextCapital={true}
            />
          </Box>
          <GCHistory />
        </Box>
      </Grid>
    </Grid>
  );
};
