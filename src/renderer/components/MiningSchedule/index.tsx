import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import { Typography as MuiTypography } from "@mui/material";
import Typography from "../atoms/TextStyles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Card from "@mui/material/Card";
import { MiningAllocationWidget } from "../components/StartMining/MininAllocationWidget";

export const MiningSchedulerBox = () => {
  return (
    <Card
      sx={{
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <MiningAllocationWidget />
      <Stack
        padding={"20px 20px 24px 19px"}
        direction={"column"}
        gap={"1rem"}
        sx={{
          backgroundColor: "#0F141F",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography variant="heading2" color="#EAEAEA">
            Plan Your Mining
          </Typography>
        </Box>
        <Box alignSelf={{ md: "auto", lg: "auto", xl: "auto" }}>
          <img
            src="/assets/Illustrations/Illustration.webp"
            alt="Plan your Mining Image"
            style={{
              zIndex: 3,
              backgroundPosition: "50% 50%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box alignSelf={"end"}>
          <Button
            sx={{
              maxWidth: "120px",
              maxHeight: "40px",
              textTransform: "capitalize",
              backgroundColor: "transparent",
              border: "2px solid #FA6F15",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              color: "#FFF",
            }}
          >
            Plan Mining
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
