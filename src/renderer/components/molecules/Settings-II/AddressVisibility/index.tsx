import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityOff from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOff";
import VisibilityOn from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOn";
import Typography from "renderer/components/atoms/TextStyles";

export const AddressVisibility = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box sx={{ width: "261px" }}>
      <Box sx={{ width: "229px", wordBreak: "break-word" }}>
        <Typography variant="bodySmall" color="#656565">
          {" "}
          Current Address:
        </Typography>
        <Typography variant="bodySmall" color="#656565">
          {moneroAddress}
        </Typography>
      </Box>
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setToggle(!toggle)}
        edge="end"
        sx={{
          "&:hover": {
            "& .MuiIconButton-label > svg": {
              color: "red",
            },
          },
        }}
      >
        {toggle ? (
          <VisibilityOn rectangleColor={"#414E66"} pathColor="#EAEAEA" />
        ) : (
          <VisibilityOff />
        )}
      </IconButton>
    </Box>
  );
};
