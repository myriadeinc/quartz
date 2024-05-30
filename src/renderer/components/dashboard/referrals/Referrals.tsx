import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "renderer/components/atoms/TextStyles";
import { ReferelTiers } from "renderer/components/components/Referels/ReferelTiers";
import { ReferelsInstructions } from "renderer/components/components/Referels/ReferelsInstructions";
import { ReferelsSharing } from "renderer/components/components/Referels/ReferelsSharing";

export const Referrals = () => {
  return (
    <Grid
      container
      item
      style={{
        width: "calc(100% - 406px)",
        marginLeft: "406px",
        padding: "20px",
      }}
      // alignItems={"center"}
      // justifyContent={"center"}
    >
      <Typography variant="heading1" color="#EAEAEA">
        Referrals
      </Typography>
      <Box sx={{ paddingTop: "32px" }} width={"100%"}>
        <ReferelsInstructions />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "1fr",
            lg: "2fr 1fr",
            xl: "2fr 1fr",
          },
          paddingTop: "32px",
          gap: "20px",
        }}
      >
        <ReferelsSharing />
        <ReferelTiers />
      </Box>
    </Grid>
  );
};
