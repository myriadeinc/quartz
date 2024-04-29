import { Box } from "@mui/material";
import { Link } from "@mui/material";
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
        paddingLeft: "40px",
        paddingBottom: "24px",
        alignSelf: "end",
      }}
    >
      <Typography color="#8C8C8C" variant="bodyLarge">
        CONTACT SUPPORT
      </Typography>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Link href="https://discord.gg/J9Pn7Dk" target="_blank">
          <DiscordIcon />
        </Link>
        <Link href="https://twitter.com/MyriadeInc" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="mailto:support@myriade.io" target="_blank">
          <MailIcon />
        </Link>
      </Box>
    </Box>
  );
};
