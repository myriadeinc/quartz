import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export const SupportContactSocials = () => {
  return (
    <Grid item sm={12} style={{ marginLeft: "20px", marginTop: "240px" }}>
      <Typography
        fontFamily="Poppins, sans-serif"
        style={{ fontSize: 18, color: "#8C8C8C" }}
      >
        CONTACT SUPPORT
      </Typography>

      <div style={{ display: "flex", gap: "15px" }}>
        <a
          href="https://discord.gg/J9Pn7Dk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            src="/assets/svg/Discord.svg"
            alt="Discord"
            sx={{ width: 44, height: 44 }}
          />
        </a>
        <a
          href="https://twitter.com/MyriadeInc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            src="/assets/svg/Twitter.svg"
            alt="Twitter"
            sx={{ width: 44, height: 44 }}
          />
        </a>
        <a
          href="mailto:support@myriade.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            src="/assets/svg/Mail.svg"
            alt="Mail"
            sx={{ width: 44, height: 44 }}
          />
        </a>
      </div>
    </Grid>
  );
};
