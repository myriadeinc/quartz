import { useState } from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityOn from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOn";
import VisibilityOff from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOff";
type formProps = {
  onEmailChange: (e: any) => void;
  onPasswordChange: (e: any) => void;
  state: Object;
  onToggleVisible: (e: any) => void;
};

const Form = ({
  state,
  onEmailChange,
  onPasswordChange,
  onToggleVisible,
}: formProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <Box
        sx={{
          maxWidth: "360px",
          maxHeight: "32px",
          paddingTop: "20px",
          margin: "auto",
        }}
      >
        <TextField
          variant="standard"
          id="outlined-basic"
          InputProps={{
            disableUnderline: true,
          }}
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
          placeholder="Email"
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
          onChange={onEmailChange}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "360px",
          maxHeight: "32px",
          paddingTop: "20px",
          margin: "auto",
          "&:focus": {
            borderBottom: "2px solid #FA6F15",
          },
        }}
      >
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
                    <VisibilityOn
                      rectangleColor={"#414E66"}
                      pathColor="#EAEAEA"
                    />
                  ) : (
                    <VisibilityOff color="#EAEAEA" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Form;