import { Box } from "@mui/material";
import { useState } from "react";
import { CustomAvatar } from "renderer/components/atoms/Settings/Settings-III/Avatar";
import { UserProfileInfo } from "renderer/components/molecules/Settings-I/UserProfileInfo";

type Props = {};

export const UserProfile = (props: Props) => {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <CustomAvatar />
      <UserProfileInfo />
    </Box>
  );
};
