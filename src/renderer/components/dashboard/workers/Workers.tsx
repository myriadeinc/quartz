import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "renderer/components/atoms/TextStyles";
import { WorkerSummary } from "renderer/components/components/Workers/WorkerSummary";
import { WorkersLeft } from "renderer/components/components/Workers/WorkersLeft";

export const Workers = () => {
  return (
    <Box
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
      // alignItems={"center"}
      // justifyContent={"center"}
    >
      <Box>
        <Typography color="#EAEAEA" variant="heading2">
          Workers
        </Typography>
      </Box>
      <Grid
        container
        xs={12}
        sx={{
          marginTop: "32px",
        }}
      >
        <Grid
          item
          md={12}
          xl={8}
          sx={{ marginBottom: { md: "20px", lg: "20px" } }}
        >
          <WorkerSummary />
        </Grid>
        <Grid item md={8} xl={4} sx={{ margingLeft: "20px" }}>
          <WorkersLeft />
        </Grid>
      </Grid>

      {/* // <Box */}
      {/* //   sx={{ */}
      {/* //     display: "grid", */}
      {/* //     paddingTop: "32px", */}
      {/* //     gap: "20px",
      //     gridTemplateColumns: {
      //       sm: "1fr",
      //       md: "1fr",
      //       lg: "2fr 1fr",
      //       xl: "2.5fr 1.5fr", */}
      {/* //     },
      //   }}
      // >
      //   <WorkerSummary />
      //   <WorkersLeft />
      // </Box> */}
    </Box>
  );
};
