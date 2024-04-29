import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { MinerStatusIcon } from "renderer/components/atoms/FriendsWorkers/MinersStatus";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";
import DropdownIcon from "renderer/components/atoms/Settings/Settings-III/DropdownIcon";
import DropupIcon from "renderer/components/atoms/Settings/Settings-III/DropupIcon";
import Typography from "renderer/components/atoms/TextStyles";
const WORKER_SUMMARY = [
  {
    name: "Philip",
  },
  {
    title: "Hashrate",
    vallue: "1251.52 h/s",
  },
  {
    title: "Hashrate 24hr",
    vallue: "1251.52 h/s",
  },
  {
    title: "Accepted Shares",
    vallue: "50,687",
  },
  {
    title: "Hashrate",
    vallue: "1251.52 h/s",
  },
  {
    title: "Hashrate",
    vallue: "1251.52 h/s",
  },
];
export const WorkerSummary = () => {
  const [isGraph, setIsGraph] = useState(false);
  return (
    <Box
      sx={{
        border: "7px",
        backgroundColor: "#0F141F",
        display: "flex",
        flexDirection: "column",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-evenly",
          borderBottom: "1px solid #414E66",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <MinerStatusIcon src="/assets/svg/Workers-Icon.svg" />
          <Box sx={{ padding: "10px 0 10px 12px" }}>
            <Typography variant="heading4" color="#EAEAEA">
              Philip
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Hashrate
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            1,251.52 h/s
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Hashrate 24hr
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            1,251.52 h/s
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Accepted Shares
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            50,687
          </Typography>
        </Box>
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setIsGraph(!isGraph)}
          edge="end"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            right: 0,
          }}
        >
          {isGraph ? (
            <DropupIcon pathColor="#EAEAEA" rectangleColor="transparent" />
          ) : (
            <DropdownIcon pathColor="#EAEAEA" rectangleColor="transparent" />
          )}
        </IconButton>
        <SecondaryButton variant="medium" text="Edit" />
      </Box>
      <Box sx={{ paddingTop: "20px", alignSelf: "center" }}>
        <PrimaryButton text=" Add Worker" />
      </Box>
      <Box
        sx={{
          display: "grid",
          padding: "20px",
          gridTemplateColumns: "1fr 1fr 1fr 2fr",
          justifyContent: "space-evenly",
          borderBottom: "1px solid #414E66",
        }}
      >
        <Box sx={{ padding: "10px 0 10px 12px" }}>
          <Typography variant="heading4" color="#EAEAEA">
            # of workers
          </Typography>
          <Typography color="#FA6F15" variant="heading2">
            {" "}
            2
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Hashrate
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            1,251.52 h/s
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Hashrate 24hr
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            1,251.52 h/s
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography variant="bodySmall" color="#8C8C8C">
            Accepted Shares
          </Typography>
          <Typography variant="heading4" color="#EAEAEA">
            50,687
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
