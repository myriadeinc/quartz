import { Box } from "@mui/material";
import React from "react";
import { RangeSelectorButtonGroup } from "renderer/components/atoms/Dashboard/RangeSelectors";
import Typography from "renderer/components/atoms/TextStyles";
import GCHistory from "renderer/components/molecules/GiftCards-III";

type Props = {};

export const GiftHistoryTable = (props: Props) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="heading2" color="#EAEAEA">
          History
        </Typography>
        <RangeSelectorButtonGroup />
        <GCHistory />
      </Box>
    </Box>
  );
};
