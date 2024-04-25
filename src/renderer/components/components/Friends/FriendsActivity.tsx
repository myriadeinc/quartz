import { Box } from "@mui/material";
import React from "react";
import Typography from "renderer/components/atoms/TextStyles";
import { Friends } from "renderer/components/molecules/Friends/Friends";
import { FriendsActivityCardHeader } from "renderer/components/molecules/Friends/FriendsActivityCardHeader";

type Props = {};

export const FriendsActivity = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}
    >
      <Typography variant="heading2" color="#EAEAEA">
        Friends Activity
      </Typography>
      <Box sx={{ borderRadius: "7px", padding: "0 20px 20px 20px" }}>
        <FriendsActivityCardHeader />
        {Array(13)
          .fill(0)
          .map(() => {
            return (
              <Friends
                isMetrics={false}
                friendName="Salt.Mine#69"
                mining="Mining for 53:22"
              />
            );
          })}
      </Box>
    </Box>
  );
};
