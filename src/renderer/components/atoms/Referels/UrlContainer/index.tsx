import { Box, IconButton, InputAdornment } from "@mui/material";
import { CopyIcon } from "../CopyIcon";
import Typography from "../../TextStyles";

export const UrlContainer = () => {
  return (
    <Box
      variant="standard"
      id="outlined-basic"
      sx={{
        maxWidth: "336px",
        maxHeight: "32px",
        fontSize: "14px",
        border: "1px solid #EAEAEA",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxHeight: "32px", paddingLeft: "8px" }}>
        <Box>
          <Typography variant="body" color="#6C81F5">
            myriade.ico/myreferralcode
          </Typography>
        </Box>
      </Box>
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
          position: "relative",
          right: "11px",
        }}
      >
        <CopyIcon />
      </IconButton>
    </Box>
  );
};
