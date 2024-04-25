import { Box } from "@mui/material";
import { DiscordIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/DiscordIcon";
import { MailIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/MailIcon";
import { TwitterIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/SupportIcons/components/TwitterIcon";
import Typography from "renderer/components/atoms/TextStyles";

export const SupportSocialHandles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        paddigLeft: "40px",
        alignSelf: "end",
      }}
    >
      <Typography color="#8C8C8C" variant="bodyLarge">
        CONTACT SUPPORT
      </Typography>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <DiscordIcon />
        <TwitterIcon />
        <MailIcon />
      </Box>
    </Box>
  );
};
