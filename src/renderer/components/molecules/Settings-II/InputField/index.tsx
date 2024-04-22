import React from "react";

type Props = {};

export const SettingsInputField = (props: Props) => {
  return (
    <TextField
      variant="standard"
      id="outlined-basic"
      style={{
        maxWidth: "360px",
        maxHeight: "32px",
        fontSize: "14px",
      }}
      inputProps={{
        style: {
          padding: 5,
        },
      }}
      size="small"
      fullWidth
      placeholder="Password"
      sx={{
        mt: "20px",
        border: "1px solid #414E66",
        borderRadius: "3px",
        "& input:focus": {
          borderBottom: "2px solid #FA6F15",
          outline: "none",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
          },
        },
        "&:focus": {
          outline: "none",
          border: "0",
        },
      }}
      type={state.showPassword ? "text" : "password"}
      value={state.password}
      onChange={onPasswordChange}
      InputProps={{
        disableUnderline: true,
        fullWidth: true,
        endAdornment: (
          <InputAdornment position="end" sx={{ ":hover": "none" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={onToggleVisible}
              edge="end"
              sx={{
                "&:hover": {
                  "& .MuiIconButton-label > svg": {
                    color: "red",
                  },
                },
              }}
            >
              {state.showPassword ? (
                <VisibilityOn rectangleColor={"#414E66"} pathColor="#EAEAEA" />
              ) : (
                <VisibilityOff color="#EAEAEA" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
