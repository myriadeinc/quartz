import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import VisibilityOff from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOff";
import VisibilityOn from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOn";

type Props = {};
const PASSWORD_FIELDS = [
  { id: 1, placeholder: "Enter New Password", name: "NewPassword" },
  {
    id: 2,
    placeholder: "Re-Enter New Password",
    name: "ReEnterNewPassword",
  },
];
export const PasswordChangeForm = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState({
    OldPassword: false,
    NewPassword: false,
    ReEnterNewPassword: false,
  });
  const [isToggled, setIsToggled] = React.useState({
    OldPassword: false,
    NewPassword: false,
    ReEnterNewPassword: false,
  });
  const [passwordChange, setChangedPassword] = React.useState({
    OldPassword: "",
    NewPassword: "",
    ReEnterNewPassword: "",
  });

  const handlePasswordChange = (event) => {
    const { name } = event.target as HTMLInputElement;
    setChangedPassword((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };
  const handleToggle = (event: React.MouseEvent<HTMLInputElement>) => {
    const { name } = event.target as HTMLInputElement;
    setIsToggled((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };
  const handleMouseEnter = (event: React.MouseEvent<HTMLInputElement>) => {
    const { name } = event.target as HTMLInputElement;
    setIsHovered((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLInputElement>) => {
    const { name } = event.target as HTMLInputElement;
    setIsHovered((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            "&:focus": {
              borderBottom: "2px solid #FA6F15",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              height: "35px",
            }}
          >
            <TextField
              variant="standard"
              id="outlined-basic"
              name="OldPassword"
              style={{
                fontSize: "14px",
                width: "230px",
                height: "32px",
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
              type={isToggled.NewPassword ? "text" : "password"}
              //   value={state.password}
              onChange={handlePasswordChange}
              InputProps={{
                disableUnderline: true,
                fullWidth: true,
              }}
            />
            <Box
              sx={{
                position: "relative",
                bottom: "33px",
                right: "12px",
                alignSelf: "end",
              }}
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleToggle}
                edge="end"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                  padding: "0",
                  "&:hover": {
                    color: "",
                  },
                }}
              >
                {isToggled.OldPassword ? (
                  <VisibilityOff
                    rectangleColor={
                      isHovered.OldPassword ? "#FA6F15" : "#414E66"
                    }
                    pathColor={isHovered.OldPassword ? "#0F141F" : "#EAEAEA"}
                  />
                ) : (
                  <VisibilityOn
                    rectangleColor={isHovered ? "#FA6F15" : "#414E66"}
                    pathColor={isHovered ? "#0F141F" : "#EAEAEA"}
                  />
                )}
              </IconButton>
            </Box>
          </div>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {PASSWORD_FIELDS.map((element) => {
            return (
              <Box
                key={element.id}
                sx={{
                  "&:focus": {
                    borderBottom: "2px solid #FA6F15",
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    height: "35px",
                  }}
                >
                  <TextField
                    variant="standard"
                    id="outlined-basic"
                    name={element.name}
                    style={{
                      fontSize: "14px",
                      width: "230px",
                      height: "32px",
                    }}
                    inputProps={{
                      style: {
                        padding: 5,
                      },
                    }}
                    size="small"
                    fullWidth
                    placeholder={element.placeholder}
                    sx={{
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
                    type={isToggled.NewPassword ? "text" : "password"}
                    //   value={passwordChange.[element.name]}
                    onChange={handlePasswordChange}
                    InputProps={{
                      disableUnderline: true,
                      fullWidth: true,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      bottom: "33px",
                      right: "12px",
                      alignSelf: "end",
                    }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleToggle}
                      edge="end"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      sx={{
                        padding: "0",
                        "&:hover": {
                          color: "",
                        },
                      }}
                    >
                      {isToggled.OldPassword ? (
                        <VisibilityOff
                          rectangleColor={isHovered ? "#FA6F15" : "#414E66"}
                          pathColor={isHovered ? "#0F141F" : "#EAEAEA"}
                        />
                      ) : (
                        <VisibilityOn
                          rectangleColor={isHovered ? "#FA6F15" : "#414E66"}
                          pathColor={isHovered ? "#0F141F" : "#EAEAEA"}
                        />
                      )}
                    </IconButton>
                  </Box>
                </div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
