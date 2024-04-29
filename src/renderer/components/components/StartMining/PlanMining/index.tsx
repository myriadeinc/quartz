import { Box, IconButton } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { MiningRangeSelectorButtonGroup } from "./MiningRangeSelector";
import { AddIcon } from "renderer/components/atoms/StartMining-I/AddButton/Index";
import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";

export const PlanningMining = () => {
  return (
    <Box
      sx={{
        maxWidth: "1473px",
        display: "flex",
        height: "504px",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box sx={{ maxWidth: "614px", display: "flex" }}>
          <Typography>From :</Typography>
          <MiningRangeSelectorButtonGroup
            width="544px"
            firstButtonTitle="Day"
            SecondButtonTitle="Hour"
            ThirdButtonTitle="Minute"
            FourthButtonTitle="AM/PM"
          />
        </Box>
        <Box sx={{ maxWidth: "614px", display: "flex" }}>
          <Typography>To :</Typography>
          <MiningRangeSelectorButtonGroup
            width="544px"
            firstButtonTitle="Day"
            SecondButtonTitle="Hour"
            ThirdButtonTitle="Minute"
            FourthButtonTitle="AM/PM"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <IconButton
          aria-label="toggle password visibility"
          // onClick={onToggleVisible}
          edge="end"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Box sx={{ width: "100%", justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <SecondaryButton variant="large" width="120px" text="Close" />
          <Box sx={{ width: "120px" }}>
            <PrimaryButton text="Confirm" height="40px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
