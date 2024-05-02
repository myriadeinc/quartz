import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";

export const WorkersLeft = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        backgroundColor: "#0F141F",
        borderRadius: "7px",
        maxHeight: "496px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            // paddingLeft: "32px",
          }}
        >
          <Typography variant="body" color="#EAEAEA">
            You can monitor all your machines that mine on myriade
          </Typography>
          <Typography variant="body" color="#EAEAEA">
            on this page. Have fun personalizing and naming them.
          </Typography>
        </Box>
        <Box
          sx={{
            // minWidth: "406px",
            height: "-webkit-fill-available",
            padding: "20px",
            alignSelf: "center",
          }}
        >
          <img
            src="/assets/Illustrations/Workers.webp"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
