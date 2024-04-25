import { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
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
  const [isHovered, setIsHovered] = useState(false);
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
        <div
          className="ASdfasfsf"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
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
            }}
          />
          <Box sx={{ position: "relative", bottom: "31px", right: "14px" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={onToggleVisible}
              edge="end"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                padding: "0",
                "&:hover": {
                  color: "",
                },
              }}
            >
              {state.showPassword ? (
                <VisibilityOn
                  rectangleColor={isHovered ? "#FA6F15" : "#414E66"}
                  pathColor={isHovered ? "#0F141F" : "#EAEAEA"}
                />
              ) : (
                <VisibilityOff
                  rectangleColor={isHovered ? "#FA6F15" : "#414E66"}
                  pathColor={isHovered ? "#0F141F" : "#EAEAEA"}
                />
              )}
            </IconButton>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Form;
