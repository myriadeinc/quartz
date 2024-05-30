import { Box } from "@mui/material";
import BonusIcon from "renderer/components/atoms/FriendsWorkers/BonusIcon";
import Typography from "renderer/components/atoms/TextStyles";
import { InforContainerII } from "renderer/components/molecules/StartMining-I/InformationContainer/InfoContainer-II";

export const BonusforFriends = () => {
  return (
    <Box
      sx={{
        display: "grid",
        borderRadius: "7px",
        backgroundColor: "#0F141F",
        padding: "20px",
        gridTemplateColumns: {
          sm: "1fr",
          md: "1fr",
          lg: "2fr 1fr",
          xl: "2fr 1fr",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BonusIcon pathColor="#FA6F15" />
          <Typography variant="bodyLarge" color="#EAEAEA">
            Give your friends a bonus by mining at the same time as them
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "406px",
            height: "auto",
            padding: "20px",
            alignSelf: "center",
          }}
        >
          <img
            src="/assets/Illustrations/Illustration-for-Friends-Bonus.webp"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Box sx={{ paddingTop: "20px", alignSelf: "end", justifySelf: "end" }}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: {
              xs: "row",
              sm: "row",
              md: "row",
              lg: "column",
              xl: "column",
            },
          }}
        >
          <InforContainerII
            title="Friends Mining"
            points="4/10"
            label="The more friends you mine with, the higher your mining bonus becomes."
          />
          <InforContainerII
            title="Current Friend Bonus"
            points="1.2%"
            label="Next Friend Bonus: 1.6%"
          />
        </Box>
      </Box>
    </Box>
  );
};
