import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";
import Typography from "renderer/components/atoms/TextStyles";

type Props = {};

export const MiningPlanContainer = () => {
  return (
    <Stack
      padding={"12px"}
      direction={"column"}
      gap={"1rem"}
      sx={{
        flexBasis: "40%",
        backgroundColor: "#0F141F",
        borderRadius: "7px",
      }}
    >
      <Box>
        <Typography variant="bodyLarge" color="#EAEAEA">
          Plan Your Mining
        </Typography>
      </Box>
      <Box alignSelf={{ md: "auto", lg: "center" }}>
        <img
          src="/assets/img/Illustration.webp"
          alt="Plan your Mining Image"
          style={{
            zIndex: 3,
            backgroundPosition: "50% 50%",
          }}
        />
      </Box>
      <Box alignSelf={"end"}>
        <SecondaryButton variant="large" text="Plan Mining" />
      </Box>
    </Stack>
  );
};
