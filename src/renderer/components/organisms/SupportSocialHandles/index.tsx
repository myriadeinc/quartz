import { Box } from "@mui/material";
import React from "react";
import SupportIcon from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons";
import { DiscordIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/DiscordIcon";
import { MailIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/MailIcon";
import { TwitterIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/TwitterIcon";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {};

export const SupportSocialHandles = (props: Props) => {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Typography color="#8C8C8C" variant="bodyLarge">
        CONTACT SUPPORT
      </Typography>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <SupportIcon name="DiscordIcon" />
        <SupportIcon name="TwitterIcon" />
        <SupportIcon name="MailIcon" />
      </Box>
    </Box>
  );
};
