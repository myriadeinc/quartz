import { TextField } from "@mui/material";

export const UrlContainer = () => {
  return (
    <TextField
      variant="standard"
      id="outlined-basic"
      style={{
        maxWidth: "336px",
        maxHeight: "32px",
        fontSize: "14px",
      }}
      inputProps={{
        style: {
          padding: "0 31px 0 8px",
          color: "#6C81F5",
        },
      }}
      size="small"
      fullWidth
      placeholder="Password"
      sx={{
        mt: "20px",
        border: "1px solid #414E66",
        borderRadius: "3px",
        backgroundColor: "#141A29",
      }}
      type="text"
      // onChange={onPasswordChange}
      InputProps={{
        disableUnderline: true,
        fullWidth: true,
        endAdornment: (
          <InputAdornment position="end" sx={{ ":hover": "none" }}>
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
              <UrlIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
