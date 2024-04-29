import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityOff from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOff";
import VisibilityOn from "renderer/components/atoms/Login/EyeToggle/Dark/VisibilityOn";
import Typography from "renderer/components/atoms/TextStyles";
const moneroAddress =
  "8tNkZrjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwPN6Js EcQ ";
const formatAddress = (address: string) => {
  const firstChars = address.substring(0, 6); // Show first 6 characters
  const lastChars = address.substring(address.length - 6); // Show last 6 characters
  return `${firstChars}...${lastChars}`;
};

export const AddressVisibility = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box sx={{ width: "261px", display: "flex" }}>
      <Box sx={{ width: "229px", wordBreak: "break-word" }}>
        <Typography variant="bodySmall" color="#656565">
          {" "}
          Current Address:
        </Typography>
        <Typography variant="bodySmall" color="#656565">
          {toggle ? moneroAddress : formatAddress(moneroAddress)}
        </Typography>
      </Box>
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setToggle(!toggle)}
        edge="end"
        sx={{
          padding: "0px",
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
          <VisibilityOff rectangleColor={"#414E66"} pathColor="#EAEAEA" />
        )}
      </IconButton>
    </Box>
  );
};
